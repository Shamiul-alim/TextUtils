import './App.css';
import About from './components/about';
import Alert from './components/alert';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import React,{useState}from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message, 
      type:type
    })
  }
  const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor ='#171430ff';
    showalert(" Dark mode has been enabled","success");
  } else {
    setMode('light');
    document.body.style.backgroundColor ='white';
    showalert(" Light mode has been enabled","success");
  }
};
  return (
    <>
      <Router>
      <Navbar title ="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
      <Switch>
        <Route exact path="/about">
          <About mode={mode}/>
        </Route>
        <Route exact path="/">
          <TextForm heading="Enter the text to analyze" mode={mode}></TextForm>
        </Route>
      </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
