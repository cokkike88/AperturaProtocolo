import React, { Component } from 'react';

class CivilStatus extends Component{


    render(){
        return(
            <div>
                <div className="row">
                    <label className="col-md-2 col-form-label">Estado civil:</label>
                    <div className="col-md-3">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" />
                            <label class="form-check-label" for="inlineRadio1">Casado</label>
                        </div>                    
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="0" />
                            <label class="form-check-label" for="inlineRadio2">Soltero</label>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default CivilStatus;