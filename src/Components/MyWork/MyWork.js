import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import mywork_date from '../../assets/mywork_data';
import arrow_icon from "../../assets/arrow_icon.svg";
// import redstor from './redstore.PNG';
import ecommerce from "./ecommerce.PNG";
import hospital from "./Hospital.PNG";
import education from "./educational.PNG";
import travel from "./traval.PNG";
import yoga from "./yoga.PNG";
import gamehub from "../../assets/gamehub.PNG";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {/* {mywork_date.map((work, index)=>{
                return <img key={index} src={work.w_img} alt='' />
            })} */}
        <a
          href="https://game-hub-sage-omega-96.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={gamehub} alt="" />
        </a>
        <a
          href="https://shert-shop.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={ecommerce} alt="" />
        </a>
        <a
          href="https://micohospital.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={hospital} alt="" />
        </a>
        <a
          href="https://yoga-omar.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={yoga} alt="" />
        </a>
        <a
          href="https://travel-omar.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={travel} alt="" />
        </a>
        <a
          href="https://education-omar.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={education} alt="" />
        </a>
      </div>

      <a href="https://github.com/Omar-samim" rel="noreferrer" target="_blank">
        <div className="mywork-showmore">
          <p>See More on github</p>
          <img src={arrow_icon} alt="" />
        </div>
      </a>
    </div>
  );
};

export default MyWork;
