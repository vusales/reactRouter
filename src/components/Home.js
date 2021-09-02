import React from "react";
import {NavLink} from "react-router-dom" ; 

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container-fluid p-5 home-container-fluid ">
                    <div className="row mt-5">
                        <div className="col-6 p-3 mt-5">
                            <div className="small-home-con p-5">
                                <h1>Hello , i am a vending machine . Whot would you like to eat ?</h1>
                            </div>
                        </div>
                        <div className="col-6 p-3 mt-5"  >
                            <div className="small-home-con p-5">
                                <NavLink to="/sardines" activeClassName="llnnkk" className="lnk">Sardines</NavLink>
                                <NavLink to="/chips" activeClassName="llnnkk" className="lnk">Chips</NavLink>
                                <NavLink to="/soda" activeClassName="llnnkk" className="lnk">Soda</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default Home ; 