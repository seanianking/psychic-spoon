import React, { useState } from 'react'
import { Animated } from 'react-animated-css'

function Wizard() {
    const [visible, setVisible] = useState(false)

    const handleInvisibilityCloak = () => {
        setVisible(!visible)
    }


    return (
        <a style={{ opacity: 0 }} onClick={handleInvisibilityCloak}>
            <Animated animationIn=" slideInLeft" animationOut="slideOutLeft" isVisible={visible}>
                <div>
                    <img src="https://media.dndbeyond.com/mega-menu/5188e9cd133362e349708cd3c859a6d2.gif" alt="Dancing Wizard" />
                </div>
            </Animated>
        </a>
    )
}

export default Wizard
