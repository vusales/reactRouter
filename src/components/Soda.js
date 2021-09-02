import React from "react";
import soda from "../soda.png"; 
import {Link} from "react-router-dom";

class Soda extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container-fluid soda-container">
                    <div className="row">
                        <div className="col-4 mt-5 p-5">
                            <div>
                                <img className="rotateCola" src={soda}/>
                            </div>
                        </div>
                        <div className="col-4 p-5">
                            <div className="sardines-button-container">
                                <h2 className="p-3">OMG SUGAR!!!</h2>
                                <Link to="/" className="sardines-gohome p-3">Go Home</Link>
                            </div>
                        </div>
                        <div className="col-4 mt-5 p-5">
                            <div>
                                <img className="rotateCola" src={soda}/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default Soda ; 