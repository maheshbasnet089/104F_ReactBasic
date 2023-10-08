import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
import './About.css'

const About = () => {
  return (
    <div>

    <Navbar />
    <Button title="Register" />

    <section className="about">
        <div className="container">
            <h2>About Us</h2>
            <p>Welcome to Digital Pathshala, your go-to destination for high-quality digital learning experiences. Our mission is to empower individuals and organizations with the knowledge and skills needed to thrive in the digital age.</p>
            <p>At Digital Pathshala, we offer a wide range of online courses across various digital disciplines, including web development, digital marketing, data science, and more. Our expert instructors are passionate about sharing their expertise and helping you achieve your goals.</p>
            <p>Whether  a beginner looking to get started in a new field or an experienced professional seeking to enhance your skills, Digital Pathshala has something for everyone. Our interactive courses, practical assignments, and hands-on projects ensure that you gain real-world skills that are in demand in  job market.</p>
            <p>We are committed to providing you with a supportive learning environment and a wealth of resources to help you succeed. Join us on your digital learning journey and unlock your full potential with Digital Pathshala.</p>
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

export default About