/* eslint-disable react/no-unescaped-entities */
import "./NavbarStyles.css"
import { IoMdArrowDropdown } from 'react-icons/io'
import { HiSearch } from 'react-icons/hi'
import { Link } from "react-router-dom"
import { useState } from "react"
const Navbar = () => {
    const [dropDown, setDropdown] = useState(false)
    const [viewport, setViewport] = useState(window.innerWidth<=1000?false:true)
    const handleViewport = () => {
        if ((window.innerWidth) <= 1000)
            setViewport(false)
        else
            setViewport(true)
    }
    window.addEventListener('resize', handleViewport)


    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    const handleClickDrop = () => {
        setDropdown(!dropDown)
    }

    return (
        (viewport) ?
            < div className="navbar" >
                <Link to={'/'}>
                    <h1 className="nav-title"><span>ATG.</span>W<span></span>RLD</h1>
                </Link>
                <div className="nav-search">
                    <form onSubmit={handleFormSubmit}>
                        <button type="submit"><HiSearch /> </button>
                        <input type="text" name="" id="" placeholder="Search for your favorite groups in ATG" />
                    </form>
                </div>
                <div className="nav-auth">
                    <Link to={'/register'}>
                        <p onClick={handleClickDrop} className={dropDown ? 'clicked' : ''}>Create account. <span>It's free!</span><IoMdArrowDropdown /></p>
                    </Link>
                </div>
            </div >
            :
            <div className="navbar-mobile">
                <div>
                    <img src="/assets/square.svg" alt="" />
                    <img src="/assets/circle.svg" alt="" />
                    <Link to={'/register'}>
                    <img src="/assets/triangle.svg" alt="" />
                    </Link>
                </div>
            </div>
    )

}
export default Navbar