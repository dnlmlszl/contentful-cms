import heroImg from '../assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>
                Hot chicken bushwick affogato, +1 bitters kale chips master cleanse jean shorts semiotics artisan. Marxism messenger bag bushwick skateboard, meggings synth DIY plaid tumblr thundercats photo booth cupping. Whatever same drinking vinegar butcher occupy gatekeep before they sold out praxis succulents hammock. Forage everyday carry drinking vinegar sriracha fashion axe. Small batch jean shorts health goth, farm-to-table godard waistcoat authentic flexitarian plaid gentrify.
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="Undraw illustration" className='img'/>
            </div>
        </div>
    </section>
  )
}

export default Hero