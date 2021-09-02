import React  from "react";
import sardines from "../sardines.png"; 
import {Link} from "react-router-dom";

class Sardines extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count : 0 , 

        }
        this.addBags = this.addBags.bind(this);
    }

    addBags(){
        var random = Math.floor(Math.random()*600); 
        var random2 = Math.floor(Math.random()*1300); 
        var newImg = document.createElement("img");
        newImg.setAttribute("src" , sardines) ;
        newImg.setAttribute("style" , `
        position: absolute;
        height: 100px;
        width: 200px;
        top: ${random}px;
        left:${random2}px;
        z-index:1 ;
        `);
        document.getElementById("con").appendChild(newImg); 
        

        var countBag= this.state.count ; 
        countBag++ ; 

        this.setState({
            count:countBag , 
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="container-fluid sardines-container" id="con">
                    <div className="row">
                        <div className="col p-5">
                            <div className="sardines-button-container">
                                <h2>Sardines eaten: {this.state.count}</h2>
                                <button className="btn btn-warning" onClick={this.addBags}>DELICIOUS</button>
                                <Link to="/" className="sardines-gohome">Go Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default Sardines ; 