// This is wrapper component for all the extensions which will be introduced in the Advanced Panel.
import { RbeaExtensionContext } from "./context/RbeaExtensionContext";
import RbeaAnimations from "./animations/RbeaAnimations"
const RbeaExtensions = ( props ) => {

  console.log(props)

  return (
    <RbeaExtensionContext.Provider value={props}>
      <RbeaAnimations />
    </RbeaExtensionContext.Provider>
  )
}

export default RbeaExtensions;