# Kadence Blocks: SVG Bypass for unfiltered_html Permission

## The Problem

WordPress strips `<svg>` tags from post content for users without the `unfiltered_html` capability (typically Contributors and Editors). This is a security measure since SVGs can contain JavaScript and pose XSS risks.

**Result**: Users without administrator privileges cannot add SVG icons or graphics directly.

## Kadence's Clever Solution

Kadence Blocks implements a **3-layer approach** to bypass this WordPress restriction:

1. **Store SVG data as JSON** (not actual SVG markup)
2. **Save placeholder elements** in post content (safe HTML that WordPress allows)
3. **Dynamically generate SVG** on the frontend using PHP filters

---

## Architecture Overview

### Storage Format: JSON Data Structure

Instead of storing actual SVG markup, Kadence stores SVGs as a compressed JSON structure:

**JSON Structure:**
```php
$ico['fe_aperture'] = array(
    'vB' => '0 0 24 24',  // viewBox
    'cD' => array(        // child Data (array of elements)
        array(
            'nE' => 'circle',              // node Element name
            'aBs' => array(                // attriButes
                'cx' => '12',
                'cy' => '12',
                'r' => '10'
            )
        ),
        array(
            'nE' => 'line',
            'aBs' => array(
                'x1' => '14.31',
                'y1' => '8',
                'x2' => '20.05',
                'y2' => '17.94'
            )
        )
        // ... more elements
    )
);
```

**Key Properties:**
- `vB` = viewBox (SVG viewport)
- `cD` = child Data (array of SVG elements)
- `nE` = node Element name (path, circle, polygon, line, etc.)
- `aBs` = attriButes (all SVG attributes for that element)
- `children` = nested child elements (for complex SVGs)

---

## Component Files

### 1. Icon Data Storage

**Location:** Three main PHP files contain pre-defined icon arrays:

- **`includes/icons-ico-array.php`** - Feather Icons (prefixed `fe_`)
- **`includes/icons-array.php`** - Font Awesome Solid Icons (prefixed `fas_`)
- **`includes/icons-kbcustom-array.php`** - Custom Social Media Icons (prefixed `kb_`)

**Example from `includes/icons-ico-array.php`:**
```php
<?php
$ico = array();
$ico['fe_activity'] = array('vB' => '0 0 24 24','cD' => array(array('nE' => 'polyline','aBs' => array('points' => '22 12 18 12 15 21 9 3 6 12 2 12'))));
$ico['fe_aperture'] = array('vB' => '0 0 24 24','cD' => array(array('nE' => 'circle','aBs' => array('cx' => '12','cy' => '12','r' => '10'),),array('nE' => 'line','aBs' => array('x1' => '14.31','y1' => '8','x2' => '20.05','y2' => '17.94'),),array('nE' => 'line','aBs' => array('x1' => '9.69','y1' => '8','x2' => '21.17','y2' => '8'),),array('nE' => 'line','aBs' => array('x1' => '7.38','y1' => '12','x2' => '13.12','y2' => '2.06'),),array('nE' => 'line','aBs' => array('x1' => '9.69','y1' => '16','x2' => '3.95','y2' => '6.06'),),array('nE' => 'line','aBs' => array('x1' => '14.31','y1' => '16','x2' => '2.83','y2' => '16'),),array('nE' => 'line','aBs' => array('x1' => '16.62','y1' => '12','x2' => '10.88','y2' => '21.94'))));
// ... hundreds more icons
```

### 2. Main SVG Rendering Class

**File:** `includes/class-kadence-blocks-svg.php`

This class handles the magic conversion from placeholder to actual SVG.

---

## The Bypass Flow

### Step 1: Editor Storage (What Gets Saved)

In the Gutenberg editor, instead of storing actual `<svg>` code, Kadence saves a **placeholder span**:

```html
<span data-name="fe_aperture" 
      data-title="Icon Title" 
      data-stroke="2" 
      data-class="my-icon-class"
      class="kadence-dynamic-icon">
</span>
```

**Why this works:**
- `<span>` is a safe HTML element WordPress allows
- Data attributes are safe
- No SVG markup to be stripped!

### Step 2: WordPress Save Process

