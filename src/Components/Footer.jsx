
import  '../App.css';

const Footer = ()=>{
    return(
        <>
        <footer className="footer">
            <div className="columnOne">
                <h3>About Us</h3>
                <p>We are committed to providing the best travel experience.</p>
            </div>
            <div className="columnTwo">
                <h3>Contact</h3>
                <p>Email:airkulty@info.org</p>
                <p>Phone:+123 456 7890</p>   
            </div>
            <div className="columnThree">
                <h3>Follow Us</h3>
                <p>Facebook | Twitter | Instagram</p>
                <a href='#'>Subscribe to our newsletter</a> <br />
                <button className="sus">Subscribe</button>
            </div>
        </footer>
        </>
    )
}

export default Footer;