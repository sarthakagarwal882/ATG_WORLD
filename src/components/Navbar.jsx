/* eslint-disable react/no-unescaped-entities */
import "./NavbarStyles.css"
import { IoMdArrowDropdown } from 'react-icons/io'
import { HiSearch } from 'react-icons/hi'
import { Link } from "react-router-dom"
import { useState } from "react"
const Navbar = () => {
    const [dropDown, setDropdown] = useState(false)
    const handleFormSubmit = (e) => {
        e.preventDefault()
    }
    const handleClickDrop = () => {
        setDropdown(!dropDown)
    }

    return (
        <div className="navbar">
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
                <p onClick={handleClickDrop} className={dropDown ? 'clicked' : ''}>Create account. <span>It's free!</span><IoMdArrowDropdown /></p>
            </div>
        </div>
    )

}
export default Navbar