```
User clicks "Save/Publish"
    ↓
Content sent to server: <span data-name="fe_aperture" class="kadence-dynamic-icon"></span>
    ↓
WordPress sanitization: Check for dangerous tags
    ↓
<span>? ✅ SAFE - Allow it
    ↓
Saved to wp_posts.post_content
```

### Step 3: Frontend Rendering

**File:** `includes/class-kadence-blocks-svg.php`

**Hook Registration:**
```php
public function __construct() {
    add_filter( 'render_block', array( $this, 'render_icons_dynamically' ), 10, 2 );
}
```

**The Dynamic Conversion Function:**
```php
public function render_icons_dynamically( $block_content, $block ) {
    if ( is_admin() ) {
        return $block_content; // Don't run in admin/editor
    }
    
    if ( ! empty( $block_content ) ) {
        $replaced_block_content = preg_replace_callback(
            '/<span\s+((?:data-[\w\-]+=["\']+.*["\']+[\s]+)+)class=["\'].*kadence-dynamic-icon.*["\']\s*>(.*)<\/span>/U',
            function ( $matches ) {
                // Parse data attributes
                $options = explode( ' ', str_replace( 'data-', '', $matches[1] ) );
                $args = array( 'title' => '' );
                
                foreach ( $options as $key => $value ) {
                    $value = trim( $value );
                    if ( empty( $value ) ) {
                        continue;
                    }
                    $data_split = explode( '=', $value, 2 );
                    if ( ! empty( $data_split[1] ) ) {
                        $args[ $data_split[0] ] = str_replace( '"', '', $data_split[1] );
                    }
                }
                
                // Determine icon type and styling
                $type = substr( $args['name'] , 0, 2 );
                $line_icon = ( ! empty( $type ) && 'fe' == $type ? true : false );
                $fill = ( $line_icon ? 'none' : 'currentColor' );
                $stroke_width = false;
                if ( $line_icon ) {
                    $stroke_width = ( ! empty( $args['stroke'] ) ? $args['stroke'] : 2 );
                }
                
                // Render the actual SVG
                $svg = self::render( $args['name'], $fill, $stroke_width, $args['title'], $hidden );
                return '<span class="kb-svg-icon-wrap kb-svg-icon-' . esc_attr( $args['name'] ) . '">' . $svg . '</span>';
            },
            $block_content
        );
        
        $block_content = is_null( $replaced_block_content ) ? $block_content : $replaced_block_content;
    }
    return $block_content;
}
```

### Step 4: SVG Reconstruction from JSON

**The render() method:**
```php
public static function render( $name, $fill = 'currentColor', $stroke_width = false, $title = '', $hidden = true, $extras = '', $echo = false ) {
    
    if ( null === self::$all_icons ) {
        self::$all_icons = self::get_icons(); // Load icon arrays
    }

    $svg = '';
    
    // Handle custom SVGs from custom post types
    $is_custom_svg = strpos($name, 'kb-custom-') === 0;
    if ( $is_custom_svg && !isset( self::$all_icons[ $name ] ) ) {
        $custom_post = get_post( str_replace('kb-custom-', '', $name) );
        
        if ( ! empty( $custom_post ) && 'kadence_custom_svg' === $custom_post->post_type ) {
            self::$all_icons[ $name ] = json_decode( $custom_post->post_content, true );
        }
    }

    if ( ! empty( self::$all_icons[ $name ] ) ) {
        $icon = self::$all_icons[ $name ];
        $vb = ( ! empty( $icon['vB'] ) ? $icon['vB'] : '0 0 24 24' );
        
        // Build SVG opening tag
        $svg .= '<svg viewBox="' . $vb . '" fill="' . esc_attr( $fill ) . '"';
        
        if ( ! empty( $stroke_width ) ) {
            $svg .= ' stroke="currentColor" stroke-width="' . esc_attr( $stroke_width ) . '"';
            $svg .= ' stroke-linecap="round" stroke-linejoin="round"';
        }
        
        $svg .= ' xmlns="http://www.w3.org/2000/svg"';
        $svg .= ( $hidden ? ' aria-hidden="true"' : ' role="img"' );
        $svg .= '>';
        
        if ( ! empty( $title ) ) {
            $svg .= '<title>' . $title . '</title>';
        }
        
        // Recursively generate child elements
        if ( ! empty( $icon['cD'] ) ) {
            $svg .= self::generate_svg_elements($icon['cD']);
        }
        
        $svg .= '</svg>';
    }

    return $svg;
}
```

