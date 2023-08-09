import React, { useEffect, useState } from "react";
import "./Home.css";
import logo from "../../assets/babel.png";
import SwiperComponent from "../../Components/Swiper/Swiper";
import CardComponent from "../../Components/Card/Card";
import axios from "axios";
import news4 from "../../assets/news4.png";
import AccordionComponent from "../../Components/Accordion/Accordion";
import CustomizedAccordions from "../../Components/Accordion/Accordion";
import Footer from "../../Components/Footer/Footer";
import Login from "../../Components/LoginDialog/Login";
import { toast } from "react-toastify";
const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // Track user login status
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [token]);

  const logoutURL = process.env.REACT_APP_URL + "/auth/logout";
  const notify = () => toast.success("Logged out successfully");

  const handleLogout = async () => {
    try {
      await axios.post(logoutURL,null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("token");
      setLoggedIn(false);
      notify();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // let token = localStorage.getItem("token");
  // let  buttonName = token ? 'تسجيل الخروج':'تسجيل الدخول'

  const categoriesURL = process.env.REACT_APP_URL + "/categories";

  const fetchCategories = async () => {
    try {
      const res = await axios.get(categoriesURL);
      setCategories(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleMenu = () => {
    setIsMobile((prevState) => !prevState);
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="home_topContainer">
        <div className="home_container">
          <header
            style={isMobile ? { marginTop: "12rem" } : { marginTop: "0rem" }}
            className="home_header"
          >
            <div className="button_container">
              {loggedIn ? (
                <button onClick={handleLogout} className="login_button ">
                  تسجيل الخروج
                </button>
              ) : (
                <button onClick={handleOpenDialog} className="login_button ">
                  تسجيل الدخول
                </button>
              )}
            </div>

            <div className="logo_container">
              <img className="logo_image" src={logo} alt="logo" />
            </div>

            <button className="mobile-menu-icon" onClick={handleMenu}>
              {isMobile ? (
                <i className="fa-solid fa-times "></i>
              ) : (
                <i className="fa-solid fa-bars "></i>
              )}
            </button>
          </header>

          <div className="swiper">
            <SwiperComponent  />
          </div>

          <div
            className={isMobile ? "menu_container_mobile" : "menu_container"}
          >
            <ul>
              <li>
                <a href="">اقتصاد</a>
              </li>
              <li>
                <a href="">رياضة</a>
              </li>
              <li>
                <a href="">فيديو وصور</a>
              </li>
              <li>
                <a href="">اراء</a>
              </li>
              <li>
                <a href="">أخبار</a>
              </li>
              <li>
              {loggedIn ? (
                <button onClick={handleLogout} className={isMobile?"logbtn":"logbtn2"}>
                  تسجيل الخروج
                </button>
              ) : (
                <button onClick={handleOpenDialog} className={isMobile?"logbtn":"logbtn2"}>
                  تسجيل الدخول
                </button>
              )}
              </li>
            </ul>
          </div>

          <div className="card-container">
            <div className="card-wrapper1">
              {categories.map(
                (category, index) =>
                  index < 2 && (
                    <CardComponent
                      key={category.id}
                      name={category.name}
                      pic={category.pic}
                      category_id={category.id}
                    />
                  )
              )}
            </div>

            <div className="card-wrapper2">
              {categories.map(
                (category, index) =>
                  index >= 2 &&
                  index < 4 && (
                    <CardComponent
                      key={category.id}
                      name={category.name}
                      pic={category.pic}
                      category_id={category.id}
                    />
                  )
              )}
            </div>

            <div className="card-wrapper3">
              {categories.length !== 0 && (
                <CardComponent
                  name={categories[4].name}
                  pic={categories[4].pic}
                  className="last-card"
                  category_id={categories[4].id}

                />
              )}
            </div>
          </div>

          <div className="home_most_read">
            <div className="home_most_read_left">
              <h3>الأكثر قراءة</h3>
              <div className="home_accordion">
                <CustomizedAccordions />
              </div>
            </div>

            <div className="home_most_read_right">
              <img src={news4} alt="news img" />
            </div>
          </div>
          <Footer />
        </div>
        <Login open={open} onClose={onClose} />
      </div>
    </>
  );
};

export default Home;
