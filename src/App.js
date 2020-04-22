import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import header from './components/header';
 



class App extends Component{
  render(){
return(   
<Router>
  <div>
    <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />

    </Switch>
  <header /> 
  </div>
</Router>

);
}
}





export default App;
