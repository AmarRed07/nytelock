import React from 'react'
import Hbo from '../images/hbo.png';
import Ibm from '../images/ibm.png';
import Nasa from '../images/nasa.png';


const Lettermark = () => {
    return (
        <div className="lettermark-logo">
            <div className="row">
            <div className="col-lg-6">
            <h1 className="lettermark-h1"> Lettermark Logos </h1>
            <p className="lettermark-p">A monogram or letttermark is a typography-based logo
            that's comprised of a few letters, usually a company's initials.
            The lettermark is all about simplicity.</p>
            <p className="lettermark-p" >By utilizing just a few letters lettermark logos are effective
            at streamlining any company brand if they have a long name.</p>
            <div className="img">
            <img className="hbo-logo" src={Hbo} alt="Navbar-logo.." />
            <img className="ibm-logo" src={Ibm} alt="Navbar-logo.." />
            <img className="nasa-logo" src={Nasa} alt="Navbar-logo.." />
            </div>

            </div>
            </div>
            </div>
    )
}

export default Lettermark
