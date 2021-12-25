/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item d-flex">
          <a className="nav-link btn bg-white d-flex active mx-2" aria-current="page" href="#" >
              <i className="fas fa-arrow-left mt-1 mr-1"></i>
              Back
         </a>

          <a className="nav-link btn btn-info active" aria-current="page" href="#">Finish</a>

        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    )
}

export default Footer
