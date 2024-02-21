<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<?php
echo "<pre>";
var_dump($attributes);
echo "</pre>";
?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php esc_html_e( 'Simple Card Block – hello from a dynamic block!', 'simple-card-block' ); ?>
</p>
