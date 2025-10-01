// This is wrapper component for all the extensions in the Advanced Panel.
import { RbeaExtensionContext } from "./context/RbeaExtensionContext";
import RbeaAnimations from "./animations/RbeaAnimations"
import RbeaDisplayConditions from "./display-conditions/RbeaDisplayConditions";
const RbeaExtensions = ( props ) => {

  return (
    <RbeaExtensionContext.Provider value={props}>
      { responsive_globals?.is_animation_on && <RbeaAnimations /> }
      { responsive_globals?.is_display_conditions_on && <RbeaDisplayConditions /> }
    </RbeaExtensionContext.Provider>
  )
}

export default RbeaExtensions;