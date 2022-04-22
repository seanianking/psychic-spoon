import React, {useState, useEffect} from 'react'
import Navbar from './navbar'
import ReactLogo from '../assets/images/React.png'
import Adobe from '../assets/images/adobe.svg'
import MySQL from '../assets/images/mysql.svg'
import Mongo from '../assets/images/mongodb.svg'
import Vanilla from '../assets/images/vanillaJS.svg'
import HTMLLogo from '../assets/images/html5.svg'
import CSS from '../assets/images/css3.svg'
import Bulma from '../assets/images/bulma-logo.png'
import Bootstrap from '../assets/images/bootstrap.svg'
import jQuery from '../assets/images/jQuery.svg'
import NodeJS from '../assets/images/nodeJS.svg'
import Express from '../assets/images/express.svg'
import MobileNav from './MobileNav';
import Sass from '../assets/images/Sass.png'


function SkillsProficienciesBody() {
        // state and hooks to conditionally render Navbar or MobileNav
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth > 1023);
  const updateNav = () => {
    setViewportWidth(window.innerWidth > 1023);
  }
  useEffect(() => {
    window.addEventListener("resize", updateNav);
    return () => window.removeEventListener("resize", updateNav);
  })
    return (
        <div>
            {viewportWidth ? ("") : (<MobileNav/>) }
            <section style={{paddingBottom: "3.25rem", paddingTop: "3.25rem"}} className='hero is-fullheight  is-bold is-warning'>
                <div className='columns'>
                    <div className='column'>
                        <div className="has-text-centered">
                            <h1 className="titleItem">My Skill Inventory</h1>
                            <h2 className="subTitleItem">Leveling up and learning new skills all the time.</h2>
                        </div>
                        <br />
                        <div className='columns is-w-90 has-text-centered marginBottom'>
                            <div className='column'>
                                <h2 className="headerItem">Front-End</h2>
                                <div className='columns'>

                                    <div className='column'>

                                        <div className="card-image is-w-90">
                                            <figure className="image ">
                                                <img src={ReactLogo} alt="React logo" />
                                            </figure>
                                        </div>
                                        <div className="card-image is-w-70">
                                            <figure className="image ">
                                                <img src={HTMLLogo} alt="HTML5 logo" />
                                            </figure>
                                        </div>
                                        <div className="card-image is-w-70">
                                            <figure className="image ">
                                                <img className='is-rounded' src={Vanilla} alt="Vanilla JS logo" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className='column'>
                                        <div className="card-image is-w-70">
                                            <figure className="image ">
                                                <img src={CSS} alt="CSS3 logo" />
                                            </figure>
                                        </div>
                                        <div className="card-image is-w-90">
                                            <figure className="image ">
                                                <img className='is-rounded' src={Bulma} alt="Bulma logo" />
                                            </figure>
                                        </div>
                                        <div className="card-image is-w-70">
                                            <figure className="image ">
                                                <img className='is-rounded' src={Bootstrap} alt="Bootstrap symbol" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className='columns'>
                                    <div className='column'>
                                    <div className="card-image">
                                        <figure className="image ">
                                            <img src={jQuery} alt="jQuery logo" />
                                        </figure>
                                    </div>
                                    </div>
                                    <div className='column'>
                                    <div className="card-image">
                                        <figure className="image ">
                                            <img src={Sass} alt="Sass logo" />
                                        </figure>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <h2 className="headerItem">Back-End</h2>
                                <div className="card-image is-w-70">
                                    <figure className="image ">
                                        <img src={Mongo} alt="MongoDB logo" />
                                    </figure>
                                </div>
                                <div className="card-image is-w-70">
                                    <figure className="image ">
                                        <img src={MySQL} alt="MySQL logo" />
                                    </figure>
                                </div>
                                <div className="card-image is-w-70">
                                    <figure className="image ">
                                        <img src={NodeJS} alt="Node.JS logo" />
                                    </figure>
                                </div>
                                <div className="card-image is-w-70">
                                    <figure className="image ">
                                        <img src={Express} alt="Express logo" />
                                    </figure>
                                </div>
                            </div>
                            <div className='column'>
                                <h2 className="headerItem">Other/Misc</h2>
                                <div className="card-image is-w-70">
                                    <figure className="image ">
                                        <img src={Adobe} alt="Creative Cloud" />
                                    </figure>
                                </div>
                                <h3 className='miscItem'>Dad Joke and Pun Deliverer</h3> <br/>
                                <h3 className='miscItem'>Weaver of Epic Yarns</h3> <br/>
                                <h3 className='miscItem'>Factoid Philanthropist</h3> <br/>
                            </div>
                        </div>
                    </div>
                </div>
                {viewportWidth ? (<Navbar />) : ("")}
            </section>
        </div>
    )
}

export default SkillsProficienciesBody;
