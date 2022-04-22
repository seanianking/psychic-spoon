import React, {useState, useEffect, useContext} from 'react'
// import { Animated } from 'react-animated-css'
import CastMessageContext from '../App'
// import Wizard from './Wizard'


function Message() {
    // const {handleMessageCasting } = useContext(CastMessageContext);

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth > 1023);
    
    const updateNav = () => {
      setViewportWidth(window.innerWidth > 1023);
    }
    useEffect(() => {
      window.addEventListener("resize", updateNav);
      return () => window.removeEventListener("resize", updateNav);
    })

    return (   
        // <Animated  animationIn=" slideInLeft" animationOut="slideOutLeft" isVisible={handleMessageCasting}>   
        <div>
            <div className={`quickview column is-one-forth ${viewportWidth ? "" : 'has-padding-top' }`}>
                <header className="quickview-header is-primary">
                    <p className="title has-text-warning">Contact me here:</p>
                </header>
                <div className="quickview-body is-success has-text-centered">
                    <div className="container contactItem">
                        <figure className="image ">
                            <a className='has-text-danger' href="https://www.linkedin.com/in/seanianking/">
                                <i className="fab fa-linkedin fa-5x"></i>
                            </a>
                        </figure>
                        <p className='has-text-danger'>LinkedIn</p>
                    </div>
                    <div className="container contactItem">
                        <figure class="image">
                            <a className='has-text-danger' href="https://github.com/seanianking">
                                <i class="fab fa-github fa-5x"></i></a>
                        </figure>
                        <p className='has-text-danger'>GitHub</p>
                    </div>
                    <div className="container contactItem">
                        <figure class="image">
                            <a className='has-text-danger' href="mailto:seanianking@gmail.com">
                                <i class="far fa-envelope fa-5x"></i>
                            </a>
                        </figure>
                        <p className='has-text-danger'>Email me directly</p>
                    </div>
                    <div className="container contactItem">
                        <figure class="image">
                            <a className='has-text-danger' href='/Resume'>
                                <i class="far fa-handshake fa-5x"></i></a>
                        </figure>
                        <p className='has-text-danger'>View my Resume</p>
                    </div>
                    <div className="container contactItem">
                       {/* <Wizard/> */}
                    </div>
                </div>
            </div>
        </div>
        // </Animated>
    )
}

export default Message
