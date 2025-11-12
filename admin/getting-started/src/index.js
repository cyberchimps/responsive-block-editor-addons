import { HashRouter } from 'react-router-dom';
import Header from "./components/Header";
import Canvas from "./Screens/Canvas";
import Footer from './components/Footer';
import { BlocksProvider } from './BlocksContext';

const GettingStarted = () => {
  return (
    <>
      <Header />
      <BlocksProvider>
        <Canvas />
      </BlocksProvider>
      <Footer />
    </>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  var rbeaGettingStartedPageElement = document.getElementById('rbea-getting-started-page-app');
  if (typeof rbeaGettingStartedPageElement !== 'undefined' && rbeaGettingStartedPageElement !== null) {
    ReactDOM.render(
      <HashRouter>
        <GettingStarted />
      </HashRouter>
    , rbeaGettingStartedPageElement);
  }
});