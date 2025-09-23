// This is wrapper component for all the extensions in the Advanced Panel.
import { RbeaExtensionContext } from "./context/RbeaExtensionContext";
import RbeaAnimations from "./animations/RbeaAnimations"
const RbeaExtensions = ( props ) => {

  return (
    <RbeaExtensionContext.Provider value={props}>
      { responsive_globals?.is_animation_on && <RbeaAnimations /> }
    </RbeaExtensionContext.Provider>
  )
}

export default RbeaExtensions;