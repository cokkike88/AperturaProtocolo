import React, { Component } from 'react';

class Names extends Component {

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4">
                        <input type="text" className="form-control" placeholder="Primer apellido" />
                    </div>
                    <div className="col-lx-4 col-lg-4 mt-1">
                        <input type="text" className="form-control" placeholder="Segundo apellido" />
                    </div>
                    <div className="col-lx-4 col-lg-4 mt-1">
                        <input type="text" className="form-control" placeholder="Apellido de casado" />
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mt-2">
                        <input type="text" className="form-control" placeholder="Primer nombre" />
                    </div>
                    <div className="col-lx-4 col-lg-4 mt-2">
                        <input type="text" className="form-control" placeholder="Segundo nombre" />
                    </div>
                    <div className="col-lx-4 col-lg-4 mt-2">
                        <input type="text" className="form-control" placeholder="Otro nombre" />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Names;