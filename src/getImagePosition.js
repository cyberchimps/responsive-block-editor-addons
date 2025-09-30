import generateCSSUnit from './generateCSSUnit';

function getImagePostionCSS(position) {

  if ( typeof position === 'string' ) {
    let newPosition = convertPositionToFocalPoint(position)
    return `${generateCSSUnit(newPosition.x * 100, '%')} ${generateCSSUnit(newPosition.y * 100, '%')}`;
  } else {
    return `${generateCSSUnit(position.x * 100, '%')} ${generateCSSUnit(position.y * 100, '%')}`;
  }
}

function convertPositionToFocalPoint(position) {

  console.log('convertPositionToFocalPoint -> ', position);

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

  console.log('convertPositionToFocalPoint  return -> ', positionMap[position] || { x: 0.4, y: 0.4 } )
    
  return positionMap[position] || { x: 0.4, y: 0.4 };
}

export { getImagePostionCSS, convertPositionToFocalPoint };
