<?php
/**
 * RBEA Plugin install helper.
 *
 * @package Responsive Block Editor Addons
 * @since 1.6.9
 */

/**
 * Class RBEA_Plugin_Install_Helper
 */
class RBEA_Plugin_Install_Helper {
	/**
	 * Instance of class.
	 *
	 * @var bool $instance instance variable.
	 */
	private static $instance;


	/**
	 * Check if instance already exists.
	 *
	 * @return RBEA_Plugin_Install_Helper
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof RBEA_Plugin_Install_Helper ) ) {
			self::$instance = new RBEA_Plugin_Install_Helper();
		}

		return self::$instance;
	}

	/**
	 * Get plugin path based on plugin slug.
	 *
	 * @param string $slug Plugin slug.
	 *
	 * @return string
	 */
	public static function get_plugin_path( $slug ) {
		switch ( $slug ) {
			case 'wplegalpages':
				return $slug . '/wplegalpages.php';
			case 'gdpr-cookie-consent':
				return $slug . '/gdpr-cookie-consent.php';
			default:
				return $slug . '/' . $slug . '.php';
		}
	}

	/**
	 * Generates button html which is responsible to install & activate plugin.
	 *
	 * @param string $slug plugin slug.
	 * @param string $identifier Unique ID for button.
	 * @param string $redirect_to_page slug of page to redirect.
	 * @param string $button_text button text.
	 * @since 4.8.4
	 *
	 * @return string
	 */
	public function responsive_install_plugin_button( $slug, $identifier, $redirect_to_page, $button_text = 'Install' ) {
		$button   = '';
		$redirect = admin_url( 'admin.php?page=' . $redirect_to_page );
		$state    = $this->check_plugin_installed_activated( $slug );
		if ( empty( $slug ) ) {
			return '';
		}
		$button .= '<div class="plugin-card-' . esc_attr( $slug ) . '" style="padding: 8px 0 5px;">';

		$plugin_link_suffix = self::get_plugin_path( $slug, $button_text );

		$nonce = add_query_arg(
			array(
				'action'        => 'activate',
				'plugin'        => rawurlencode( $plugin_link_suffix ),
				'plugin_status' => 'all',
				'paged'         => '1',
				'_wpnonce'      => wp_create_nonce( 'activate-plugin_' . $plugin_link_suffix ),
			),
			network_admin_url( 'plugins.php' )
		);
		switch ( $state ) {
			case 'install':
				$button .= '<a id="rbea-' . esc_attr( $identifier ) . '" data-redirect="' . esc_url( $redirect ) . '" data-slug="' . esc_attr( $slug ) . '" class="rbea-install-plugin install-now button  " href="' . esc_url( $nonce ) . '" data-name="' . esc_attr( $slug ) . '" aria-label="Install ' . esc_attr( $slug ) . '">' . esc_html( $button_text ) . '</a>';
				break;

			case 'activate':
				$button .= '<a  data-redirect="' . esc_url( $redirect ) . '" data-slug="' . esc_attr( $slug ) . '" class="rbea-activate-plugin activate-now button button-primary" href="' . esc_url( $nonce ) . '" aria-label="Activate ' . esc_attr( $slug ) . '">' . esc_html__( 'Activate', 'responsive-block-editor-addons' ) . '</a>';
				break;

			case 'activated':
				$button .= '<button class="rbea-plugin-activated-button-disabled button" aria-label="Activated ' . esc_attr( $slug ) . '">' . esc_html__( 'Activated', 'responsive-block-editor-addons' ) . '</button>';
				break;
		} // End switch.
		$button .= '</div>';
		return $button;
	}

	/**
	 * Check if plugin is installed and activated.
	 *
	 * @param string $slug plugin slug.
	 *
	 * @return bool
	 */
	public function check_plugin_installed_activated( $slug ) {
		$plugin_link_suffix = self::get_plugin_path( $slug );

		if ( file_exists( ABSPATH . 'wp-content/plugins/' . $plugin_link_suffix ) ) {
			$needs = is_plugin_active( $plugin_link_suffix ) ? 'activated' : 'activate';
			return $needs;
		} else {
			return 'install';
		}
	}

	/**
	 * Check plugin state.
	 *
	 * @param string $slug plugin slug.
	 *
	 * @return bool
	 */
	public function check_plugin_state( $slug ) {
		$plugin_link_suffix = self::get_plugin_path( $slug );

		if ( file_exists( ABSPATH . 'wp-content/plugins/' . $plugin_link_suffix ) ) {
			$needs = is_plugin_active( $plugin_link_suffix ) ? 'rateus' : 'activate';
			if ( 'rateus' === $needs && ! post_type_exists( 'portfolio' ) && 'jetpack' === $slug ) {
				return 'enable_cpt';
			}

			return $needs;
		} else {
			return 'install';
		}
	}
}
