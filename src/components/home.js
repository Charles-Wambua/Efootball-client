import "./css/home.css";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  if (!token) {
    navigate("/login");
    return null; // Render nothing until the navigation is complete
  }
  return (
    
    <div className="home">
      <div className="homepage">
        <h2>Welcome Dear Gamer!</h2>
        <h4>To the best eFootball™ gaming website!</h4>
        <h5>Our main aim is to keep you entertained and happy, for life😁</h5>
        <h5>
          For the LOVE of the GAME! <br />
          Tounaments will be conducted weekly and automatic, 100% <br /> League
          and Knockouts and the Winners receive prizes and earn a badge, FOR THE
          LOVE OF THE GAME
        </h5>
      </div>
      <div className="image">
        <img src="/pic.jpg" alt="eFootball Championship" />
      </div>
      <div className="stories">
        <h2>A New eFootball™ Season</h2>
        "To offer football fans around the world an opportunity to enjoy a new
        football game, with unparalleled realism like never before" <br />
        This mission statement has never once left our mind. For this very
        reason, we have been and will continue collecting as much "genuine
        feedback" from our esteemed users as possible. Based on your valued
        feedback, we will keep on improving and implementing new features in
        order to make the game even more enjoyable for even more football fans.
        <br />
        As we turn another new page in the real-world football calendar,
        eFootball™ will also be embarking from 2022 to 2023.
        <br />
        Be it eye-catching talents from the opening fixtures, or the fresh
        colours of each football club – We will continue bringing you the latest
        and greatest of the football season through a whole slew of exciting
        content!
        <br />
        <b> Enjoy the fever pitch of "real football" in eFootball™ 2023!</b>
      </div>
      <div className="footer">
        <div className="subfooter">
          eFootball™ Championship Pro <br />
          FAQs
          <br />
          Sponsorship
          <br />
          Contact Us
          <br />
          個人情報等保護方針
          <br />
          Privacy Policy
          <br />
          Privacy Notice
          <br />
        </div>
        <div className="subfooter">
          ©2023 Konami Digital Entertainment
          <br />
          24/7 SUPPORT
        </div>
        <div class="subfooter">
          Charles™
          <div class="social-icons">
            <a
              href="https://wa.me/254114652533"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/thatsme.charles/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/Charles59676543"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/Charles-Wambua"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/charles-wambua-918a0724a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div >
);
};
