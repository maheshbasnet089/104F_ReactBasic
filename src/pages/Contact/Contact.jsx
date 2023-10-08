import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
import './Contact.css'

const Contact = () => {
  return (
    <div>
<Navbar />

    <section className="contact">
        <div className="container">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, please feel free to get in touch with us using the form below:</p>
            
            <form action="#" method="post">
                <label htmlFor="asdf">Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="asdf">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="asdf">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                
                <Button title="Submit" />
            </form>
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

export default Contact