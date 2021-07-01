import React from 'react';
//********************FONTAWESOME ***************************/
import { faItalic, faLemon, faTheaterMasks, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeebly, faArtstation } from '@fortawesome/free-brands-svg-icons';
//*******************POPUPBOX *********************************/
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
//***************************** IMAGES ***********************/
import Hbo from '../images/hbo.png';
import Ibm from '../images/ibm.png';
import Nasa from '../images/nasa.png';
import Visa from '../images/visa.png';
import CocaCola from '../images/cocacola.png';
import Google from '../images/google.png';
import Apple from '../images/apple.png';
import Twitter from '../images/twitter.png';
import Target from '../images/target.png';
import Bp from '../images/bp.png';
import Pepsi from '../images/pepsi.png';
import Adidas from '../images/adidas.png';
import Coolaid from '../images/coolaid.png';
import Kfc from '../images/kfc.png';
import Peanut from '../images/peanut.png';
import Doritos from '../images/doritos.png';
import Burgerking from '../images/burgerking.png';
import Lacoste from '../images/lacoste.png';
//***************************************/


const Header = () => {

// ****************** LETTERMARK LOGOS ********************/

  const openPopupboxLetterimg = () => {
    const content =(
        <>
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
        </>
      )
      PopupboxManager.open({content})
    };

    const popupboxConfigLetterimg = { };


// *************************** WORDMARK LOGOS **********************/

const openPopupboxWordmark = () => {
  const content =(
      <>
      <div className="wordmark-logo">
          <div className="row">
          <div className="col-lg-6">
          <h1 className="wordmark-h1"> Wordmark Logos </h1>
          <p className="wordmark-p">Similar to a lettermark, a wordmark or
          logotype is a front-based logo that focuses on a business' name
          alone. Think Visa and Coca-Cola. Workmark logos work really well when a
          company has a succinct and distinct name. Google's logo is a great
          example of this. The name itself is catchy and memorable so, when combined
          with a strong typography, the logo helps crate strong brand recognition.</p>
          <div className="img">
          <img className="visa-logo" src={Visa} alt="Navbar-logo.." />
          <img className="cocacola-logo" src={CocaCola} alt="Navbar-logo.." />
          <img className="google-logo" src={Google} alt="Navbar-logo.." />
          </div>
          </div>
          </div>
      </div>
      </>
    )
    PopupboxManager.open({content})
  };

  const popupboxConfigWordmark = { };


// *************************** WORDMARK LOGOS **********************/

const openPopupboxPictorialmark = () => {
  const content =(
      <>
      <div className="pictorialmark-logo">
          <div className="row">
          <div className="col-lg-6">
          <h1 className="pictorialmark-h1"> Pictorial Mark Logos </h1>
          <p className="pictorialmark-p">A pictorial mark - sometimes called brand
          mark or logo symbol - is an icon - or graphic-based logo. It's probably
          the image that comes to mind when you think "logo"L the iconic Apple logo,
          the Twitter bird, the Target bullseye. Each of these companies' logos is so
          emblematic, and each brand so established, that the mark alone is instantly
          recognizable.</p>
          <p className="pictorialmark-p" >A true brank mark is only an image. Because of this, it can be a tricky
          logo type for new companies, or those without strong brand recognition, to
          use.</p>
          <div className="img">
          <img className="apple-logo" src={Apple} alt="Navbar-logo.." />
          <img className="twitter-logo" src={Twitter} alt="Navbar-logo.." />
          <img className="target-logo" src={Target} alt="Navbar-logo.." />
          </div>
          </div>
          </div>
      </div>
      </>
    )
    PopupboxManager.open({content})
  };

  const popupboxConfigPictorialmark = { };


// ************************* ABSTRACTMARK LOGO ***************************/

const openPopupboxAbstractmark = () => {
  const content =(
      <>
      <div className="abstractmark-logo">
        <div className="row">
        <div className="col-lg-6">
        <h1 className="abstractmark-h1"> Abstract Mark Logos </h1>
        <p className="abstractmark-p">An abstract mark is specific type of pictorial
        logo. Instead of being a recognizable image - like an apple or a bird - it's
        an abstract geometric form that represents your business. A few famous examples
        include the BP starburst-y logo, the Pepsi divided circle and the strip-y Adidas
        flower.</p>
        <p className="abstractmark-p" >Like all logo symbols. Abstract marks work really
        well because they condense your brand into a single image. However, instead of
        being restricted to a picture of something</p>
        <div className="img">
        <img className="bp-logo" src={Bp} alt="Navbar-logo.." />
        <img className="pepsi-logo" src={Pepsi} alt="Navbar-logo.." />
        <img className="adidas-logo" src={Adidas} alt="Navbar-logo.." />
        </div>
        </div>
        </div>
      </div>
      </>
    )
    PopupboxManager.open({content})
  };

  const popupboxConfigAbstractmark = { };


// ************************** MASCOT LOGOS ****************************/

const openPopupboxMascotmark = () => {
  const content =(
      <>
      <div className="mascotmark-logo">
        <div className="row">
        <div className="col-lg-6">
        <h1 className="mascotmark-h1"> Mascot Logos </h1>
        <p className="mascotmark-p">Mascot logos are logos that involve an illustrated
        character. Often colorful, sometimes cartoonish, and most always fun, the 
        mascot logo is a great way to create your very own brand spokesperson.</p>
        <p className="mascotmark-p" >A mascot is simply an illustrated character that
        represents your company. Think of them as the ambassador for your bussiness.
        Famous mascots include the Kool-Aid Man, KFC's Colonel and PUB's cute Water
        Wally.</p>
        <div className="img">
        <img className="coolaid-logo" src={Coolaid} alt="Navbar-logo.." />
        <img className="kfc-logo" src={Kfc} alt="Navbar-logo.." />
        <img className="peanut-logo" src={Peanut} alt="Navbar-logo.." />
        </div>

        </div>
        </div>
      </div>
      </>
    )
    PopupboxManager.open({content})
  };

  const popupboxConfigMascotmark = { };


//*********************** Combination Logos ********************************/

const openPopupboxCombinationmark = () => {
  const content =(
      <>
      <div className="combinationmark-logo">
        <div className="row">
        <div className="col-lg-6">
        <h1 className="combinationmark-h1"> Combinationmark Logos </h1>
        <p className="combinationmark-p">A combination mark is a logo comprised of a
        combined wordmark, abstract mark, or mascot. The picture and text can be laid
        out side-by-side, stacked on top of each other, or integrated together to create
        an image.</p>
        <p className="combinationmark-p" >Because a name is associated with the image,
        a combination</p>
        <div className="img">
        <img className="doritos-logo" src={Doritos} alt="Navbar-logo.." />
        <img className="burgerking-logo" src={Burgerking} alt="Navbar-logo.." />
        <img className="lacoste-logo" src={Lacoste} alt="Navbar-logo.." />
        </div>
        </div>
        </div>
      </div>
      </>
    )
    PopupboxManager.open({content})
  };

  const popupboxConfigCombinationmark = { };


// ********************************** POPUP BOX LINKS ***********************************/

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
                          <div className="col-lg-2 col-md-2 col-sm-6">
                            <div className="box" onClick={openPopupboxLetterimg}>
                            <FontAwesomeIcon className="box-mark" icon={faItalic} size="2x" />
                                <h5>Lettermark Logos</h5>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-6">
                            <div className="box" onClick={openPopupboxWordmark}>
                            <FontAwesomeIcon className="box-mark" icon={faWeebly} size="2x" />
                               <h5>Wordmark Logos</h5>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-6">
                            <div className="box" onClick={openPopupboxPictorialmark}>
                            <FontAwesomeIcon className="box-mark" icon={faLemon} size="2x" />
                                <h5>Pictorial Mark Logos</h5>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-6">
                            <div className="box" onClick={openPopupboxAbstractmark}>
                            <FontAwesomeIcon className="box-mark" icon={faArtstation} size="2x" />
                                <h5>Abstract Mark Logos</h5>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-6">
                            <div className="box" onClick={openPopupboxMascotmark}>
                            <FontAwesomeIcon className="box-mark" icon={faTheaterMasks} size="2x" />
                                <h5>Mascot Logos</h5>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-6">
                            <div className="box" onClick={openPopupboxCombinationmark}>
                            <FontAwesomeIcon className="box-mark" icon={faPuzzlePiece} size="2x" />
                                <h5>Comination Logos</h5>
                            </div>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
              </div>
              <a href="#" className="btn-main-offer" icon={faArtstation}> Contact Us </a>
              <PopupboxContainer 
              {...popupboxConfigLetterimg} 
              {...popupboxConfigWordmark}
              {...popupboxConfigPictorialmark}
              {...popupboxConfigAbstractmark}
              {...popupboxConfigMascotmark}
              {...popupboxConfigCombinationmark}
              />
          </div>
    )
};


export default (Header);