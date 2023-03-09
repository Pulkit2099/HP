
import { BrowserRouter as Router  } from "react-router-dom";
import { Route} from "react-router";

import Footer from "./Footer";
import Home from "./Home";
import Services from "./Services";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Contact from "./Contact";
import About from "./About";

import Nav from "./Nav";

//ss
const App = () => {
return (
  <>
  
   <Router>
   <Nav/>
    <Route  exact path ="/"  component={Home}/>
    <Route exact path ="/about"  component={About}/>
    <Route  exact  path ="/contact"  component={Contact}/>
    <Route  exact path ="/service"  component={Services}/>
         
  
   

    

    
    </Router>

    <Footer/>
   
</>
  )
};

export default App;
