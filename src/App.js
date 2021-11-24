import Home from './Pages/Home/Home/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Services/Services/Services';
import About from './Pages/About/About/About';
import Contact from './Pages/Contact/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import MyOrders from './Pages/MyOrders/MyOrders';
import Order from './Pages/Order/Order/Order';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/services">
                <Services></Services>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <PrivateRoute path="/addService">
                <AddService></AddService>
              </PrivateRoute>
              <PrivateRoute path="/manageServices">
                <ManageServices></ManageServices>
              </PrivateRoute>
              <PrivateRoute path="/manageOrders">
                <ManageAllOrders></ManageAllOrders>
              </PrivateRoute>
              <PrivateRoute path="/myOrders">
                <MyOrders></MyOrders>
              </PrivateRoute>
              <PrivateRoute path="/order/:serviceId">
                <Order></Order>
              </PrivateRoute>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          <Footer></Footer>    
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
