import { Link } from "react-router-dom";
import"./Footer.css";
export default function Footer(){
    return(
        <div>
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
 <footer>
   <div class="footer-content">
            <h3>Footer</h3>
            <p>This footer is created by me to complete the task from our institute called
                Besent technologies chennai thiruvanmiyur 
            </p>
            <ul class="socials">
                {/* <li><Link to="#"><i class="fa fa-facebook"></i></Link></li> */}
                <li><Link to="#"><i class="fa fa-twitter"></i></Link></li>
                {/* <li><Link to="#"><i class="fa fa-google-plus"></i></Link></li> */}
                <li><Link to="#"><i class="fa fa-youtube"></i></Link></li>
                {/* <li><Link to="#"><i class="fa fa-linkedin-square"></i></Link></li> */}
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy;2022 <a href="#">veera</a>  </p>
                    <div class="footer-menu">
                      <ul class="f-menu">
                        <li><Link to="#">Home</Link></li>
                        <li><Link to="#">About</Link></li>
                        <li><Link to="#">Contact</Link></li>
                        <li><Link to="#">Blog</Link></li>
                      </ul>
                    </div>
        </div>
        </footer>
        </div>
        )
    }

    
