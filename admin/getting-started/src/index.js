import React from 'react'

const GettingStarted = () => {
  return (
    <div className='text-amber-600'>Hello World</div>
  )
}

// export default GettingStarted;

document.addEventListener('DOMContentLoaded', () => {
    var rbeaGettingStartedPageElement = document.getElementById( 'rbea-getting-started-page-app' );
    if ( typeof rbeaGettingStartedPageElement !== 'undefined' && rbeaGettingStartedPageElement !== null ) {
      ReactDOM.render(<GettingStarted />, rbeaGettingStartedPageElement);
    }
});