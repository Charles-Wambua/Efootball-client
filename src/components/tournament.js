import "./css/tournaments.css";
import { Link } from "react-router-dom";
export const Tounaments = () => {
  return (
    <div className="tournaments">
      <h3>EFOOTBALL CHAMPIONSHIPS PRO</h3>
      <div>
        <div className="links">
          <Link to="/table">Table</Link>
          <Link to="/fixtures">Fixtures</Link>
          <Link to="/register-league">Register League</Link>
          <Link to="/register-tournament">Register Tournament</Link>
          <Link to="/about">About</Link>
          <Link to="/calender">Calender</Link>
        </div>
        <div class="tournament-info">
          <h2>Tournament Details</h2>
          <p>
            The eFootball Tournament is an exciting event where players from
            around the world can compete against each other in virtual soccer
            matches. The tournament follows a competitive format with multiple
            rounds and eliminations.
          </p>
          <p>
            To participate in the tournament, players must register by visiting
            the{" "}
            <Link to="/register-league">Registration</Link>
            . Registration is open to all players, and it's a great opportunity
            to showcase your skills and compete against top talents.
          </p>
          <p>
            The winners of the tournament will receive a grand prize! The prize
            includes cash rewards, exclusive in-game items, and recognition as
            the champions of the eFootball Tournament.
          </p>
        </div>

        <div>
          <div className="image">
            <img src="/efootball.jpeg" alt="eFootball Championship" />
          </div>

          <div className="disclaimer">
            <h2> Disclaimer</h2>
            The eFootball™2023 Terms of Use will be in effect throughout the
            entire eFootball™ Championship Open tournament.
            <br />
            Any violation of the Terms of Use will result in disqualification
            from the tournament, regardless of the offending user's performance
            up to that point. Furthermore, offending users may have sanctions
            applied to their accounts in accordance with the Terms of Use.
            <br />
            Entries from both PlayStation®4 and PlayStation®5 will be considered
            as the "PlayStation® Category" (namely, there will not be any
            differentiation between them).
            <br />
            Entries from Xbox One, Xbox Series S and Xbox Series X will all be
            considered as the "Xbox Category" (namely, there will not be any
            differentiation between them).
            <br />
            Note that the area you join will be defined by the Country/Region
            you chose when you started playing the game. Furthermore, you will
            not be able to change your area later on.
            <br />
            You cannot change platforms or categories after the tournament has
            commenced. For example, if you decided to participate via your
            mobile device, you will be entering the tournament in the "Mobile
            Category" and cannot change to a PlayStation® in the middle of the
            tournament. Furthermore, remember that even if you entered the
            Console Category via Xbox or Steam®, you will have to switch to a
            PlayStation® device at the timing of the Online Finals stage.
            <br />
            The rewards you receive for completing the challenges during the
            eFootball™ Championship Open will be sent in-game. For more details
            on eFootball™ Points, see:
            https://www.konami.com/wepes/efootball_point/ The tournament is only
            available to players of the countries and regions in which the Game
            is officially available. Those who are outside such countries and
            regions may not participate.
            <br />
            To advance to Round 3 you must be able to use “Discord”, an online
            messaging application, for us to contact you either directly or
            through our service provider(s) undertaking the tournament
            management.
            <br /> On top of that, you will also need to have a KONAMI ID.
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
        </div>
      </div>
    </div>
  );
};
