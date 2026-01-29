const DisplayConditionsAttributes = {
    RBEADisplayConditions: {
        type: 'string',
    },
	RBEALoggedIn: {
        type: 'boolean',
        default: false,
    },
	RBEALoggedOut: {
        type: 'boolean',
        default: false,
    },
    RBEASystem: {
        type: 'string',
    },
    RBEABrowser: {
        type: 'string',
    },
    RBEARole: {
        type: 'string',
    },
    RBEADay:{
        type: 'array',
        default: [],
    },
};

export default DisplayConditionsAttributes;
