/**
 * Check if a block is invalid and needs recovery
 * 
 * @param {Object} block - The block object to check
 * @returns {boolean} - True if block is invalid and needs recovery
 */
const isInvalid = ( block ) => {
	const { name, isValid, validationIssues } = block;

	// Only process Responsive Block Editor Addons blocks
	if ( ! name || ! name.match( /^responsive-block-editor-addons\// ) ) {
		return false;
	}

	// Check if block has validation issues
	if ( isValid || ! validationIssues || ! validationIssues.length ) {
		return false;
	}
	console.log( 'Block needs recovery:', block, isValid, validationIssues );
	return true;
};

export default isInvalid;