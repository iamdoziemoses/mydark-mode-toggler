import "./Hero.css"
import heroImg from "../../assets/phone.svg";

const Hero = ({myTheme}) => {
  return (
   <section className="hero" data-theme={myTheme}>
    <div className="container --grid-15">
        <div className="hero-text">
            <h1>Visit Vila Shop Landing Page</h1>
            <p>lorem ipsum dolor sit amet consectiot adipisiing elit. Culpa perferendis eb=3bfbb animi in, 
                vlun insiicii?</p>
                <div className="--flex-start">
                    <button className="--btn btn-p">Learn More</button>
                    <button className="--btn --btn-danger">Sign Up</button>
                </div>
        </div>

        <div className="hero-image --text-center">
            <img src={heroImg} alt="phone" width={200}/>
        </div>
    </div>

   </section>
  )
}

export default Hero