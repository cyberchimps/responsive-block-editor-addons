import { HashRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Blocks from './Blocks';
import Settings from './Settings';
import Templates from './Templates';

const Canvas = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/blocks' component={Blocks} />
        <Route path='/settings' component={Settings} />
        <Route path='/templates' component={Templates} />
      </Switch>
    </HashRouter>
  )
}

export default Canvas;