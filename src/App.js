import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from "./contexts/AuthProvider";
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/DashBoard/Dashboard';
import AddStation from './components/DashBoard/AddStation/AddStation';
import ManageStation from './components/DashBoard/ManageStation/ManageStation';
import StationUpdate from './components/DashBoard/ManageStation/StationUpdate';

function App() {
  return (
    <div className="App">
     <AuthProvider>
        <Router >
          <Switch>
            <Route exact path="/">
              <Login></Login>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/registration">
              <Registration></Registration>
            </Route>
            <PrivateRoute exact path="/home">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/addstation">
              <AddStation></AddStation>
            </PrivateRoute>
            <PrivateRoute exact path="/managestation">
              <ManageStation></ManageStation>
            </PrivateRoute>
            <PrivateRoute exact path="/managestation/:id">
              <StationUpdate></StationUpdate>
            </PrivateRoute> 
            
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
