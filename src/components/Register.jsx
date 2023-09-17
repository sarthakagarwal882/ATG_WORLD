/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './registerStyles.css'
const Register = () => {
    const [viewport, setViewport] = useState(true)
    const [passShow, setPassShow] = useState({ typePass: 'password', typeCPass: 'password' })
    const handleViewport = () => {
        if ((window.innerWidth) <= 1000)
            setViewport(false)
        else
            setViewport(true)
    }

    const handlePassShow = (type, object) => {
        if (object === 'pass')
            setPassShow({ ...passShow, typePass: type })
        else if (object === 'cpass')
            setPassShow({ ...passShow, typeCPass: type })
    }

    const hnadleFormSubmit = (e) => {
        e.preventDefault()
    }

    window.addEventListener('resize', handleViewport)

    return (
        <div className='overlay-dark'>
            <div className='register-wrapper'>
                <Link to={'/'}>
                    <img src="/assets/close.svg" className='register-close' alt="" />
                </Link>

                <div className='register'>
                    {viewport ?
                        <div className='register-notification' >
                            <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                        </div>
                        :
                        null
                    }

                    <div className='register-main'>

                        <div className='register-form'>

                            <h2>Create Account</h2>

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
                                <button type='submit'>Create Account</button>
                            </form>

                            <div className='register-third-party'>
                                <div><img src="/assets/facebook-logo.svg" alt="" /> <p>Sign up with Facebook</p></div>
                                <div><img src="/assets/google-logo.svg" alt="" /><p>Sign up with Google</p></div>
                            </div>

                        </div>

                        <div className='register-more'>

                            <div>
                                <Link to={'/login'}>
                                    <p>Already have an account? <span>Sign In</span></p>
                                </Link>
                            </div>

                            <img src="/assets/authentication.png" alt="" />

                            <p className='terms-conditions'>By signing up, you agree to our Terms & conditions, Privacy policy</p>

                        </div>

                    </div>
                </div >
            </div>

        </div >
    )
}
export default Register