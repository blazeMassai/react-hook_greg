import logo from './simba1.svg';
import './App.css';
import Products from "./components/Product/Products";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";


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

// const isValid=false;
//
// const styles={
//     starStyle:{
//         color: 'orangered'
//     }
// }

class App extends Component {



    render() {
        return (
            <section>
                <div className="container text-center p-2">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <h1>
                    <u>Art Shop</u>
                </h1>
                <Products/>

            </div>
            </section>

        );
    }

}

export default App;
