// This is wrapper component for all the extensions in the Advanced Panel.
import { RbeaExtensionContext } from "./context/RbeaExtensionContext";
import RbeaAnimations from "./animations/RbeaAnimations"
import RbeaDisplayConditions from "./display-conditions/RbeaDisplayConditions";
import RbeaResponsiveConditions from "./responsive-conditions/RbeaResponsiveConditions";
import RbeaCustomCSS from "./custom-css/RbeaCustomCSS";
import { convertTruthyFalsyValue } from "../utils/helper";
const RbeaExtensions = ( props ) => {
  const isCustomCssOn = convertTruthyFalsyValue( responsive_globals?.is_custom_css_on );

  return (
    <RbeaExtensionContext.Provider value={props}>
      { responsive_globals?.is_animation_on && <RbeaAnimations /> }
      { responsive_globals?.is_display_conditions_on && <RbeaDisplayConditions /> }
      { responsive_globals?.is_responsive_conditions_on && <RbeaResponsiveConditions /> }
      { isCustomCssOn && <RbeaCustomCSS /> }
    </RbeaExtensionContext.Provider>
  )
}

export default RbeaExtensions;