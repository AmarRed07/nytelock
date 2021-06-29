import { faItalic, faLemon, faTheaterMasks, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeebly, faArtstation } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
      <div className="header-wraper">
          <div className="main-info">
              <h6 className="sub-heading">
              <ul>
                  <li>
                        <span>What services do we offer?</span>
                  </li>
              </ul>
              </h6>
              <h2 className="header-h2">
                  Stand Out From The Rest With Professional Branding
              </h2>
              <div className="services">
                <div className="py-5">
                  <div className="container-services">
                      <div className="row">
                          <div className="col-md-2 col-sm-12">
                            <div className="box">
                            <FontAwesomeIcon className="box-mark" icon={faItalic} size="2x" />
                                <h5>Lettermark Logos</h5>
                            </div>
                          </div>
                          <div className="col-md-2 col-sm-12">
                            <div className="box">
                            <FontAwesomeIcon className="box-mark" icon={faWeebly} size="2x" />
                                <h5>Wordmark Logos</h5>
                            </div>
                          </div>
                          <div className="col-md-2 col-sm-12">
                            <div className="box">
                            <FontAwesomeIcon className="box-mark" icon={faLemon} size="2x" />
                                <h5>Pictorial Mark Logos</h5>
                            </div>
                          </div>
                          <div className="col-md-2 col-sm-12">
                            <div className="box">
                            <FontAwesomeIcon className="box-mark" icon={faArtstation} size="2x" />
                                <h5>Abstract Mark Logos</h5>
                            </div>
                          </div>
                          <div className="col-md-2 col-sm-12">
                            <div className="box">
                            <FontAwesomeIcon className="box-mark" icon={faTheaterMasks} size="2x" />
                                <h5>Mascot Logos</h5>
                            </div>
                          </div>
                          <div className="col-md-2 col-sm-12">
                            <div className="box">
                            <FontAwesomeIcon className="box-mark" icon={faPuzzlePiece} size="2x" />
                                <h5>Comination Logos</h5>
                            </div>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
              </div>
              <a href="#" className="btn-main-offer"> Contact Us </a>
          </div>
    )
}

// const Lettermark = () => {
//     return (
//         <div>
//             <h1>Test Test</h1>
//         </div>
//     )
// }


export default Header
