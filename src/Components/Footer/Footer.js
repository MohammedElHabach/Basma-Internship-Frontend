import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="home_footer_container">
      <div className="footer_sec1">
        <h3>لوريم إيبسوم</h3>
        <ul>
          <li>
            <a href="">لوريم إيبسوم هو</a>
          </li>
          <li>
            <a href="">لوريم إيبسوم هو</a>
          </li>
          <li>
            <a href="">لوريم إيبسوم هو</a>
          </li>
        </ul>
      </div>

      <div className="footer_sec2">
        <h3>لوريم إيبسوم</h3>
        <ul>
          <li>
            <a href="">لوريم إيبسوم هو</a>
          </li>
          <li>
            <a href="">لوريم إيبسوم هو</a>
          </li>
          <li>
            <a href="">لوريم إيبسوم هو</a>
          </li>
        </ul>
      </div>

      <div className="footer_sec3">
        <h3>لوريم إيبسوم</h3>
        <ul>
          <li>
            <a href="">لوريم إيبسوم هو</a>
          </li>
          <li>
            <a href="">لوريم إيبسوم هو</a>
          </li>
          <li>
            <a href="">لوريم إيبسوم هو</a>
          </li>
        </ul>
      </div>

      <div className="footer-right-container">
        <h3>مشاهدة على تويتر</h3>
        <div className="newsletter-icons">
          <form className="newsletter">
            <input type="email" />
            <button className="submit_newsletter" type="submit">
              الاشتراك{" "}
            </button>
          </form>
          <div className="social-menu">
            <ul>
              <li>
                <a>
                  <i className="fa-brands fa fa-facebook-f"></i>
                </a>
              </li>

              <li>
                <a>
                  <i className="fa-brands fa fa-twitter"></i>
                </a>
              </li>

              <li>
                <a>
                  <i className="fa-brands fa fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
