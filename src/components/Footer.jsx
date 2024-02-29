import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
        <div className="footer-content d-flex justify-content-between">
            <div style={{width:'400px'}}className="media">
              <h5 className='d-flex'><i style={{height:'25px'}} className='fa-solid fa-music me-3'></i>
              Media Player</h5>
              <p style={{textAlign:'justify'}}> <h6>Designed and built with all the love in the world
              by the Bootstrap team with the help of our contributors.</h6></p>
              <span>Code licenced MIT,docs CC By 3.0</span>
              <span>Currently v5.3.2</span>
            </div>
            <div className="links d-flex flex-column">
              <h5>Links</h5>
              <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing page</Link>
              <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home page</Link>
              <Link to={'/watch'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>
            </div>
            <div className="guides d-flex flex-column">
              <h5>Guides</h5>
              
              <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}>React js</a>
              <a href="https://reactrouter.com/en/main" target='_blank' style={{textDecoration:'none',color:'white'}}>React Routing</a>
              <a href="https://react-bootstrap.github.io/" target='_blank' style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>
            </div>
            <div className="contact">
              <h5>Contact us</h5>
              <div className="d-flex">
                <input type='text' className='form-control me-1' placeholder='Email id please'/>
                <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
              </div>
              <div className="icons d-flex justify-content-between mt-3">
              <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter"></i></a>
              <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram"></i></a>
              <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook"></i></a>
              <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-github"></i></a>
              <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin"></i></a>
              <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-phone"></i></a>

              </div>
            </div>

        </div>
       <p className='text-center mt-5'> copyright &copy; 2020 Media player.Bulit with react</p>
    </div>
  )
}

export default Footer
