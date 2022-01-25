import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/flor.png';
import App from '../components/styles/App.css'

export default class Main extends Component{

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <div>
                        <a
                        className="App-link"
                        href="/calulos"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <p>Calculadora de Números</p>
                        </a>
                    </div>
                    <img src={logo} className="App-logo" alt="logo" />
                   
                 
                    
                 </header>

                 <Link className="iniciobtn" to="/fecha">
                        Ingresar fecha
                    </Link>
             
            </div>
        );
    }
}