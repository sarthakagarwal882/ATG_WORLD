/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BsThreeDots, BsFillShareFill } from 'react-icons/bs'
import { MdOutlineLocationOn } from 'react-icons/md'
import { TbBriefcase2 } from 'react-icons/tb'
import { AiOutlineEye } from 'react-icons/ai'

import "./CardStyles.css"
import { useEffect, useState } from 'react'

const Card = (props) => {
    const [dots, setDots] = useState(false)
    const [genInfoCount, setGenInfoCount] = useState(0)

    let { img, type, header, desc, date, location, button, profileName, ProfileImg, company, views, buttonColor } = props
    let count = 0

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        count = 0;
        if (location)
            count++;
        if (company)
            count++;
        if (date)
            count++;
        setGenInfoCount(count);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const emojiType = (eventType) => {
        if (eventType == 'Education') { return '🔬' }
        if (eventType == 'Meetup') { return '🗓️' }
        if (eventType == 'Job') { return '💼' }
        if (eventType == 'Article') { return '✍️' }
    }

    const dotsDropdown = () => {
        setDots(!dots)
    }

    return (
        <div className="card">
            {
                (img) ?
                    <div className={img + "-img"}></div>
                    : null
            }

            {
                (type) ?
                    <div className="card-type"><p>{emojiType(type) + type}</p></div>
                    : null
            }

            <div className={(header) ? 'header-dots' : 'header-dots-reverse header-dots'}>
                {
                    (header) ?
                        <div className="card-header"><h3>{header}</h3></div>
                        : null
                }
                <div onClick={dotsDropdown} className={(dots) ? 'dots-clicked card-dropdown' : 'card-dropdown'}>
                    <BsThreeDots />
                </div>
            </div>

            {
                (genInfoCount > 0) ?
                    <div className='card-gen-info' style={{ width: (genInfoCount) * 30 + '%' }}>
                        {(company) ? <p><TbBriefcase2 />{company}</p> : null}
                        {(date) ? <p><span className='gen-info-calendar'></span>{date}</p> : null}
                        {(location) ? <p><MdOutlineLocationOn />{location}</p> : null}
                    </div> :
                    null
            }

            {
                (desc) ?
                    <div className='card-desc'>
                        <p>{desc}</p>
                    </div> :
                    null
            }

            {(button) ?
                <span className='card-btn' style={{ color: buttonColor }}>{button}</span>
                :
                null
            }

            <div className='card-footer'>
                <div className='card-profile'> <img src={"/assets/" + ProfileImg + '.svg'} alt="" /> <p>{profileName}</p></div>
                <div className='card-stats'>
                    <p><AiOutlineEye />{views + ' views'}</p>
                    <span><BsFillShareFill /></span>
                </div>

            </div>

        </div>
    )
}
export default Card