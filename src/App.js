import React, { Fragment } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './containers/NavBar';
import PhotosListContainer from './containers/PhotosListContainer';
import FavouritePhotosListContainer from './containers/FavouritePhotosListContainer';
import CategoryFilterContainer from './containers/CategoryFilterContainer';
import './App.css';


function App() {
  return (
    <Router>
    <Fragment>
      <NavBar/>
      <CategoryFilterContainer/>
      <Route exact path ="/" component = {PhotosListContainer} />
      <Route path = "/favourite" component = {FavouritePhotosListContainer}/>
    </Fragment>
    </Router>
  );
}

export default App;
