import { BiArrowBack } from 'react-icons/bi'
import './HomeStyles.css';
import { useState } from 'react';
const Home = () => {
    const [viewport, setViewport] = useState('none')
    const [fontSize, setFontSize] = useState((window.innerWidth >= 1000) ? 2.2 : 1.1);
    const handleViewport = () => {
        viewportFind()
        if ((window.innerWidth) <= 1000)
            setViewport('flex')
        else
            setViewport('none')
    }
    const viewportFind = () => {
        if (window.innerWidth >= 500 && window.innerWidth <= 1000) {
            setFontSize((((window.innerWidth - 500) * 1.1) / 500) + 1.1)

        }
        else if (window.innerWidth > 1000)
            setFontSize(2.2)
        else
            setFontSize(1.1)
    }
    window.addEventListener('resize', handleViewport)
    return (
        <div className="home">
            <div className="group-intro">
                <div style={{ display: viewport }}>
                    <BiArrowBack />
                    <span>Join Group</span>
                </div>
                <div className='info'>
                    <h2 style={{ fontSize: fontSize + 'rem' }}>Computer Engineering</h2>
                    <p>142,765 Computer Engineers follow this</p>
                </div>
            </div>
        </div>
    )
}
export default Home