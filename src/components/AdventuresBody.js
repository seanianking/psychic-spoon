import React, {useState, useEffect} from 'react'
import Navbar from './navbar'
import SearchPage from '../assets/images/searchPage.jpg'
import Diary from '../assets/images/ExpressionsLanding.png'
import League from '../assets/images/LandingPageImage.png'
import Santa from '../assets/images/landing area.jpg'
import Planner from '../assets/images/plannerLanding.png'
import Burger from '../assets/images/someBurgersEaten.png'
import MobileNav from './MobileNav';

function AdventuresBody() {
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
            <section style={{paddingBottom: "3.25rem", paddingTop: "3.25rem"}} className='hero is-fullheight  is-bold is-info'>
                <div className='columns'>
                    <div className='column'>
                        <div className=" has-text-centered">
                            <h1 className=" titleItem">These are some Adventures I've completed</h1>
                            <h2 className="subTitleItem">I've put in some practice because fighting with a broken sword is pointless</h2>
                        </div>
                        <br/>
                        <div className='columns is-w-90 level'>
                            <div className="column">
                                <div className="card border has-text-danger">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                            <img src={Santa} alt="Streaming Site Screenshot" />
                                        </figure>
                                    </div>
                                    <div className="media-content has-text-centered">
                                        <p className="title is-4 has-text-danger">Santa's Workshop</p>
                                        <p className="subtitle is-6 has-text-danger">A website built for Santa Paul in Southern California.</p>
                                    </div>
                                    <footer className="card-footer">
                                        <a href="https://santa-pauls-workshop.herokuapp.com/"
                                            rel="noopener noreferrer" target="_blank" className="card-footer-item has-text-danger">Github Repo</a>
                                        <a href="https://github.com/Modern-Viking/santa-paul-website" rel="noopener noreferrer" target="_blank" className="card-footer-item has-text-danger">Deployed Site</a>
                                    </footer>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card border has-text-danger">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                            <img src={Diary} alt="Online Diary Screenshot" />
                                        </figure>
                                    </div>
                                    <div className="media-content has-text-centered">
                                        <p className="title is-4 has-text-danger">Expressions Diary</p>
                                        <p className="subtitle is-6 has-text-danger">Drop a checkpoint and save your story for future generations.</p>
                                    </div>
                                    <footer className="card-footer">
                                    <a href="https://github.com/seanianking/ExpressionsDiary"
                                            rel="noopener noreferrer" target="_blank" className="card-footer-item has-text-danger">Github Repo</a>
                                        <a href="https://expressions-diary.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="card-footer-item has-text-danger">Deployed Site</a>
                                    </footer>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card border has-text-danger">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                            <img src={League} alt="League Manager Screenshot" />
                                        </figure>
                                    </div>
                                    <div className="media-content has-text-centered">
                                        <p className="title is-4 has-text-danger">League Manager</p>
                                        <p className="subtitle is-6 has-text-danger">Form a party and use this to manage your group.</p>
                                    </div>
                                    <footer className="card-footer">
                                    <a href="https://github.com/seanianking/SoggyBottomboys-Project2"
                                            rel="noopener noreferrer" target="_blank" className="card-footer-item has-text-danger">Github Repo</a>
                                        <a href="https://soggybottomleaguemanager.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="card-footer-item has-text-danger">Deployed Site</a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                        <div className='columns level is-w-90 marginBottom'>
                            <div className="column">
                                <div className="card border has-text-danger">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                            <img src={SearchPage} alt="Streaming Site Screenshot" />
                                        </figure>
                                    </div>
                                    <div className="media-content has-text-centered">
                                    <p className="title is-4 has-text-danger">Streaming Search</p>
                                        <p className="subtitle is-6 has-text-danger">Cast locate movie and find where to watch your favorite shows!</p>
                                    </div>
                                    <footer className="card-footer">
                                    <a href="https://github.com/TuckerV/soggybottomboys-project1"
                                            rel="noopener noreferrer" target="_blank" className="card-footer-item has-text-danger">Github Repo</a>
                                        <a href="https://tuckerv.github.io/soggybottomboys-project1/" rel="noopener noreferrer" target="_blank" className="card-footer-item has-text-danger">Deployed Site</a>
                                    </footer>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card border has-text-danger">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                            <img src={Planner} alt="Day planner screenshot" />
                                        </figure>
                                    </div>
                                    <div className="media-content has-text-centered">
                                        <p className="title is-4 has-text-danger">Day Planner</p>
                                        <p className="subtitle is-6 has-text-danger">Make sure that you can meet up with your party!</p>
                                    </div>
                                    <footer className="card-footer">
                                    <a href="https://github.com/seanianking/Dayinthelife"
                                            rel="noopener noreferrer" target="_blank" className="card-footer-item has-text-danger">Github Repo</a>
                                        <a href="https://seanianking.github.io/Dayinthelife/" rel="noopener noreferrer" target="_blank" className="card-footer-item has-text-danger">Deployed Site</a>
                                    </footer>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card border has-text-danger">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                            <img src={Burger} alt="BeefBurger Screenshot" />
                                        </figure>
                                    </div>
                                    <div className="media-content has-text-centered">
                                        <p className="title is-4 has-text-danger">Burger Express</p>
                                        <p className="subtitle is-6 has-text-danger">Grab a bite to eat at your local tavern.</p>
                                    </div>
                                    <footer className="card-footer">
                                    <a href="https://github.com/seanianking/chompThatBeefburger"
                                            rel="noopener noreferrer" target="_blank" className="card-footer-item has-text-danger">Github Repo</a>
                                        <a href=" https://chompin-down.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="card-footer-item has-text-danger">Deployed Site</a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                {viewportWidth ? (<Navbar />) : ("")}
            </section>
        </div>
    )
}

export default AdventuresBody;
