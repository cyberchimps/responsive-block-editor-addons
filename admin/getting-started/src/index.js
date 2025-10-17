import Header from "./components/Header";

const GettingStarted = () => {
  return (
    <Header />
  )
}

// export default GettingStarted;

document.addEventListener('DOMContentLoaded', () => {
  var rbeaGettingStartedPageElement = document.getElementById('rbea-getting-started-page-app');
  if (typeof rbeaGettingStartedPageElement !== 'undefined' && rbeaGettingStartedPageElement !== null) {
    ReactDOM.render(<GettingStarted />, rbeaGettingStartedPageElement);
  }
});