import logo from './simba1.svg';
import './App.css';
import Products from "./components/Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import {Button} from "react-bootstrap";
import Rating from "./components/Rating";
import {FaReact} from "react-icons/fa";

// function App() {
//   return (
//     <div className="container">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//         <h1 className='text-center'>
//           <u>Learn About the Savior</u>
//         </h1>
//         <Products/>
//     </div>
//   );
// }

const isValid=false;

const styles={
    starStyle:{
        color: 'orangered'
    }
}

class App extends Component {



    render() {
        return (
            <div className="container text-center">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <h1>
                    <u>Learn About the Savior</u>
                </h1>
                <Products/>
                <Button variant='success' disabled={!isValid}>Default</Button>
                <div><FaReact size={50} /></div>
               <div style={styles.starStyle}>
                   
                   <Rating rating='1'/>
                   <Rating rating='2'/>
                   <Rating rating='3'/>
                   <Rating rating='4'/>
                   <Rating rating='5'/>
               </div>
            </div>
        );
    }

}

export default App;
