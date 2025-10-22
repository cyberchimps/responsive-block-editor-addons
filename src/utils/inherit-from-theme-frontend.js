/**
 * Frontend script for "Inherit from Theme" functionality
 * 
 */

document.addEventListener('DOMContentLoaded', function() {
	// Check if global settings are available
	if (typeof rbea_globals === 'undefined') {
		return;
	}
	
	const globalTs = rbea_globals.global_inherit_from_theme_last_changed || '';
	const globalOn = rbea_globals.global_inherit_from_theme === '1';
	
	// Find all block wrappers with inherit from theme data attributes
	const blocks = document.querySelectorAll('[data-rbea-inherit-wrapper]');
	
	blocks.forEach(function(wrapper) {
		// Get data attributes
		const localTs = wrapper.getAttribute('data-local-timestamp') || '';
		const inheritFromThemeSaved = wrapper.getAttribute('data-inherit-from-theme') === '1';
		const parentSelector = wrapper.getAttribute('data-rbea-inherit-parent');
		const childSelector = wrapper.getAttribute('data-rbea-inherit-child');
		
		// Check if global timestamp is newer than local timestamp
		if (globalTs && (!localTs || Date.parse(globalTs) > Date.parse(localTs))) {
			
			// Find parent element (the one that gets 'wp-block-button' class)
			let parentElement = null;
			if (parentSelector === 'self') {
				parentElement = wrapper;
			} else if (parentSelector) {
				parentElement = wrapper.querySelector(parentSelector);
			}
			
		// Find child element (the one that gets 'wp-block-button__link' class)
		let childElement = null;
		if (childSelector) {
			childElement = wrapper.querySelector(childSelector);
		}
		
		// Check if child needs extra class (for popup block)
		const childExtraClass = wrapper.getAttribute('data-rbea-inherit-child-extra');
		
		// Apply or remove classes based on global setting
		if (globalOn) {
			// Global is ON - add theme classes
			if (parentElement) {
				parentElement.classList.add('wp-block-button');
			}
			if (childElement) {
				childElement.classList.add('wp-block-button__link');
				if (childExtraClass) {
					childElement.classList.add(childExtraClass);
				}
			}
		} else {
			// Global is OFF - remove theme classes only if user didn't save it as inherit
			if (!inheritFromThemeSaved) {
				if (parentElement) {
					parentElement.classList.remove('wp-block-button');
				}
				if (childElement) {
					childElement.classList.remove('wp-block-button__link');
					if (childExtraClass) {
						childElement.classList.remove(childExtraClass);
					}
				}
			}
		}
		}
	});
});

