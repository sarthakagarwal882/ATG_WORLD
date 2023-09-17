import Card from "../../components/Card"
import './CardRouteStyles.css'
const CardRoute = () => {
    return (
        <div className="card-r">
            <Card img='card-1' type='Article' header='What if famous brands had regular fonts? Meet RegulaBrands!' desc='I’ve worked in UX for the better part of a decade. From now on, I plan to rei…' views='1.4k' profileName='Sarthak Kamra' profileImg="sarthak" />

            <Card img='card-2' type='Education' header='Tax Benefits for Investment under National Pension Scheme launched by Government' desc='I’ve worked in UX for the better part of a decade. From now on, I plan to rei…' views='1.4k' profileName='Sarah West' profileImg="sarah" />

            <Card img='card-3' type='Meetup' header='Finance & Investment Elite Social Mixer @Lujiazui' date='Fri, 12 Oct, 2018' location='Ahmedabad, India' button='Visit Website' buttonColor='#E56135' views='1.4k' profileName='Ronal Jones' profileImg="ronal" />

            <Card type='Job' header='Software Developer' company='Innovaccer Analytics Private Ltd.' location='Noida, India' button='Apply on Timesjobs' buttonColor='#02B875' views='1.4k' profileName='Joseph Gray' profileImg="joseph" />
        </div>
    )

}

export default CardRoute