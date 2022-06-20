import React,{useContext} from "react";
import {BrowserRouter as Router, Switch, Route,Routes,useLocation} from 'react-router-dom';
import Inventory from "./Pages/Dashboard/Inventory";
import Order from "./Pages/Dashboard/Order";
import Invoice from "./Pages/Invoice/Invoice";
import InvoiceDetails from "./Pages/Invoice/InvoiceDetails";
import Register from "./Pages/Users/Register"
import Login from "./Pages/Users/Login"
import Home from "./Pages/Home/Home";
import FilterTest from "./Pages/Dashboard/FilterTest";
import Organizations from "./Pages/Organizations/Organizations";
import Teams from "./Pages/Organizations/Teams";
import Start from "./Pages/Organizations/Start";
import InvoiceFormContainer from "./Pages/Invoice/InvoiceFormContainer";
import Drawer from "./Components/Molecules/Drawer";
import GlobalStyle from './styles/globalStyles';
import { AppContext } from './context/AppContext';

const App = () => {
  const { isDrawerOpen } = useContext(AppContext);
  return (
    <div>
      <div>
      <Drawer isOpen={isDrawerOpen}>
            <InvoiceFormContainer/>
      </Drawer>
      </div>
  <Router>
   <Switch >
     <Route path="/" exact component={Home}/>
     <Route path="/inventory" exact component={Inventory}/>
     <Route path='/order' exact component={Order}/>
     <Route path='/invoice' exact component={Invoice}/>
      <Route path='/:invoiceId' exact component={InvoiceDetails}/>
      <Route path='/invoice-create'exact component={InvoiceFormContainer} />
     <Route path='/start' exact component={Start}/>
     <Route path='/organization' exact component={Organizations}/>
     <Route path='/teams' exact component={Teams}/>
     <Route path='/filter' exact component={FilterTest}/>
     <Route path="/register" exact component={Register}/>
     <Route path="/login" exact component={Login}/>
     <Route exact path='*'component={Home}/> 
     
   </Switch>
   </Router>
      
   </div>
  );
}

export default App;