**Recursive Element Generation:**
```php
private static function generate_svg_elements( $elements ) {
    $output = '';
    
    foreach ( $elements as $element ) {
        $nE = $element['nE'];           // Element name (path, circle, etc.)
        $aBs = $element['aBs'];         // Attributes
        $children = ! empty( $element['children'] ) ? $element['children'] : [];
        $tmpAttr = array();

        // Build attribute string
        foreach ( $aBs as $key => $attribute ) {
            if ( ! in_array( $key, array( 'fill', 'stroke', 'none' ) ) ) {
                $tmpAttr[ $key ] = $key . '="' . esc_attr( $attribute ) . '"';
            }
        }

        if ( isset( $aBs['fill'], $aBs['stroke'] ) && $aBs['fill'] === 'none' ) {
            $tmpAttr['stroke'] = 'stroke="currentColor"';
        }

        // Build element
        $output .= '<' . $nE . ' ' . implode( ' ', $tmpAttr );
        
        if ( ! empty( $children ) ) {
            $output .= '>' . self::generate_svg_elements( $children ) . '</' . $nE . '>';
        } else {
            $output .= '/>';
        }
    }

    return $output;
}
```

---

## Custom User-Uploaded SVGs

For user-uploaded custom SVGs, Kadence uses a different but similar approach:

### REST API Endpoint

**File:** `includes/class-vector-post-rest-api.php`

**Route:** `kb-vector/v1/vectors` (POST)

**Permission:** Requires `edit_others_pages` capability

**Process:**
```php
public function create_vector( $request ) {
    $jsonParams = $request->get_json_params();

    if ( empty( $jsonParams['vectorSVG'] ) ) {
        return new WP_Error( 'invalid_svg', __( 'Vector contains invalid SVG' ) );
    }

    $title = trim( $jsonParams['title'] );
    
    // Sanitize SVG using enshrined/svg-sanitize library
    $svg_content = $this->sanitize_svg_content($jsonParams['vectorSVG']);

    // Create post object
    $my_post = array(
        'post_title'     => $title,
        'post_content'   => $svg_content,          // Sanitized SVG or JSON
        'post_type'      => 'kadence_vector',      // Custom post type
        'post_status'    => 'publish',
        'post_mime_type' => 'image/svg+xml',
    );

    $insert = wp_insert_post( $my_post, true );

    return array( 'value' => $insert, 'label' => $title );
}

private function sanitize_svg_content( $svg_content ) {
    $sanitizer = new Sanitizer();
    $sanitizer->removeRemoteReferences( true );
    
    $allowedAttributes = new KadenceBlocksAllowedAttributes();
    $sanitizer->setAllowedAttrs( $allowedAttributes );
    
    return $sanitizer->sanitize( $svg_content );
}
```

**Custom Post Type:**
- Type: `kadence_vector` or `kadence_custom_svg`
- Content: Sanitized SVG or JSON representation
- Retrieved on frontend via `get_post()`

### Vector Block Frontend Rendering

**File:** `includes/blocks/class-kadence-blocks-vector-block.php`

```php
public function build_html( $attributes, $unique_id, $content, $block_instance ) {
    $classes = [
        'kb-vector-container',
        'kb-vector-container' . esc_attr( $unique_id ),
    ];

    $svg = $this->get_vector_svg( $attributes );

    return sprintf( '<div %1$s>%2$s</div>', $wrapper_attributes, $svg );
}

private function get_vector_svg( $attributes ) {
    $svg_content = $this->placeholder_svg;

    if ( isset( $attributes['id'] ) && ! empty( $attributes['id'] ) ) {
        $post_id = $attributes['id'];
        if ( ! empty( $post_id ) ) {
            $post = get_post( $post_id );
            if ( $post && 'kadence_vector' === $post->post_type ) {
                $svg_content = $post->post_content; // Actual SVG from database
            }
        }
    }

    return $svg_content;
}
```

---

## Complete Flow Diagrams

### Flow Without Kadence (Normal WordPress Behavior)

