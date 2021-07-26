import Save from '../src/blocks/advanced-heading/components/save';
import attributes from '../src/blocks/advanced-heading/attributes';
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