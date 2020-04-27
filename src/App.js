import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import './styles.css';
import PostList from './components/PostList';
import Section from './components/Section';


class App extends Component{
  render(){
return(   

<Router>
<Section/>
  <div>
    <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />

    </Switch>
  <Header/> 
  </div>
  <PostList/>

</Router>

);
}
}





export default App;
