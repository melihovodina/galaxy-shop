import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../components/AppContext';
import FallingDots from '../../components/fallingDots/FallingDots';
import Window from '../../components/window/Window'
import MyButton from '../../components/myButton/MyButton';
import './about.css'

const About= () => {
    const { setIsVisible, setElements, setLoading } = useContext(AppContext);
    const navigate = useNavigate()

    return (
        <div className='about-main'>
            <FallingDots/>
            <Window/>
            <div className='about-field'>
                <div className='about-header'>
                    <MyButton
                        className='about-header-button'
                        scaleFrom={1}
                        scaleTo={1.2}
                        onClick={() => navigate('/main')}
                    >
                        <>Return</>
                    </MyButton>
                    <p className='about-header-name'>Galaxy Shop</p>
                </div>
                <div className='about-message-block'>
                    <h2 className='about-message'>
                        The website was created by Daniil Melikhov. <br/>
                        The website is not a real Samsung store, it is created to show the skills of the creator.  <br/> 
                        This website is not affiliated with Samsung Electronics Co., Ltd. or any of its subsidiaries.  <br/>
                        Please note that:  <br/> This website does not sell or distribute any Samsung products.  <br/>
                        Any information, images, or logos used on this website are for demonstration purposes only 
                        and do not imply any official endorsement or partnership with Samsung.  <br/>
                        Any transactions or interactions on this website are not valid or recognized by Samsung.  <br/>
                        By using this website, you acknowledge that you understand and agree to these terms.  <br/>
                        Let me know if you'd like me to make any changes! <br/>
                        melihoxa@gmail.com
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default About