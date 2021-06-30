function generateBackgroundImageEffect(
  spacerColor,
  spacerSecondaryColor,
  spacerGradientDirection,
  spacerColorLocation,
  spacerSecondaryColorLocation
) {
  var css =
    "linear-gradient(" +
    spacerGradientDirection +
    "deg, " +
    spacerColor +
    " " +
    spacerColorLocation +
    "%," +
    spacerSecondaryColor +
    " " +
    spacerSecondaryColorLocation +
    "%)";

  return css;
}

export default generateBackgroundImageEffect;
