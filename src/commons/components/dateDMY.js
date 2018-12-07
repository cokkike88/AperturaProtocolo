import React, { Component } from 'react';


class DateDMY extends Component{

    onChangeDate(e){

        switch(e.target.name){
            case 'txtDay':
                this.props.state.day = e.target.value;
                break;
            case 'selMonth':
                this.props.state.month = e.target.value;
                break;
            case 'txtYear':
                this.props.state.year = e.target.value;
                break;
            default:
                break;
        }

        // console.log('state .. ' , this.props.state);
        this.props.onChange();
    }

    render(){

        const day = () => {
            return(
                <div className="p-2 col-xl-1 col-lg-1 col-md-2 col-sm-3">
                    <div>
                        <input type="text" className="form-control" placeholder="Dia" name='txtDay' onChange={ this.onChangeDate.bind(this) } />
                    </div>
                </div>
            )
        }

        const year = () => {
            return (
                <div className="p-2 col-xl-2 col-lg-2 col-md-3 col-sm-4">
                    <div>
                        <input type="text" className="form-control" name="txtYear" placeholder="Anio" onChange={ this.onChangeDate.bind(this) }/>
                    </div>
                </div>
            )
        }        

        const month = () => {
            return (
                <div className="p-2 input-group mb-3 col-xl-3 col-lg-3 col-md-4 col-sm-5">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Mes</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" name="selMonth" onChange={ this.onChangeDate.bind(this) }>
                        <option defaultValue>Choose...</option>
                        <option value="1">Enero</option>
                        <option value="2">Febrero</option>
                        <option value="3">Marzo</option>
                        <option value="4">Abril</option>
                        <option value="5">Mayo</option>
                        <option value="6">Junio</option>
                        <option value="7">Julio</option>
                        <option value="8">Agosto</option>
                        <option value="9">Septiembre</option>
                        <option value="10">Octubre</option>
                        <option value="11">Noviembre</option>
                        <option value="12">Diciembre</option>
                    </select>
                </div>  
            )
        }

        const inver = () => {
            return (
                <div className="d-flex flex-row-reverse bd-highlight">
                    { year() }
                    { month() }
                    { day() }
                </div>
            )
        }

        const right = () => {
            return (
                <div className="row">
                    { day() }
                    { month() }
                    { year() }
                </div>
            )
        }

        let response;
        if (this.props.className === 'inverse'){
            response = () => {
                return (
                    <div>
                        { inver() }
                    </div>
                )
            }
        }
        else if (this.props.className === 'right'){
            response = () => {
                return (
                    <div>
                        { right() }
                    </div>
                )
            }
        }

        return(
            <div>
                { response() }
            </div>            
        )
    }
}

export default DateDMY;