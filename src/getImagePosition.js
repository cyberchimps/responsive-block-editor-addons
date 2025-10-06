import generateCSSUnit from './generateCSSUnit';

/**
 * Converts an image position value into a CSS-compatible background-position string.
 *
 * @param {string|Object} position - The image position value. 
 * Can be a string (e.g. 'center center', 'top left') or an object with numeric `x` and `y` properties (e.g. { x: 0.5, y: 0.5 }).
 *
 * @returns {string} A CSS background position string (e.g. '50% 50%').
 *
 * @example
 * getImagePostionCSS('top right'); 
 * // Returns: "100% 0%"
 *
 * @example
 * getImagePostionCSS({ x: 0.3, y: 0.7 }); 
 * // Returns: "30% 70%"
 */
function getImagePostionCSS(position) {

  if ( typeof position === 'string' ) {
    let newPosition = convertPositionToFocalPoint(position)
    return `${generateCSSUnit(newPosition.x * 100, '%')} ${generateCSSUnit(newPosition.y * 100, '%')}`;
  } else {
    return `${generateCSSUnit(position.x * 100, '%')} ${generateCSSUnit(position.y * 100, '%')}`;
  }
}

/**
 * Converts a string-based image position (e.g., 'top left') into a focal point object
 * with normalized x and y coordinates between 0 and 1.
 *
 * @param {string|Object} position - The image position value. 
 * Can be a string (e.g. 'center center', 'top left') or an object with numeric `x` and `y` properties.
 *
 * @returns {{x: number, y: number}} A focal point object representing the position, 
 * where `x` and `y` range from 0 to 1.
 *
 * @example
 * convertPositionToFocalPoint('bottom right');
 * // Returns: { x: 1, y: 1 }
 *
 * @example
 * convertPositionToFocalPoint({ x: 0.3, y: 0.7 });
 * // Returns: { x: 0.3, y: 0.7 }
 */
function convertPositionToFocalPoint(position) {

  if ( typeof position === 'object' ) return position;

  const positionMap = {
    'top left': { x: 0, y: 0 },
    'top center': { x: 0.5, y: 0 },
    'top right': { x: 1, y: 0 },
    'center left': { x: 0, y: 0.5 },
    'center center': { x: 0.5, y: 0.5 },
    'center right': { x: 1, y: 0.5 },
    'bottom left': { x: 0, y: 1 },
    'bottom center': { x: 0.5, y: 1 },
    'bottom right': { x: 1, y: 1 }
  };
    
  return positionMap[position] || { x: 0.4, y: 0.4 };
}

export { getImagePostionCSS, convertPositionToFocalPoint };
