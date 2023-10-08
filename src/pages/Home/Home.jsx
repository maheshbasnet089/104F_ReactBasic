import Button from "../../components/Button/Button"
import Navbar from "../../components/Navbar/Navbar"



const Home = () => {
  return (
 <div>
    <Navbar />
    <Button title="Login" color="red" subTitle="hello world this is subtitle"  />
    <Button title="Register" color="green" subTitle="hello world this is subtitle"  />

    <section className="hero">
        <div className="container">
            <h2>Welcome to Digital Pathshala</h2>
            <p>Your pathway to digital learning and success!</p>
            <a href="#" className="btn">Explore Courses</a>
        </div>
    </section>

    <section className="about">
        <div className="container">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, urna at efficitur.</p>
        </div>
    </section>

    <section className="contact">
        <div className="container">
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to <a href="mailto:info@digitalpathshala.com">email us</a>.</p>
        </div>
    </section>

    <footer>
        <div className="container">
            <p>&copy; 2023 Digital Pathshala. All rights reserved.</p>
        </div>
    </footer>
 </div>
  )
}

export default Home