import './App.css';

import { Route, Switch } from 'react-router';
import SideNavBar from "./components/SideNavBar/SideNavBar.jsx";
import HomeTemplate from './containers/HomeTemplate';
import { homeRoutes } from "./routes/index";
import UserPages from './containers/AuthTemplate/UsersPage/UserPages';




function App() {

  const showLayoutHome = (route) => {

    if (route && route.length > 0) {

      return route.map((item, index) => (
        <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
      ))
    }
  }
  return (
    <Switch>
      {showLayoutHome(homeRoutes)}
      {/* {exact: true, path: '/', component: UserPages }, */}
      <Route path='/' component={UserPages} />
      <Route exact path="/users" component={UserPages} />
    </Switch>
  );
}

export default App;
