import React from "react";
import "./Counter.css";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">template4u</div>
        <ul className="nav-menu">
          <li className="active">Home</li>
          <li>Explore</li>
          <li>Create</li>
          <li>Share</li>
        </ul>
      </nav>

      <div className="hero-section">
        <div className="hero-left">
          <h1>
            Build social profiles and gain <br />
            revenue profits
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
            tempore iusto in minima facere dolorem!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
            tempore iusto in minima facere dolorem!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
            tempore iusto in minima facere dolorem!
          </p>
        </div>

        <div className="hero-right">
          <h2>Sign Up Today</h2>
          <p>Please fill out this form to register</p>
          <form>
            <input type="text" placeholder="username" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="password" />
            <button type="submit">submit</button>
          </form>
        </div>
      </div>

      <div className="explore-section">
        <div className="explore-header">
          <h1>explore</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            doloribus ut iure itaque quibusdam rem accusantium deserunt
            reprehenderit sunt minus.
          </p>
          <button className="findout-btn">findout</button>
        </div>

        <div className="explore-content">
          <img src="/image.png" alt="Phone Preview" className="explore-image" />
          <div className="explore-text">
            <h2>Explore &amp; Connect</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              reiciendis, voluptate at alias laborum odit aliquid tempore
              perspiciatis repudiandae hic?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              reiciendis, voluptate at alias laborum odit aliquid tempore
              perspiciatis repudiandae hic?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              reiciendis, voluptate at alias laborum odit aliquid tempore
              perspiciatis repudiandae hic?
            </p>
          </div>
        </div>
      </div>

      <div className="create-section">
        <div className="create-header">
          <h1>create</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            doloribus ut iure itaque quibusdam rem accusantium deserunt
            reprehenderit sunt minus.
          </p>
          <button className="findout-btn">findout</button>
        </div>

        <div className="create-content">
          <div className="create-text">
            <h2>create your passion</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              reiciendis, voluptate at alias laborum odit aliquid tempore
              perspiciatis repudiandae hic?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              reiciendis, voluptate at alias laborum odit aliquid tempore
              perspiciatis repudiandae hic?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              reiciendis, voluptate at alias laborum odit aliquid tempore
              perspiciatis repudiandae hic?
            </p>
          </div>
          <img src="/image3.png" alt="Tablet" className="create-image" />
        </div>
      </div>

      <div className="share-section">
        <div className="share-header">
          <h1 color="#333">share</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            doloribus ut iure itaque quibusdam rem accusantium deserunt
            reprehenderit sunt minus.
          </p>
          <button className="findout-btn">findout</button>
        </div>

        <div className="share-content">
          <img src="/image2.png" alt="Beach Sharing" className="share-image" />
          <div className="share-text">
            <h2>share what you create</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              reiciendis, voluptate at alias laborum odit aliquid tempore
              perspiciatis repudiandae hic?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              reiciendis, voluptate at alias laborum odit aliquid tempore
              perspiciatis repudiandae hic?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              reiciendis, voluptate at alias laborum odit aliquid tempore
              perspiciatis repudiandae hic?
            </p>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-content">
            <span className="footer-logo">template4u</span>
            <span className="footer-copy">Copyright ©️</span>
            <button className="footer-contact">Contact Us</button>
          </div>
        </footer>
      </div>
    </div>
  );
}
