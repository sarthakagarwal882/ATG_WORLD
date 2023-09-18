/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import './RegisterStyles.css'

const Register = () => {
    const navigateTo = useNavigate()
    const [viewport, setViewport] = useState(window.innerWidth <= 1000 ? true : false)
    const [passShow, setPassShow] = useState({ typePass: 'password', typeCPass: 'password' })
    const handleViewport = () => {
        if ((window.innerWidth) <= 1000)
            setViewport(true)
        else
            setViewport(false)
    }

    const handlePassShow = (type, object) => {
        if (object === 'pass')
            setPassShow({ ...passShow, typePass: type })
        else if (object === 'cpass')
            setPassShow({ ...passShow, typeCPass: type })
    }

    const hnadleFormSubmit = () => {
        navigateTo('/', { state: { name: 'Siddharth Goyal' } })
    }

    window.addEventListener('resize', handleViewport)

    return (
        <div className='overlay-dark'>
            <div className='register-wrapper translate-back'>
                {(!viewport) &&
                    < Link to={'/'}>
                        <img src="/assets/close.svg" className='register-close' alt="" />
                    </Link>
                }

                <div className='register'>
                    {(!viewport) &&
                        <div className='register-notification' >
                            <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                        </div>
                    }

                    <div className='register-main'>

                        <div className='register-form'>
                            {viewport ?
                                < div className='reg-form-heading-mobile'>
                                    <h2>Create Account</h2>
                                    < Link to={'/'}>
                                        <img src="/assets/close-mobile.svg" className='register-close-mobile' alt="" />
                                    </Link>
                                </div> :
                                <h2>Create Account</h2>
                            }

                            <form onSubmit={hnadleFormSubmit}>
                                <div className='inp-dual'>
                                    <input placeholder='First Name' type="text" />
                                    <input placeholder='Last Name' type="text" />
                                </div>
                                <input placeholder='Email' type="email" />
                                <div className='div-inp-pass'>
                                    <input placeholder='Password' type={passShow.typePass} />
                                    {(passShow.typePass === 'password') ? <AiOutlineEye onClick={() => { handlePassShow('text', 'pass') }} /> : <AiOutlineEyeInvisible onClick={() => { handlePassShow('password', 'pass') }} />}
                                </div>
                                <div className='div-inp-pass'>
                                    <input placeholder='Confirm Password' type={passShow.typeCPass} />
                                    {(passShow.typeCPass === 'password') ? <AiOutlineEye onClick={() => { handlePassShow('text', 'cpass') }} /> : <AiOutlineEyeInvisible onClick={() => { handlePassShow('password', 'cpass') }} />}
                                </div>
                                {
                                    (viewport) ? <div className='reg-submit-mobile'>
                                        <button type='submit'>Create Account</button>
                                        <Link to={'/login'}>
                                            <p>or, Sign In</p>
                                        </Link>
                                    </div>
                                        :
                                        <button type='submit'>Create Account</button>

                                }
                            </form>

                            <div className='register-third-party'>
                                <div><img src="/assets/facebook-logo.svg" alt="" /> <p>Sign up with Facebook</p></div>
                                <div><img src="/assets/google-logo.svg" alt="" /><p>Sign up with Google</p></div>
                            </div>
                            <p className='terms-mobile'>By signing up, you agree to our Terms & conditions, Privacy policy</p>

                        </div>
                        {
                            (!viewport) &&
                            <div className='register-more'>

                                <div>
                                    <Link to={'/login'}>
                                        <p>Already have an account? <span>Sign In</span></p>
                                    </Link>
                                </div>

                                <img src="/assets/authentication.png" alt="" />

                                <p className='terms-conditions'>By signing up, you agree to our Terms & conditions, Privacy policy</p>

                            </div>
                        }

                    </div>
                </div >
            </div>

        </div >
    )
}
export default Register