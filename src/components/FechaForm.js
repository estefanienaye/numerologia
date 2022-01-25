import React from 'react';

import './styles/BadgeForm.css';

class FechaForm extends React.Component {

    handleClick = e => {
        console.log('Button was clicked'); 
      };
    
      handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submitted');
        console.log(this.state);

      };

    render(){
        return(
            <div className="container">
                
                <form onSubmit={this.handleSubmit}>
                    <div className="fecha_ingresa">
                        <div className="form-group">
                            <label> Día </label>
                                <input
                                    onChange={this.props.onChange}
                                    className="form-control"
                                    type="text"
                                    name="dia"
                                    value={this.props.formValues.dia}
                                />
                        </div>

                        <div className="form-group">
                            <label> Mes </label>
                                <input
                                    onChange={this.props.onChange}
                                    className="form-control"
                                    type="text"
                                    name="mes"
                                    value={this.props.formValues.mes}
                                />
                        </div>

                        <div className="form-group">
                            <label> Año </label>
                                <input
                                    onChange={this.props.onChange}
                                    className="form-control"
                                    type="text"
                                    name="anio"
                                    value={this.props.formValues.anio}
                                />
                        </div>
                    
                    </div>
                    
                   


                    
                </form>

                
            </div>
        )
    }
}

export default FechaForm;