import Banner from '../../assets/banner_a_propos.png'

export default function About() {
    return (
        <div className='home'>
            <div className='banner'>
                <figure>
                    <img className='bannerImg' src={Banner} alt='' />
                </figure>
            </div>
        </div>
    )
}