import React, { useRef, useState, useContext } from "react";
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import { bool, node } from "prop-types";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";
// import CastMessageContext from '../App'
import Message from './Message'

const Inner = styled.div`
  &:before,
  &:after {
    content: "";
    display: table;
  }
`;

const visibleStyle = { height: "auto", opacity: 1, overflow: "visible" };
const hiddenStyle = { opacity: 0, height: 0, overflow: "hidden" };

function getElementHeight(ref) {
    return ref.current ? ref.current.getBoundingClientRect().height : 0;
}

/** The children of this component will slide down on mount and will slide up on unmount */
const SlideToggleContent = ({ isVisible, children, forceSlideIn }) => {
    const isVisibleOnMount = useRef(isVisible && !forceSlideIn);
    const containerRef = useRef(null);
    const innerRef = useRef(null);

    const transitions = useTransition(isVisible, null, {
        enter: () => async (next, cancel) => {
            const height = getElementHeight(innerRef);

            cancel();

            await next({ height, opacity: 1, overflow: "hidden" });
            await next(visibleStyle);
        },
        leave: () => async (next, cancel) => {
            const height = getElementHeight(containerRef);

            cancel();

            await next({ height, overflow: "hidden" });
            await next(hiddenStyle);

            isVisibleOnMount.current = false;
        },
        from: isVisibleOnMount.current ? visibleStyle : hiddenStyle,
        unique: true
    });

    return transitions.map(({ item: show, props: springProps, key }) => {
        if (show) {
            return (
                <animated.div ref={containerRef} key={key} style={springProps}>
                    <Inner ref={innerRef}>{children}</Inner>
                </animated.div>
            );
        }

        return null;
    });
};

SlideToggleContent.defaultProps = {
    forceSlideIn: false
};

SlideToggleContent.propTypes = {
    /** Should the component mount it's childeren and slide down */
    isVisible: bool.isRequired,
    /** Makes sure the component always slides in on mount. Otherwise it will be immediately visible if isVisible is true on mount */
    forceSlideIn: bool,
    /** The slidable content elements */
    children: node.isRequired
};


function MobileNav() {
    // const { handleMessageCasting } = useContext(CastMessageContext);
    const [isVisible, setIsVisible] = useState(false);
    const [menuState, setMenuState] = useState(false);

    const handleMenuState = e => {
        e.preventDefault();
        setMenuState(!menuState);
    }

    return (

        <div>
            <nav className="navbar is-fixed-top is-primary " role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <img style={{ width: "50px", height: "50px", marginLeft: '10px' }} src="https://i.ya-webdesign.com/images/transparent-king-crown-png-5.png" alt='The Crown' />
                    <div onClick={handleMenuState} className={` dropdown is-paddingless ${menuState ? "is-active" : ""}`}>
                        <div className="dropdown-trigger navbar-item">
                            <a href='#' className="button navbar-item is-primary" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Character Sheet</span>
                                <span className="icon is-small">
                                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </a>
                        </div>

                        <div className="dropdown-menu " id="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <Link to="/" className="dropdown-item">
                                    Home</Link>
                                <Link to="/Backstory" className="dropdown-item">
                                    Backstory</Link>
                                <Link to="/SkillsProficiencies" className="dropdown-item">
                                    Skills/Proficiencies</Link>
                                <Link to="/Adventures" className="dropdown-item">
                                    Adventures</Link>
                                <hr className="dropdown-divider" />
                                <a className="dropdown-item" href='#' onClick={() => setIsVisible(!isVisible)}>Send a Message</a>
                            </div>
                        </div>
                    </div>
                </div>
                <SlideToggleContent isVisible={isVisible}>
                    <Message />
                </SlideToggleContent>
            </nav>
        </div >
    )
}

export default MobileNav