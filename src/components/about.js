import "./css/about.css"
export const About = () => {
  return (
    <div className="about">
          <div className="platform">
              <h2>About this platform</h2>
            <p>This is an open platform for all efootball gamers and lovers. On this platform we just make it more interactive and enjoyful fr everyone. We held tournaments every week, either league or knockouts where chosen winners walk away with prices. Everyone is welcome. to register you click on the register league/tournment and follow the prompts. When you register you are included on the fixtures. Ensure you are available to play your games on time. The winner uploads the results, and the screenshot for further analysis.</p>
      </div>
      <div className="image"> <img src="/pic.jpg" alt="image"/></div>
          <div className="rules">
              <h2>Rules and Penalties</h2>
              <p>
                  <li>All games should be played on time, failure to that a win and 2 goals are awarded to the available opponent</li>
                  <li>False score inputs other than the score in the screenshot will lead to <span className="span">Discontinuation</span></li>
                  <li>Each game is 12 minutes, no extra time or penalties for league</li>
                  <li>For knockouts, penalties and extra time is allowed, after 12 minutes of game</li>
                  <li>Your <span className="span">UserName</span> and <span className="span">Team Name </span> should be similar for easier management</li>
              </p>
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
  );
};
