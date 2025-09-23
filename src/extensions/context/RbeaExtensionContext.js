import { createContext, useContext } from '@wordpress/element';

export const RbeaExtensionContext  = createContext();

export const useRbeaExtensionContext = () => useContext(RbeaExtensionContext );
