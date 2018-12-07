import React, { Component } from 'react';

class AddressContact extends Component{


    render(){
        return(
            <div>
                <hr/>
                <div className="row col-md-12">
                    <h4>{this.props.title}</h4>
                </div>
                <div className="form-group row">
                    <label className="col-md-2 d-xl-block d-lg-block d-md-block d-none col-form-label">Dirección:</label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" placeholder="Dirección" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-2 d-xl-block d-lg-block d-md-block d-none col-form-label">Municipio:</label>
                    <div className="col-md-3">
                        <select className="form-control">
                            <option value="">Select..</option>
                        </select>
                    </div>
                    <label className="col-md-2 d-xl-block d-lg-block d-md-block d-none col-form-label">Departamento:</label>
                    <div className="col-md-3">
                        <select className="form-control">
                            <option value="">Select..</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-2 d-xl-block d-lg-block d-md-block d-none col-form-label">No. (s) Télefono (s):</label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" placeholder="Télefono" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-2 d-xl-block d-lg-block d-md-block d-none col-form-label">Correo electrónico:</label>
                    <div className="col-md-3">
                        <input className="form-control" type="text" placeholder="Correo electrónico" />
                    </div>
                    <label className="col-md-2 d-xl-block d-lg-block d-md-block d-none col-form-label">Celular:</label>
                    <div className="col-md-3">
                        <input className="form-control" type="text" placeholder="Celular" />
                    </div>
                </div>
            </div>
        )
    }

}

export default AddressContact;