import React, { useState } from 'react'
import './App.css'
import Home from './Home'
import Menu from './Menu'
import NewMenu from './NewMenu'
import Contact from './Contact'
export default function App() {
  const [currentpage, setcurrentpage] = useState('Home');
  function pagehandler(page) {
    setcurrentpage(page)
  }

  return (
    <div>
      <div className="header">
        <ul>
          <div className="image">
            <img src="/download (2).jpg" alt="" />
            <h3>DA Crust</h3>
          </div>
          <li onClick={() => pagehandler('Home')} >Home</li>
          <li onClick={() => pagehandler('Menu')} >Menu</li>
          <li onClick={() => pagehandler('Contact')} >Contact</li>
          <li onClick={() => pagehandler('NewMenu')} >Menus(New)</li>
        </ul>
      </div>


      {currentpage === 'Home' && <Home />}
      {currentpage === 'Menu' && <Menu />}
      {currentpage === 'NewMenu' && <NewMenu />}
      {currentpage === 'Contact' && <Contact />}

      {/* Your contact section content */}

      <div className="contact">
        <div className="contact_1">
          <h1>Contact Us</h1>
          <br />
          <h3>DROP US A LINE AND WE'LL GET BACK TO YOU</h3>
          <br />
          <div className="contact_name">
            <label htmlFor="">1:FirstName</label>
            <br />
            <input type="text" />
            <br />
            <div className="contact_name1">
              <label htmlFor="LastName">2:LastName</label>
              <br />
              <input type="text" />
            </div>
          </div>
          <br />
          <br />
          <div className="contact_name">
            <label htmlFor="">3:Email</label>
            <br />
            <input type="text" />
            <br />
            <div className="contact_name1">
              <label htmlFor="LastName">4:Subject</label>
              <br />
              <input type="text" />
            </div>
          </div>
          <br />
          <br />
          <div className="contact_name">
            <label htmlFor="">5:Leaving a Message</label>
            <br />
            <input type="text" />
            <br />
            <div className="contact_name1">
              <button>Submit</button>
            </div>
          </div>
        </div>
        <div className="contact_2">
          <div className="open">

            <h1>WE'RE OPEN</h1>
          </div>
          <br />
          <br />


          <h3>Monday_Friday : 11am - 10pm</h3>
          <h3>Saturday_Sunday : 11am - 12am</h3>
          <br />
          <br />
          <br />
          <h3>500 Mela gali Street <br /> Bahawalpur, CA 95158</h3>
          <br />
          <br />
          <br />
          <h3>Tel: 123-456-7890</h3>
          <h3>Email: info@mysite.com</h3>
          <br />
          <br />
          <br />
          <a href="https://www.facebook.com/" target='blank'  > <img src="fb.jpeg" alt="" /> </a>
          <a href="https://www.instagram.com/" target='blank' >  <img src="insta.png" alt="" /> </a>
          <a href="https://twitter.com/" target='blank' > <img src="x.png" alt="" /> </a>
          <a href="https://www.linkedin.com/" target='blank' > <img src="linkedin.png" alt="" /> </a>
        </div>
      </div>
      <br />
      <br />

      {/* footer */}
      <div className="footer">
        <h1>© 2035 by Da Crust. Powered and secured by Wix</h1>
      </div>
    </div>
  )
}
