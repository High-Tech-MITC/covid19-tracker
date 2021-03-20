import React from 'react';
import './Footer.css'
import footerData from "./footer.json"
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer__demo">
            <h4>HIGHTECH © {new Date().getFullYear()}</h4>
        </footer>
        // <Router>
        //     <div className="footer__grid">
        //         <div className="footer__flex ">
        //             <div className="footer__hightech">
        //                 hightech © {new Date().getFullYear()}
        //             </div>
        //         </div>
        //         <div className="footer__flex">
        //             <h3>projects</h3>

        //             {footerData.products.map(product =>
        //                 <div><a href>{product}</a></div>
        //             )}

        //         </div>
        //         <div className="footer__flex">
        //             <h3>about</h3>
        //             <Link to='/team'>team</Link><br />
        //             <a>hire us</a><br />
        //             <a>FAQ</a><br />
        //             <a>sponsor</a><br />
        //         </div>

        //     </div>
        // </Router>
    );
}

export default Footer;