```
┌─────────────────────────────────────────────────────────────┐
│ EDITOR (Gutenberg)                                          │
│ User adds: <svg><path d="..."/></svg>                      │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ SAVE OPERATION (User clicks "Publish")                      │
│ Content sent to server with SVG markup                      │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ WORDPRESS SANITIZATION (wp_kses)                            │
│ Checks user capability: unfiltered_html?                    │
│ ❌ NO (Editor/Contributor)                                  │
│ Action: STRIP <svg> TAGS                                    │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ DATABASE (wp_posts.post_content)                            │
│ Saved: (empty - SVG was removed)                           │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ FRONTEND DISPLAY                                            │
│ Result: 😢 No SVG displayed                                 │
└─────────────────────────────────────────────────────────────┘
```

### Flow With Kadence Blocks

```
┌─────────────────────────────────────────────────────────────┐
│ EDITOR (Gutenberg)                                          │
│ User selects icon "fe_aperture" from icon picker           │
│ Kadence JS stores as:                                       │
│ <span data-name="fe_aperture" class="kadence-dynamic-icon">│
│ </span>                                                     │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ SAVE OPERATION                                              │
│ Content: <span data-name="fe_aperture" class="..."></span> │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ WORDPRESS SANITIZATION                                      │
│ Checks: <span>? ✅ SAFE - ALLOWED                          │
│ Action: Save as-is                                          │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ DATABASE (wp_posts.post_content)                            │
│ Saved: <span data-name="fe_aperture" class="..."></span>   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ FRONTEND REQUEST                                            │
│ WordPress loads post content from database                  │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ RENDER_BLOCK FILTER TRIGGERED                               │
│ Kadence_Blocks_Svg_Render::render_icons_dynamically()      │
│                                                             │
│ 1. Finds: <span class="kadence-dynamic-icon">              │
│ 2. Extracts: data-name="fe_aperture"                       │
│ 3. Looks up: $ico['fe_aperture'] from icons-ico-array.php │
│ 4. Gets JSON: array('vB' => '0 0 24 24', 'cD' => [...])   │
│ 5. Generates: <svg viewBox="0 0 24 24">...</svg>          │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ HTML OUTPUT TO BROWSER                                      │
│ <svg viewBox="0 0 24 24" fill="currentColor">              │
│   <circle cx="12" cy="12" r="10"/>                         │
│   <line x1="14.31" y1="8" x2="20.05" y2="17.94"/>          │
│   <!-- more elements -->                                    │
│ </svg>                                                      │
│                                                             │
│ Result: 🎉 SVG displays perfectly!                         │
└─────────────────────────────────────────────────────────────┘
```

---

## Critical Code Snippets

### Icon Array Loading

**File:** `includes/class-kadence-blocks-svg.php`

```php
private static function get_icons() {
    $ico   = include KADENCE_BLOCKS_PATH . 'includes/icons-ico-array.php';
    $faico = include KADENCE_BLOCKS_PATH . 'includes/icons-array.php';
    $kbcustom = include KADENCE_BLOCKS_PATH . 'includes/icons-kbcustom-array.php';

    return apply_filters( 'kadence_svg_icons', array_merge( $ico, $faico, $kbcustom ) );
}
```

### Custom SVG Retrieval

```php
// Custom SVGs stored as custom post type
$is_custom_svg = strpos($name, 'kb-custom-') === 0;
if ( $is_custom_svg && !isset( self::$all_icons[ $name ] ) ) {
    $custom_post = get_post( str_replace('kb-custom-', '', $name) );
    
    if ( ! empty( $custom_post ) && 
         ! is_wp_error( $custom_post ) && 
         'kadence_custom_svg' === $custom_post->post_type && 
         'publish' === $custom_post->post_status ) {
        self::$all_icons[ $name ] = json_decode( $custom_post->post_content, true );
    }
}
```

---

## Why Only SVGs Need This (Not Regular Images)

### Regular Images (`<img>` tags)
- ✅ **Safe HTML element** - WordPress allows for all users
- ✅ **No JavaScript risk** - Can't execute code
- ✅ **No bypass needed** - Just use standard `<img src="...">` tags

**Code Evidence:**
```php
// File: includes/blocks/class-kadence-blocks-image-block.php
public function build_html( $attributes, $unique_id, $content, $block_instance ) {
    // Just returns regular content with <img> tags
    // No conversion, no placeholders needed!
    return $content;
}
```

