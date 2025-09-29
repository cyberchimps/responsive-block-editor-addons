import generateCSSUnit from './generateCSSUnit';

function getImagePostionCSS(position) {
  console.log('getImagePostionCSS position ->' ,position)
  if (!position || typeof position.x !== "number" || typeof position.y !== "number") {
    // fallback to center if missing/invalid

    console.log( 'fallback -> ', `${generateCSSUnit(50, '%')} ${generateCSSUnit(50, '%')}` );

    return `${generateCSSUnit(50, '%')} ${generateCSSUnit(50, '%')}`;
  }

  console.log( 'getImagePostionCSS final ->' , `${generateCSSUnit(position.x * 100, '%')} ${generateCSSUnit(position.y * 100, '%')}`  );

  return `${generateCSSUnit(position.x * 100, '%')} ${generateCSSUnit(position.y * 100, '%')}`;
}

function convertPositionToFocalPoint(position) {

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
    
  return positionMap[position] || { x: 0.5, y: 0.5 };
}

function migrateToFocalPoint( backgroundPosition, setAttributes ) {
  if (backgroundPosition && typeof backgroundPosition === 'string') {
      
    console.log('=== RUNNING MIGRATION (robust) ===');
    const newFocalPoint = convertPositionToFocalPoint(backgroundPosition);
    console.log('Migrating from:', backgroundPosition, 'to:', newFocalPoint);
    
    setAttributes({ 
      backgroundPosition: convertPositionToFocalPoint(backgroundPosition),
    });
  }
}

export { getImagePostionCSS, convertPositionToFocalPoint, migrateToFocalPoint };
