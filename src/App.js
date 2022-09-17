import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import Home from './screens/Home/Home';
import Error from './components/Error/Error'
import Every from './components/Every/Every';
import Favorites from './components/Favorites/Favorites';
import Details from "./components/SongDetail/SongDetail";
import EveryAlbum from "./components/EveryAlbum/EveryAlbum";
import AlbumDetails from "./components/AlbumDetail/AlbumDetail";



function App() {

    return (
        <React.Fragment>

            <Header />

            <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route path='/favorites' component={Favorites} />
                <Route path='/every' component={Every} />
                <Route path='/everyAlbum' component={EveryAlbum} />
                <Route path='/songDetail/:id' component={Details} />
                <Route path='/albumDetail/:id' component={AlbumDetails} />
                <Route path="" component={Error} />
            </Switch>

            <Footer />

        </React.Fragment>
    );
}

export default App;
