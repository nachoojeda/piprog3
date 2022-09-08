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

   /*     <Route path = '/TodasPeliculas' component = {TodasPeliculas} /> */

   import React from "react";
   import {Route, Switch} from "react-router-dom";
   import Footer from "./components/Footer/Footer";
   import Header from "./components/Header/Header";
   import List from './components/List/List'
    import Home from './screens/Home/Home'
  
   
   
   function App() {
       
   return(
       <React.Fragment>
           
           <Header/>
   
           <Switch>
   
           <Route path = '/' exact = {true} component = {Home}/>
  
           </Switch>
           
           <Footer/>
       </React.Fragment>
   );
   }
   
   export default App;
      