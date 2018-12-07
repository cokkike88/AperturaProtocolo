import React, { Component } from 'react';
import DateDMY from '../../commons/components/dateDMY';
import Names from '../../commons/components/names';
import AddressContact from '../../commons/components/address-contact';
import CivilStatus from '../../commons/components/civil-status';
import { runInThisContext } from 'vm';


class ProtocolForm extends Component {
    
    constructor(){
        super();
        this.state = {
            day: 0,
            month: 0,
            year: 0
        };
    }

    onChangeDate(){
        console.log('date ', this.state);
    }

    render(){


        let date = new Date();
        let year = date.getFullYear();

        const tableStyle = {
            border: '1px solid black'
        }


        return(
            <div className="container">
                <div className="jumbotron">
                    <h1>APERTURA DE PROTOCOLO { year }</h1>
                </div>
                <div className="row col-md-12">
                    <blockquote className="blockquote">
                        <p className="mb-0">Favor llenar toda la informacion requerida.</p>
                    </blockquote>
                </div>                
                <div className="d-flex flex-row-reverse bd-highlight">                    
                    <div className="p-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-12">
                        <div>
                            <input type="number" className="form-control" placeholder="Colegiado" />
                        </div>
                    </div>
                    <div className="p-3 col-xl-1 col-lg-2 col-md-2 col-sm-3">Colegiado</div>
                </div>
                <div className="d-flex flex-row-reverse bd-highlight">                    
                    <div className="p-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-12">
                        <div>
                            <input type="text" className="form-control" placeholder="Clave" />
                        </div>
                    </div>
                    <div className="p-3 col-xl-1 col-lg-2 col-md-2 col-sm-3">Clave</div>
                </div>
                <DateDMY className="inverse" onChange={ this.onChangeDate.bind(this) } state={ this.state }/>
                <div className="row col-md-12">
                    <ul className="list-unstyled">
                        <li><strong>Señor Director</strong></li>
                        <li><strong>Archivo General de Protocolos</strong></li>
                        <li><strong>Edificio Jade</strong></li>
                    </ul>                    
                </div>
                <div className="row col-md-12">
                    <p>El (la) infrascrito(a) Notario(a)</p>                  
                </div>
                <Names />
                <div className="d-flex justify-content-center mt-3">
                    <h3>DECLARO:</h3>
                </div>
                <div className="row">                    
                    <div className="col-md-12">
                        <div className="form-group">
                            <p>1. Bajo juramento que soy colegiado activo, que no ejerzco cargo público a tiempo completo, ni
                                    tengo inhabilitación ni empedimiento legal alguno para el ejercicio del notariado.</p>
                        </div>
                    </div>                    
                </div>
                <div className="row">
                    <p className="col-xl-5 d-xl-block d-lg-block d-md-block d-none pt-2">2. Documento de identificacion personal:</p>
                    <div className="col-xl-7">
                        <input type="text" className="form-control" placeholder="Identificación" />
                    </div>
                </div>
                <CivilStatus />
                <AddressContact title="Datos de sede noratial/ Lugar de trabajo" />
            </div>
        )
    }

}

export default ProtocolForm;