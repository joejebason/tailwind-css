import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Switch,  } from 'react-router-dom';
// import Home from './component/sellingPage';
import Header from './component/header';
import Selling from './component/sellingPage';
import Home from './component/Home';
import SellingPhone from './component/sellingphones';
import ProgressBar from './component/progressbar';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header/>
      
       <Switch>
       <Route path="/" exact component={Home}></Route>
        <Route path="/sellingMobile" exact component={Selling}></Route>
        <Route path="/sellingphone" exact component={SellingPhone}></Route>
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
