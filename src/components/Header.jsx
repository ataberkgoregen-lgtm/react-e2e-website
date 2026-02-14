import { useState } from "react";

import Pizzaform from "./Pizzaform";

import "/src/App.css";
import logo from "/src/assets/iteration-1/logo.svg";

export default function Header(props) {
  const { changePage } = props;

  function clickHandler(event) {
    const { name, value } = event.target;
    changePage("pizzaform");
  }

  return (
    <body>
      <header>
        <div className="elements">
          <img src={logo} alt="" />

          <div className="letter">
            <p className="fonetik">fırsatı kaçırma</p>
            <h2>KOD ACIKTIRIR</h2>
            <h2>PIZZA, DOYURUR</h2>
          </div>
          <button className="btn-header bg-red-500" onClick={clickHandler}>
            ACIKTIM
          </button>
        </div>
      </header>

      <section className="main-section">
        <div className="icons">
          <ul className="icon-list">
            <li className="icon-list-item">
              <img src="/images/iteration-2-images/icons/1.svg" alt="" />
              <p>YENİ! Kore</p>
            </li>
            <li className="icon-list-item">
              <img src="/images/iteration-2-images/icons/2.svg" alt="" />
              <p>Pizza</p>
            </li>
            <li className="icon-list-item">
              <img src="/images/iteration-2-images/icons/3.svg" alt="" />
              <p>Burger</p>
            </li>
            <li className="icon-list-item">
              <img src="/images/iteration-2-images/icons/4.svg" alt="" />
              <p>Kızartmalar</p>
            </li>
            <li className="icon-list-item">
              <img src="/images/iteration-2-images/icons/5.svg" alt="" />
              <p>Fast food</p>
            </li>
            <li className="icon-list-item">
              <img src="/images/iteration-2-images/icons/6.svg" alt="" />
              <p>Gazlı İçecek</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="box-model">
        <div className="three-box">
          <div className="box-1">
            <div className="write">
              <h3>
                Özel <br />
                Lezzetus
              </h3>
              <p>Position:Absolute Acı Burger</p>
              <button className="box-btn">SİPARİŞ VER</button>
            </div>
          </div>

          <div className="two-box">
            <div className="boxer-1">
              <div className="write">
                <h3>
                  Hackathlon <br />
                  Burder Menü
                </h3>
                <button className="boxer-btn">SİPARİŞ VER</button>
              </div>
            </div>
            <div className="boxer-2">
              <div className="write">
                <h3>
                  <span style={{ color: "red" }}>Çooook </span>Hızlı <br />
                  npm gibi kurye
                </h3>
                <button className="boxer-btn">SİPARİŞ VER</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text">
        <p>en çok paketlenen menüler</p>
        <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
      </section>

      <section className="items">
        <div className="item-icons">
          <ul className="item-icon-list">
            <li className="icon-list-element">
              <img src="/images/iteration-2-images/icons/1.svg" alt="" />
              <p>Ramen</p>
            </li>
            <li className="icon-list-element active">
              <img src="/images/iteration-2-images/icons/2.svg" alt="" />
              <p>Pizza</p>
            </li>
            <li className="icon-list-element">
              <img src="/images/iteration-2-images/icons/3.svg" alt="" />
              <p>Burger</p>
            </li>
            <li className="icon-list-element">
              <img src="/images/iteration-2-images/icons/4.svg" alt="" />
              <p>French fries</p>
            </li>
            <li className="icon-list-element">
              <img src="/images/iteration-2-images/icons/5.svg" alt="" />
              <p>Fast food</p>
            </li>
            <li className="icon-list-element">
              <img src="/images/iteration-2-images/icons/6.svg" alt="" />
              <p>Soft drinks</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="pizzalar">
        <div className="box">
          <img src="/images/iteration-2-images/pictures/food-1.png" alt="" />
          <div className="h-seperate">
            <h3>Terminal Pizza</h3>
            <div className="size">
              <p>4.9</p>
              <div className="price">
                <p>(200)</p>
                <p style={{ fontWeight: "bold" }}>60₺</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <img src="/images/iteration-2-images/pictures/food-2.png" alt="" />
          <div className="h-seperate">
            <h3>Position Absolute Acı Pizza</h3>
            <div className="size">
              <p>4.9</p>
              <div className="price">
                <p>(200)</p>
                <p style={{ fontWeight: "bold" }}>60₺</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <img src="/images/iteration-2-images/pictures/food-3.png" alt="" />
          <div className="h-seperate">
            <h3>useEffect Tavuklu Burger</h3>
            <div className="size">
              <p>4.9</p>
              <div className="price">
                <p>(200)</p>
                <p style={{ fontWeight: "bold" }}>60₺</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="foot">
          <div className="iletisim">
            <ul className="iletisim-bilgileri">
              <img
                src="/images/iteration-2-images/footer/logo-footer.svg"
                alt=""
              />
              <li>
                <img
                  src="/images/iteration-2-images/footer/icons/icon-1.png"
                  alt=""
                />
                341 Londonderry Road, <br />
                Istanbul Türkiye
              </li>
              <li>
                <img
                  src="/images/iteration-2-images/footer/icons/icon-2.png"
                  alt=""
                />
                aciktim@teknolojikyemekler.com
              </li>
              <li>
                <img
                  src="/images/iteration-2-images/footer/icons/icon-3.png"
                  alt=""
                />
                +90 216 123 45 67
              </li>
            </ul>
          </div>
          <div className="sonunda">
            <div className="menu">
              <h3>Hot Menu</h3>
              <ul>
                <li>Terminal Pizza</li>
                <li>5 kişilik Hackathlon Pizza</li>
                <li>useEffect Tavuklu Pizza</li>
                <li>Beyaz Console Frosty</li>
                <li>Testler Geçti Mutlu Burger</li>
                <li>Position Absolute Acı Burger</li>
              </ul>
            </div>
            <div className="instagram">
              <h3>Instagram</h3>
              <div className="img-par">
                <img
                  src="/images/iteration-2-images/footer/insta/li-0.png"
                  alt=""
                />
                <img
                  src="/images/iteration-2-images/footer/insta/li-1.png"
                  alt=""
                />

                <img
                  src="/images/iteration-2-images/footer/insta/li-2.png"
                  alt=""
                />

                <img
                  src="/images/iteration-2-images/footer/insta/li-3.png"
                  alt=""
                />

                <img
                  src="/images/iteration-2-images/footer/insta/li-4.png"
                  alt=""
                />

                <img
                  src="/images/iteration-2-images/footer/insta/li-5.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <p>© 2023 Teknolojik Yemekler.</p>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </footer>
    </body>
  );
}
