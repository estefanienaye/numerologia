import React from 'react';


import logo from '../images/flor.png';
import App from '../components/styles/Badge.css'
import Badge from '../components/Badge';
import FechaForm from '../components/FechaForm';

class Fechas extends React.Component{
    
    state = {
        form:{
            dia: '',
            mes: ' ',
            anio: ' ',
        },
        
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },    
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='navheader'>
                        <img src={logo} className="App-logo" alt="logo" />
                        <div className="logoName">
                            <h1>*Ingresa la fecha de nacimiento*</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <FechaForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                        <div className="col-6">
						    <Badge
                                dia={this.state.form.dia}
                                mes={this.state.form.mes}
                                anio={this.state.form.anio}
						    />
                        </div>
                        
                    </div>
               
                </div>
            </React.Fragment>
        );
    }
}

export default Fechas;