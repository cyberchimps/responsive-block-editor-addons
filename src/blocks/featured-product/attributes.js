const attributes = {
  focalPoint: {
    type: "object",
    default : {
      x : 0.5,
      y : 0.5
    }
  },
  focalAttr: {
    type:"string",
    default: "50% 50%"
  },
  block_id:{
    type: "string"
  },
  productdata:{
    type : "array",
  },
  toggleattr:{
    type: "boolean",
    default: false,
  },
  getProductTitle:{
    type: "string",
    default:""
  },
  getProductDescription: {
    type: "string",
    default:""
  },
  getProductPrice: {
    type: "number",
    default: 0
  },
  buttonText: {
    type: "string",
    default: "Shop now"
  },
  showdescription: {
    type: "boolean",
    default: true
  },
  showprice: {
    type: "boolean",
    default: true
  },
  checkFixedBackgroundImage: {
    type: "boolean",
    default: false
  },
  checkRepeatedBackground: {
    type: "boolean",
    default: false
  },
  checkBackgroundCover: {
    type: "boolean",
    default: false
  },
  backgroundCover: {
    type: "string",
    default: "auto"
  },
  fixedBackgroundImage: {
    type:"string",
    default: "scroll"
  },
  fixedBackgroundImagePosition: {
    type:"number",
  },
  repeatedBackgroundImage:{
    type:"string",
    default: "no-repeat"
  },
  setFpBackgroundImage: {
    type: "string",
    default:""
  },
  colorPick:{
    type: "string",
    default:"black"
  },
  textColor: {
    type: "string",
    deafult:"white"
  },
  buttonText: {
    type: "string",
    default: "Shop Now"
  },
  pageUrl: {
    type: "string",
    default: ""
  }
};

export default attributes;
