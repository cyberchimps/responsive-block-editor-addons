<?php
include 'wp-load.php';
 $args = array (
    'numberposts' => -1,
    'meta_key'    => '_sku'
 );

//  $all_post_ids = get_posts( $args );

global $wpdb;
$results = $wpdb->get_results( "SELECT post_id FROM {$wpdb->prefix}postmeta WHERE meta_key = '_sku' ", OBJECT );

?>