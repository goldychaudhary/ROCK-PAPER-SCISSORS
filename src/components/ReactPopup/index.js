import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import './index.css'

const ReactPopup = () => (
  <Popup
    modal
    trigger={
      <button className="rule-btn" type="button">
        RULES
      </button>
    }
    // position="right center"
    height="200px"
    width="200px"
  >
    {close => (
      <div className="modal-bg">
        <button type="button" className="close-button" onClick={() => close()}>
          <RiCloseLine />
        </button>
        <div>
          <img
            className="rules-pic"
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </div>
      </div>
    )}
  </Popup>
)

export default ReactPopup
