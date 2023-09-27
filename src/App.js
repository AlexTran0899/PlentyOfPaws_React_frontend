import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { routes } from './Components';
import {
  Box,
  AbsoluteCenter
} from '@chakra-ui/react';


function App() {
  return (
    <>
      <routes.NavBar />
      <Router>
        <Switch>
          {/* <Route exact path='/'>
            <routes.UserForm />
          </Route> */}
          <Route exact path="/signup">
            <routes.UserForm />
          </Route> 
          <Route exact path="/admin/users">
            <routes.UserAdmin />
          </Route>
          <Route exact path="/admin/hosts">
            {/* TODO */}
          </Route>
          <Route exact path="/admin/dogs">
            <routes.DogAdmin />
          </Route>
          <Route exact path='/'>
            <routes.Main />
          </Route>
          <Route exact path="/dogs/add_dog">
            <routes.DogForm />
          </Route>
          <Route exact path="/dogs/:dog_id">
            <routes.DogInfoPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;