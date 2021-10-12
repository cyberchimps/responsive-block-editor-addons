const attributes = {
  block_id: {
    type: "string",
  },
  text1: {
		type: 'string',
	},
	text2: {
		type: 'string',
	},
	text3: {
		type: 'string',
	},
	text4: {
		type: 'string',
	},
  displayTitle: {
    type: "boolean",
    default: false,
  },
  displaySubtitle: {
    type: "string",
  },
  columnsCount: {
    type: "number",
    default: 1,
  },
  tagTitle: {
    type: "string",
  },
  blockTitle: {
    type: "string",
  },
  blockSubtitle: {
    type: "string",
  },
  displayColumnSeparator: {
    type: "boolean",
    default: false,
  },
};

export default attributes;