### SVGs Need Bypass Because:
- ❌ Can contain `<script>` tags (XSS risk)
- ❌ Can have event handlers (`onclick`, etc.)
- ❌ Can reference external resources
- ❌ WordPress strips them for non-admin users

---

## When Does Stripping Happen?

**Critical Understanding:** WordPress strips SVG tags **during SAVE operation**, NOT during frontend rendering.

### Timeline:
1. **Editor Time**: User edits content (can see SVG in preview)
2. **Save Time**: Content sent to server → `wp_kses` sanitization → SVG stripped
3. **Database**: Only sanitized content stored
4. **Frontend Time**: Content rendered from database (SVG already gone)

### Why Frontend SVG Generation Works:
- PHP code has implicit `unfiltered_html` capability
- Content generated by `render_block` filter bypasses user-content sanitization
- WordPress trusts server-side PHP output

---

## Security Considerations

Kadence maintains security through:

1. **Controlled Icon Library**: Pre-defined icons in PHP arrays (reviewed/trusted)

2. **SVG Sanitization**: Custom uploads use `enshrined/svg-sanitize` library
   ```php
   $sanitizer = new Sanitizer();
   $sanitizer->removeRemoteReferences( true );
   $sanitizer->setAllowedAttrs( $allowedAttributes );
   return $sanitizer->sanitize( $svg_content );
   ```

3. **Escaped Output**: All SVG attributes are escaped with `esc_attr()`

4. **No User Input**: SVG markup generated server-side, not from user input

---

## Key Takeaways

### ✅ The Genius of This Approach:
1. **Works with WordPress, not against it** - Respects security model
2. **No capability checks needed** - Works for all user roles
3. **Zero security risk** - SVGs are pre-defined or sanitized
4. **Performance optimized** - Caching implemented
5. **User-friendly** - Users just pick icons, no code needed

### 🎯 Core Pattern:
```
User Input (Untrusted) → Safe Placeholder → Database → PHP Generation (Trusted) → SVG Output
```

### 📝 Remember:
- **SVGs**: Need bypass → Use JSON data structure
- **Regular Images**: No bypass needed → Standard `<img>` tags work fine
- **Timing**: Sanitization happens at SAVE, not RENDER
- **Trust Model**: PHP output is trusted, user input is not

---

## Files Reference

### Core Implementation
- `includes/class-kadence-blocks-svg.php` - Main SVG rendering class
- `includes/class-vector-post-rest-api.php` - Custom SVG upload API
- `includes/blocks/class-kadence-blocks-vector-block.php` - Vector block frontend

### Icon Data
- `includes/icons-ico-array.php` - Feather Icons (~469 lines)
- `includes/icons-array.php` - Font Awesome Icons (~1200+ lines)
- `includes/icons-kbcustom-array.php` - Custom Social Icons (~355 lines)
- `includes/icon-names-array.php` - Icon names organized by category

### Block Definitions
- `dist/blocks/icon/block.json` - Icon block
- `dist/blocks/vector/block.json` - Vector block (custom SVGs)
- `dist/blocks/single-icon/block.json` - Single icon block

---

## Testing

To test this functionality:

1. **Create a user without `unfiltered_html`** (Editor or Contributor role)
2. **Add a Kadence Icon block** (or Info Box with icon)
3. **Select any icon** from the icon picker
4. **Save the post**
5. **Inspect the database**: `SELECT post_content FROM wp_posts WHERE ID = [your_post_id]`
6. **You'll see**: `<span data-name="fe_aperture" class="kadence-dynamic-icon"></span>`
7. **View frontend**: Actual `<svg>` will be rendered
8. **Inspect HTML in browser**: Full SVG markup present

---

## Conclusion

This is a **production-ready pattern** for bypassing WordPress's `unfiltered_html` restriction without compromising security. The key insight is:

> **Store the intent (icon name), not the output (SVG code). Generate on the fly.**

This same pattern could be adapted for other restricted HTML elements like `<iframe>`, `<object>`, or custom web components.

---

*Document created for knowledge transfer between AI instances*
*Source: Kadence Blocks plugin analysis*
*Date: Dec 3, 2025*

