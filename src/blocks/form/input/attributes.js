const formCheckBoxOptions = []

const attributes = {
    block_id: {
      type: "string",
    },
    isFormVariantSelected: {
      type: "boolean",
      default: false,
    },
    formVariant: {
      type: "string",
    },
    formInputFieldType: {
      type: "string",
      default: "text",
    },
    formInputFieldLabel: {
      type: "string",
      default: "Name",
    },
    formInputHideLabel: {
      type: "boolean",
      default: false,
    },
    formInputWidth: {
      type: "number",
      default: 100,
    },
    formInputPlaceholder: {
      type: "string",
      default: '',
    },
    formInputHelpText: {
      type: "string",
      default: '',
    },
    formInputRequired : {
      type: "boolean",
      default: true,
    },
    formInputDefaultValue: {
      type: "string",
      default: '',
    },
    formInputLabelColor: {
      type: "string",
      default: '',
    },
    formInputInline: {
      type: "boolean",
      default: false,
    },
    formCheckBoxOptions: {
      type: "array",
      default: formCheckBoxOptions,
    }
  };
  
  export default attributes;
  