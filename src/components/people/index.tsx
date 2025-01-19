import React from "react";
import Sectiontitle from "../section-title";
import bride1 from "../../images/groomsmen-bridesmaid/1.jpg";
import bride2 from "../../images/groomsmen-bridesmaid/lorena.jpg";
import bride3 from "../../images/groomsmen-bridesmaid/maleja.jpg";
import bride4 from "../../images/groomsmen-bridesmaid/4.jpg";
import bride5 from "../../images/groomsmen-bridesmaid/5.jpg";
import bride6 from "../../images/groomsmen-bridesmaid/6.jpg";
import bride7 from "../../images/groomsmen-bridesmaid/7.jpg";
import bride8 from "../../images/groomsmen-bridesmaid/8.jpg";

import "./style.css";

const un_mensaje = "Damas de honor y padrinos";

const People = () => {
  return (
    <section id="people">
      <div className="groomsmen-bridesmaid-area section-padding">
        <Sectiontitle mensaje={un_mensaje} />
        <div className="container">
          <div className="groomsmen-bridesmaid-area-menu">
            <div className="Groomsman-wrap">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 grid">
                  <div className="groomsmen-bridesmaid-wrap">
                    <div className="groomsmen-bridesmaid-img">
                      <img src={bride1} alt="bride" />
                    </div>
                    <div className="groomsmen-bridesmaid-content">
                      <h4>Tania Ortiz</h4>
                      <span>Madrina</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 grid">
                  <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2">
                    <div className="groomsmen-bridesmaid-img">
                      <img src={bride2} alt="bride" />
                    </div>
                    <div className="groomsmen-bridesmaid-content">
                      <h4>Lorena Rodriguez</h4>
                      <span>Dama de honor</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 grid">
                  <div className="groomsmen-bridesmaid-wrap">
                    <div className="groomsmen-bridesmaid-img">
                      <img src={bride3} alt="bride" />
                    </div>
                    <div className="groomsmen-bridesmaid-content">
                      <h4>Maria Alejandra Alfonso</h4>
                      <span>Dama de honor</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 grid">
                  <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2">
                    <div className="groomsmen-bridesmaid-img">
                      <img src={bride4} alt="bride" />
                    </div>
                    <div className="groomsmen-bridesmaid-content">
                      <h4>Alejandra aja </h4>
                      <span>DAma de honor</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 grid">
                  <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2">
                    <div className="groomsmen-bridesmaid-img">
                      <img src={bride5} alt="bride" />
                    </div>
                    <div className="groomsmen-bridesmaid-content">
                      <h4>Criys stone</h4>
                      <span>Made Of Honor</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 grid">
                  <div className="groomsmen-bridesmaid-wrap">
                    <div className="groomsmen-bridesmaid-img">
                      <img src={bride6} alt="bride" />
                    </div>
                    <div className="groomsmen-bridesmaid-content">
                      <h4>Watson Lyn</h4>
                      <span>best-friend</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 grid">
                  <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2">
                    <div className="groomsmen-bridesmaid-img">
                      <img src={bride7} alt="bride" />
                    </div>
                    <div className="groomsmen-bridesmaid-content">
                      <h4>Chris Fletcher</h4>
                      <span>Friend</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 grid">
                  <div className="groomsmen-bridesmaid-wrap mb-0">
                    <div className="groomsmen-bridesmaid-img">
                      <img src={bride8} alt="bride" />
                    </div>
                    <div className="groomsmen-bridesmaid-content">
                      <h4>John Clyne</h4>
                      <span>Friend</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
