import React, { useRef, useState, useContext } from "react";
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

function Navbar() {
    // const { handleMessageCasting } = useContext(CastMessageContext);
    const [isVisible, setIsVisible] = useState(false);

    return (

        <div>
            <nav className="navbar is-fixed-bottom is-primary navMargin" role="navigation" aria-label="main navigation">
                <div className="navbar-start">
                    <a href='/' className="navbar-item">Home</a>
                    <a href='/Backstory' className="navbar-item">Backstory</a>
                    <a href='/SkillsProficiencies' className="navbar-item">Skills/Proficiencies</a>
                    <a href='/Adventures' className="navbar-item">Adventures</a>
                    <a className="navbar-item" href='#' onClick={() => setIsVisible(!isVisible)}>Send a Message</a>
                </div>
            </nav>
            <SlideToggleContent isVisible={isVisible}>
                <Message />
            </SlideToggleContent>
        </div>
    )
}

export default Navbar