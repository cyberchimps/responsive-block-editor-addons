/**
 * Custom CSS Component with Monaco Editor (VSCode's editor)
 * Simple implementation - loads from CDN, has built-in CSS validation
 */
import './editor.scss';
import { registerCustomCSS } from '../../utils/custom-css-registry';

const { Component } = wp.element;
const { BaseControl } = wp.components;
const { __ } = wp.i18n;

class CustomCSSControl extends Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      editor: null,
      loading: true,
      markers: [], // Store validation markers/errors
    };
    this.editorContainerRef = null;
    this.markerListener = null; // Store marker listener for cleanup
  }

  componentDidMount() {
    this.loadMonacoEditor();
    // Register initial CSS if available
    this.registerCurrentCSS();
  }
  
  registerCurrentCSS = () => {
    const { blockName, block_id, clientId, customCss } = this.props;
    if (clientId && blockName && block_id && customCss && customCss.trim()) {
      const effectiveBlockId = block_id || clientId;
      registerCustomCSS(clientId, blockName, effectiveBlockId, customCss);
    }
  };

  componentWillUnmount() {
    // Properly dispose editor when component unmounts
    if (this.state.editor) {
      this.state.editor.dispose();
      this.setState({ editor: null });
    }
    // Dispose marker listener
    if (this.markerListener) {
      this.markerListener.dispose();
      this.markerListener = null;
    }
    // Clear ref
    this.editorContainerRef = null;
  }

  loadMonacoEditor = () => {
    // If Monaco is already loaded
    if (window.monaco && window.monaco.editor) {
      // Only initialize if container is ready and no editor exists
      if (this.editorContainerRef && !this.state.editor) {
        this.initializeEditor();
      } else {
        this.setState({ loading: false });
      }
      return;
    }

    // Check if loader script already exists
    if (document.querySelector('script[data-monaco]')) {
      // Wait for it to load
      const checkInterval = setInterval(() => {
        if (window.monaco && window.monaco.editor) {
          clearInterval(checkInterval);
          if (this.editorContainerRef && !this.state.editor) {
            this.initializeEditor();
          } else {
            this.setState({ loading: false });
          }
        }
      }, 100);
      return;
    }

    // Load Monaco from CDN
    const script = document.createElement('script');
    script.setAttribute('data-monaco', 'true');
    script.src = 'https://cdn.jsdelivr.net/npm/monaco-editor@0.30.1/min/vs/loader.js';
    script.onload = () => {
      window.require.config({
        paths: {
          vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.30.1/min/vs'
        }
      });
      window.require(['vs/editor/editor.main'], () => {
        // Only initialize if container is ready and no editor exists
        if (this.editorContainerRef && !this.state.editor) {
          this.initializeEditor();
        } else {
          this.setState({ loading: false });
        }
      });
    };
    document.head.appendChild(script);
  };

  initializeEditor = () => {
    if (!this.editorContainerRef || !window.monaco) {
      return;
    }

    // Don't create if editor already exists
    if (this.state.editor) {
      return;
    }

    const { blockName, block_id, customCss, onChange } = this.props;
    const PLACEHOLDER_SELECTOR = '.rbea-custom-selector';
    const defaultCss = `${PLACEHOLDER_SELECTOR} {\n  \n}`;
    const cssValue = customCss || defaultCss;

    // Define custom theme with light grey gutter background
    window.monaco.editor.defineTheme('vs-custom-gutter', {
      base: 'vs', // Inherit from 'vs' theme
      inherit: true,
      rules: [],
      colors: {
        'editorGutter.background': '#f3f3f3', // Light grey background for line numbers
      }
    });

    // Create editor with styling options
    const editor = window.monaco.editor.create(this.editorContainerRef, {
      value: cssValue,
      language: 'scss',
      theme: 'vs-custom-gutter', // Custom theme with grey line numbers background
      automaticLayout: true,
      minimap: { enabled: false },
      fontSize: 13,
      lineNumbers: 'on',
      // Line number styling
      lineNumbersMinChars: 0, 
      lineDecorationsWidth: 0,
      glyphMargin: true, 
      padding: { top: 8, bottom: 8 }, 
      renderLineHighlight: 'all', 
      // Scrollbar
      scrollbar: {
        vertical: 'auto',
        horizontal: 'auto',
        useShadows: false,
        verticalHasArrows: false,
        horizontalHasArrows: false,
      },
      scrollBeyondLastLine: false,
      scrollBeyondLastColumn: 0,
      wordWrap: 'off',
      roundedSelection: false,
      cursorStyle: 'line',
      cursorBlinking: 'blink',
      // Disable autocomplete suggestions
      quickSuggestions: false,
      suggestOnTriggerCharacters: false,
      acceptSuggestionOnEnter: 'off',
      tabCompletion: 'off',
    });

    // Function to update markers
    const updateMarkers = () => {
      const model = editor.getModel();
      if (model) {
        const markers = window.monaco.editor.getModelMarkers({ resource: model.uri });
        this.setState({ markers: markers || [] });
      }
    };

    // Listen to changes
    editor.onDidChangeModelContent(() => {
      const newValue = editor.getValue();
      const { blockName, block_id, clientId } = this.props;
      
      // Register CSS immediately to global registry for instant preview
      // This ensures CSS appears even if HOC's componentDidUpdate hasn't fired yet
      if (clientId && blockName && block_id) {
        const effectiveBlockId = block_id || clientId;
        registerCustomCSS(clientId, blockName, effectiveBlockId, newValue);
      }
      
      // Save CSS with placeholder to attribute
      // The HOC will also register this as a backup when props update
      if (onChange) {
        onChange(newValue);
      }
      
      // Update markers after content changes (validation happens asynchronously)
      setTimeout(updateMarkers, 300);
    });

    // Listen to validation markers using static method (not instance method)
    // Dispose old listener if exists
    if (this.markerListener) {
      this.markerListener.dispose();
      this.markerListener = null;
    }
    
    // Check if onDidChangeMarkers exists (Monaco API)
    if (window.monaco && window.monaco.editor && typeof window.monaco.editor.onDidChangeMarkers === 'function') {
      this.markerListener = window.monaco.editor.onDidChangeMarkers((uris) => {
        const model = editor.getModel();
        if (model && uris && Array.isArray(uris) && uris.includes(model.uri)) {
          updateMarkers();
        }
      });
    }

    // Initial markers check after validation completes
    setTimeout(updateMarkers, 1000);

    // Register initial CSS value when editor is ready
    if (cssValue && cssValue.trim() && blockName && block_id) {
      const { clientId } = this.props;
      if (clientId) {
        const effectiveBlockId = block_id || clientId;
        registerCustomCSS(clientId, blockName, effectiveBlockId, cssValue);
      }
    }

    this.setState({ editor, loading: false });
  };

  componentDidUpdate(prevProps) {
    // Update editor value if customCss changed externally
    if (prevProps.customCss !== this.props.customCss && this.state.editor) {
      const { customCss } = this.props;
      const PLACEHOLDER_SELECTOR = '.rbea-custom-selector';
      const defaultCss = `${PLACEHOLDER_SELECTOR} {\n  \n}`;
      const newValue = customCss || defaultCss;
      
      if (this.state.editor.getValue() !== newValue) {
        this.state.editor.setValue(newValue);
      }
    }
    
    if (
      prevProps.block_id !== this.props.block_id ||
      prevProps.blockName !== this.props.blockName ||
      prevProps.customCss !== this.props.customCss
    ) {
      this.registerCurrentCSS();
    }
  }

  render() {
    const { blockName, block_id } = this.props;
    const { loading, markers } = this.state;
    const PLACEHOLDER_SELECTOR = '.rbea-custom-selector';

    const errors = markers.filter(m => m.severity === 8);
    const warnings = markers.filter(m => m.severity === 4);

    return (
      <div className="rbea-custom-css-wrapper">
        <BaseControl
          label={__('Custom CSS', 'responsive-block-editor-addons')}
          className="rbea-custom-css-control"
        >
          <div className="rbea-custom-css-editor-container">
            <div className='rbea-custom-css-editor-container-inner'
              ref={(ref) => {
                // Only set ref once and initialize if Monaco is ready
                if (ref && !this.editorContainerRef) {
                  this.editorContainerRef = ref;
                  if (window.monaco && window.monaco.editor && !this.state.editor) {
                    setTimeout(() => this.initializeEditor(), 100);
                  }
                }
              }}
            />
          </div>
          {(errors.length > 0 || warnings.length > 0) && (
            <div className="rbea-custom-css-errors">
              {errors.map((marker, index) => (
                <div key={index} className="rbea-custom-css-annotation rbea-custom-css-error">
                  <strong>
                    {__('Error', 'responsive-block-editor-addons')} (Line {marker.startLineNumber}):
                  </strong>{' '}
                  {marker.message}
                </div>
              ))}
              {warnings.map((marker, index) => (
                <div key={`warn-${index}`} className="rbea-custom-css-annotation rbea-custom-css-warning">
                  <strong>
                    {__('Warning', 'responsive-block-editor-addons')} (Line {marker.startLineNumber}):
                  </strong>{' '}
                  {marker.message}
                </div>
              ))}
            </div>
          )}
          <div className="rbea-custom-css-selector-info">
            <p className="rbea-custom-css-selector-text">
              {__('Use this selector in your CSS:', 'responsive-block-editor-addons')}{' '}
              <code>{PLACEHOLDER_SELECTOR}</code>
            </p>
          </div>
        </BaseControl>
      </div>
    );
  }
}

export default CustomCSSControl;
