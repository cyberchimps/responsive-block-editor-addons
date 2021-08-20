import {
	RichText, AlignmentToolbar, BlockControls
} from "@wordpress/block-editor";
import {
	Component, Fragment
} from "@wordpress/element";
import {__} from "@wordpress/i18n";
import React from 'react';
import Edit from "../blocks/advanced-heading/components/edit";
import attributes from "../blocks/advanced-heading/attributes";
import { registerBlockType } from "@wordpress/blocks";
import {
	render,
	cleanup,
	fireEvent
} from "@testing-library/react";

describe("Advanced Heading Edit", () => {
	afterEach(cleanup);
	it("matches snapshot", () => {
		const { container } = render(<Edit
			attributes
        />);
		expect(container).toMatchSnapshot();
	})
})