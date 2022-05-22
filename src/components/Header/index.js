// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import './index.css'
import {HeaderContainer, HeaderImage, ListItem} from './styledComponents'

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <HeaderImage
        className="header-image"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="trigger-button"
            testid="hamburgerIconButton"
          >
            <GiHamburgerMenu />
          </button>
        }
        position="top center"
      >
        {close => (
          <>
            <button
              type="button"
              testid="closeButton"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>

            <ul className="list-item">
              <Link to="/" className="link-style" font-family="Roboto">
                <li className="list-style">
                  <AiFillHome className="image" />

                  <ListItem>Home</ListItem>
                </li>
              </Link>
              <Link to="/about" className="link-style">
                <li className="list-style">
                  <BsInfoCircleFill className="image" />
                  <ListItem>About</ListItem>
                </li>
              </Link>
            </ul>
          </>
        )}
      </Popup>
    </div>
  </HeaderContainer>
)

export default Header
