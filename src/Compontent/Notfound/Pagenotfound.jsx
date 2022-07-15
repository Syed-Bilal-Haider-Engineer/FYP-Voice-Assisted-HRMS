import React from 'react'
import './Notfound.css';
import {Link} from 'react-router-dom';
function Pagenotfound() {
  return (
  <>
  <div>
  <a href="https://codepen.io/uiswarup/full/yLzypyY" target="_blank">
    <header className="top-header"></header>
    {/*dust particel*/}
    <div>
      <div className="starsec" />
      <div className="starthird" />
      <div className="starfourth" />
      <div className="starfifth" />
    </div>
    {/*Dust particle end-*/}
    <div className="lamp__wrap" >
      <div className="lamp" style={{ position:"relative",paddingBottom:'20px'}}>
        <div className="cable" />
        <div className="cover" />
        <div className="in-cover">
          <div className="bulb" />
        </div>
        <div className="light" />
      </div>
    </div>
    {/* END Lamp */}
  </a>
  <section className="error">
    <a href="https://codepen.io/uiswarup/full/yLzypyY" target="_blank">
      {/* Content */}
    </a>
    <div className="error__content">
      <a href="https://codepen.io/uiswarup/full/yLzypyY" target="_blank">
        <div className="error__message message">
          <h1 className="message__title">Page Not Found</h1>
          <p className="message__text">
            We're sorry, the page you were looking for isn't found here. The
            link you followed may either be broken or no longer exists. Please
            try again, or take a look at our.
          </p>
        </div>
      </a>
      <div className="error__nav e-nav">
        <Link to="/" style={{border:'1px solid black',fontWeight:'bold',padding:'5px 20px'}}>Home</Link>
      </div>
    </div>
    {/* END Content */}
  </section>
  </div>
</>
  )
}

export default Pagenotfound