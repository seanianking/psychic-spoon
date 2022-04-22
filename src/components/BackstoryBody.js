import React, {useState, useEffect} from 'react'
import Navbar from './navbar'
import Family from '../assets/images/king239.JPG'
import MobileNav from './MobileNav';
  


function BackstoryBody() {
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
            <section style={{paddingBottom: "3.25rem", paddingTop: "3.25rem"}} className='hero is-fullheight  is-bold is-success'>
                <div className='columns'>
                    <div className='column'>
                        <div className=" has-text-centered">
                            <h1 className="titleItem">Baby got Backstory</h1>
                            <h2 className="subTitleItem">A little about me</h2>
                        </div>
                        <br />
                        <div className='columns is-w-90'>
                            <div className='column'>
                                <p className='aboutItem'>
                                    My story starts in Provo, Utah where I grew up like any other relatively 
                                    normal person. Throughout all of my schooling I did normal things like 
                                    competing in graphic design and t-shirt creation competitions through 
                                    Skills USA, playing sports like Football and Rugby, and only learning 
                                    to read so I would understand the story of the video games I was playing.
                                    Another of my favorite hobbies has to do with solving puzzles and riddles.
                                    Whether at an escape room, or a family riddle contest, pushing the brain
                                    to think in different ways is always a favorite pass-time. 
                                </p>
                                <p className='aboutItem'>
                                    All of these things are what brought me to the world of coding. The
                                    competing in graphic design provided the skill set and desire needed
                                    for UI development. The sports and competitions paved the way to 
                                    having the drive to work on my own, and the communication prowess
                                    needed to work with a team. Coding provides a new puzzle to solve or 
                                    riddle to answer. I've worked hard to learn how to tease out the answer 
                                    to those riddles, and my hard work paid off when I received a certificate 
                                    for a Web Development program with the University of Utah.           
                                </p>
                                <p className='aboutItem'>
                                    When I have a little free time, I'll usually spend it baking a new cookie
                                     recipe of my own, or going on an adventure with my wife and daughter. 
                                     But when I can't do that, I'll try to go on an adventure playing Dungeons 
                                     and Dragons or other tabletop games, or playing a video game of nearly any kind.
                                </p>
                            </div>
                            <div className='column '>
                                <figure className="image is-2by3 ">
                                    <img className='border has-text-danger' src={Family} alt="King Family" />
                                </figure>
                            </div>
                        </div>
                    </div>

                </div>
                
            </section>
        {viewportWidth ? (<Navbar />) : ("")}
        </div>
    )
}

export default BackstoryBody;
