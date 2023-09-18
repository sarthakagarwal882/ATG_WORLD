/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import './LoginStyles.css'

const Login = () => {
    const navigateTo=useNavigate()
    const [viewport, setViewport] = useState(window.innerWidth <= 1000 ? true : false)
    const [passShow, setPassShow] = useState({ type: 'password' })
    const handleViewport = () => {
        if ((window.innerWidth) <= 1000)
            setViewport(true)
        else
            setViewport(false)
    }

    const handlePassShow = (type) => {
        setPassShow({ type: type })
    }

    const hnadleFormSubmit = () => {
        navigateTo('/',{state:{name:'Siddharth Goyal'}})
    }

    window.addEventListener('resize', handleViewport)

    return (
        <div className='overlay-dark'>
            <div className='login-wrapper translate-back'>
                {
                    (!viewport) &&
                    <Link to={'/'}>
                        <img src="/assets/close.svg" className='login-close' alt="" />
                    </Link>
                }

                <div className='login'>
                    {!viewport &&
                        <div className='login-notification' >
                            <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                        </div>
                    }

                    <div className='login-main'>

                        <div className='login-form'>

                            {
                                (viewport) ?
                                    <div className='sign-in-mobile-header'>
                                        <h2>Sign In</h2>
                                        <Link to={'/'}>
                                            <img src="/assets/close-mobile.svg" alt="" className='login-close-mobile' />
                                        </Link>
                                    </div>
                                    :
                                    <h2>Sign In</h2>
                            }

                            <form onSubmit={hnadleFormSubmit}>

                                <input placeholder='Email' type="email" />
                                <div className='div-inp-pass'>
                                    <input placeholder='Password' type={passShow.type} />
                                    {(passShow.type === 'password') ? <AiOutlineEye onClick={() => { handlePassShow('text') }} /> : <AiOutlineEyeInvisible onClick={() => { handlePassShow('password') }} />}
                                </div>
                                {
                                    (viewport) ?
                                        <div className='sign-in-mobile-btn'>
                                            <button type='submit'>Sign In</button>
                                            <Link to={'/register'}>
                                                <p>or, Create Account</p>
                                            </Link>
                                        </div> :
                                        <button type='submit'>Sign In</button>
                                }
                            </form>

                            <div className='login-third-party'>
                                <div><img src="/assets/facebook-logo.svg" alt="" /> <p>Sign up with Facebook</p></div>
                                <div><img src="/assets/google-logo.svg" alt="" /><p>Sign up with Google</p></div>
                            </div>
                            <p className='forgot-pass'>Forgot Password?</p>

                        </div>

                        {(!viewport) &&

                            <div className='login-more'>
                                <div>
                                    <Link to={'/register'}>
                                        <p>Don’t have an account yet? <span>Create new for free!</span></p>
                                    </Link>
                                </div>

                                <img src="/assets/authentication.png" alt="" />

                            </div>
                        }

                    </div>
                </div >
            </div>

        </div >
    )
}
export default Login