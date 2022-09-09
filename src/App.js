/*import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from '../src/screens/Home/Home'




function App() {

  const opciones = ['Home', 'Favoritos', 'Ver Todas']

  let nombre = ''

  return (
    <div>

      <Header nombre={nombre} menu={opciones}/>
       
      <Footer/>

    </div>
  );
}

export default App; */



   import React from "react";
   import {Route, Switch} from "react-router-dom";
   import Footer from "./components/Footer/Footer";
   import Header from './components/Header/Header';
   import Home from './screens/Home/Home';
   import Error from './components/Error/Error'
   import Every from './components/Every/Every';
   import Favorites from './components/Favorites/Favorites';


   
   function App() {
       
   return(
       <React.Fragment>
           
           <Header/>
           
             <Switch>
              <Route path = '/' exact={true} component = {Home}/> 
              <Route path = '/Favorites' component = {Favorites}/> 
              <Route path = '/Every' component = {Every}/> 
              <Route path= "" component = {Error}/>
              </Switch>
           
           <Footer/>
           
       </React.Fragment>
   );
   }
   
   export default App;
      