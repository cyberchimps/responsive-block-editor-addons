import '@testing-library/jest-dom';
import {registerBlockType, createBlock, serialize} from '@wordpress/blocks';
import { settings } from '../index';

let block;
let serializedBlock;

const name = "responsive-block-editor-addons/advanced-heading";
const category = "common";

describe( name, () => {
	beforeAll( () => {
		// Register the block.
		registerBlockType( name, { category, ...settings} );
	} );

	beforeEach( () => {
		// Create the block with the minimum attributes.
		block = createBlock( name );

		// Reset the reused variables.
		serializedBlock = '';
	} );

	it( 'should render with content', () => {
		serializedBlock = serialize( block );

		expect( serializedBlock ).toBeDefined();
		expect( serializedBlock ).toMatchSnapshot();
	} );
} );