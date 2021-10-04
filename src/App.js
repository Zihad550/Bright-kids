import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Classes from './components/Classes/Classes';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
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
                  <Route path="/classes">
                    <Classes></Classes>
                    </Route>
                    <Route path="/contact">
                      <Contact></Contact>
                      </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
