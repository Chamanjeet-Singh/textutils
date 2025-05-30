
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {


  const [mode , setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message , type)=> {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

const toogleMode=()=>{
  if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor='#042743';
    showAlert("Dark Mode has been enabled" , "success");
    // document.title = 'TextUtils - Dark Mode';

    // setInterval(() => {
    //   document.title = "TextUtils is amazing";
    // }, 2000);
    // setInterval(() => {
    //   document.title = "  Install TextUtils Now!";
    // }, 1500);
  }
  else{
    setmode('light')
    document.body.style.backgroundColor='white';
    showAlert("Light Mode has been enabled" , "success");
    // document.title = 'TextUtils - Light Mode';
  }
}

  return (
   <> 
   <Router>
<Navbar title="TextUtils" aboutText="About" mode= {mode} toogleMode={toogleMode}/>
<Alert alert={alert}/>
<div className="container my -3">
       <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          
          </Route>
          <Route exact path="/"
          element={<TextForm  showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Couter , Remove Extra Spaces" mode= {mode}/>}>
          
          </Route>
        </Routes>
</div>
</Router>
   </>
  );
}

export default App;
 