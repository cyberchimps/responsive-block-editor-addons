import {
	RichText
} from "@wordpress/block-editor";
import {
	Component, Fragment
} from "@wordpress/element";
import React from 'react';
import Save from "../blocks/advanced-heading/components/save";
import attributes from "../blocks/advanced-heading/attributes";
import {
	render,
	cleanup,
	fireEvent
} from "@testing-library/react";

describe("Advanced Heading Save", () => {
	afterEach(cleanup);
	it("matches snapshot", () => {
		expect(
			render(
				<Save
					{...{
						attributes
					}}
				/>
			)
		).toMatchSnapshot();
	})
})