# docs: https://developer.wordpress.org/cli/commands/plugin/

wp rewrite structure '/%year%/%monthnum%/%postname%/'

wp plugin delete hello
wp plugin delete akismet

wp plugin activate ${REPO_NAME}
wp plugin activate responsive-block-editor-addons

# wp plugin install plugin_slug --activate
