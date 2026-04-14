import HeaderImg from "./assets/header_img.png";
import search from "./assets/search_icon.png";
import hero from "./assets/hero_img.png";
import menu from "./assets/menu.png";
import date from "./assets/date.png";
import _date from "./assets/_date.png";
import headerTitle from "./assets/header-title.png";

import brand01 from "./assets/brand01.png";
import brand02 from "./assets/brand02.png";
import brand03 from "./assets/brand03.png";

import ragul from "./assets/ragul.png";
import ragulText from "./assets/ragul_text.png";

import latestLeft01 from "./assets/latest_left_01.png";
import latestLeft02 from "./assets/latest_left_02.png";
import latestLeft03 from "./assets/latest_left_03.png";

import red from "./assets/red.png";

import latestRight01 from "./assets/latest_right_01.png";
import latestRight02 from "./assets/latest_right_02.png";

import web from "./assets/web.png";
import web_left from "./assets/web_left.png";
import web_right from "./assets/web_right.png";

import web01 from "./assets/web01.png";
import web02 from "./assets/web02.png";
import web03 from "./assets/web03.png";
import web04 from "./assets/web04.png";
import web05 from "./assets/web05.png";

function App() {
  return (
    <>
      <div className="headerimg-ctn">
        <img src={HeaderImg} />
      </div>
      {/*  */}
      <div className="header">
        <div className="search_ctn">
          <img src={search} />
          <input type="text" placeholder="Search here ..." />
        </div>
        <img src={hero} />
        <div className="hero-btn">
          <button className="btn1">SUBSCRIBE</button>
          <button className="btn2">SIGN IN</button>
        </div>
      </div>
      <div className="header header01">
        <div className="search_ctn">
          <img src={menu} />
        </div>
        <nav>
          <li>Home</li>
          <li>Categories</li>
          <li>IR Prime</li>
          <li>Events</li>
          <li>Bookstore</li>
          <li>Newsletter</li>
          <li>Video</li>
        </nav>

        <div className="header">
          <img src={date} />
          <img src={_date} />
        </div>
      </div>
      <div className="header-title">
        <img src={headerTitle} />
      </div>

      <div className="brand">
        <div className="brand-card">
          <img src={brand01} />
          <div>
            <h5>HOTSPOTS</h5>
            <p>Luxury hotspots: 5 most expensive high streets in the..</p>
          </div>
        </div>
        <div className="brand-card">
          <img src={brand02} />
          <div>
            <h5>AI</h5>
            <p>5 ways to leverage the power of ChatGPT in retail</p>
          </div>
        </div>
        <div className="brand-card">
          <img src={brand03} />
          <div>
            <h5>SHIPPING</h5>
            <p>Reliance to open 250 Azorte stores in 2-3 years</p>
          </div>
        </div>
      </div>

      {/*  */}
      <>
        <div className="latest_news">
          <div className="latest_left">
            <div className="ragul">
              <img src={ragul} />
              <img src={ragulText} className="ragul-text" />
            </div>
            <img src={latestLeft01} className="left-news" />
            <hr />
            <img src={latestLeft02} className="left-news" />
            <hr />
            <img src={latestLeft03} className="left-news" />
          </div>
          <div className="latest-right right">
            <h3>Latest News</h3>
            <div className="red">
              <img src={red} />
            </div>

            <img src={latestRight01} />
            <h2 className="right-text">
              Unwrapping the Archies’ reinvention plan
            </h2>
            <img src={latestRight02} />
            <h2 className="right-text">
              How AI is enhancing stores, How AI is enhancing stores
            </h2>
            <hr />
            <p style={{ fontSize: "15px" }}>
              Croma opens 58 outlets in 6, Croma retails more than 16,000
            </p>
            <p style={{ opacity: ".5", fontSize: "13px" }}>
              These companies created a lot of hype when they listed on the...
            </p>
            <hr />
            <p style={{ fontSize: "15px" }}>
              Select Citywalk opens 4 new stores in June
            </p>
            <p style={{ opacity: ".5", fontSize: "13px" }}>
              These companies created a lot of hype when they listed on the...
            </p>
          </div>
        </div>
      </>
      <hr />
      <img src={web} style={{ marginBlock: "1rem" }} />
      <div className="web">
        <img src={web_left} />
        <img src={web_right} />
      </div>
      <div className="web-ctn">
        <div className="web-card">
          <img src={web01} />
          <p>Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
        </div>
        <div className="web-card">
          <img src={web02} />
          <p>Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
        </div>
        <div className="web-card">
          <img src={web03} />
          <p>Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
        </div>
        <div className="web-card">
          <img src={web04} />
          <p>Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
        </div>
        <div className="web-card">
          <img src={web05} />
          <p>Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
        </div>
      </div>
    </>
  );
}

export default App;
