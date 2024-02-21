import {Component} from 'react'
import './index.css'

// (
//
//               )

class PasswordItem extends Component {
  render() {
    const {passwordDetails, deletePassword} = this.props
    const {id, website, username, password, showPassword} = passwordDetails
    const initial = website ? website[0].toUpperCase() : ''

    const onDeletePassword = () => {
      deletePassword(id)
    }

    return (
      <li>
        <div>
          <div>
            <p className="initial">{initial}</p>
          </div>
          <div>
            <p>{website}</p>
            <p>{username}</p>
            <p>
              {showPassword ? (
                password
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                  alt="stars"
                />
              )}
            </p>
          </div>
        </div>
        <div className="buttons-container">
          <button
            className="button"
            type="button"
            onClick={onDeletePassword}
            data-testid="delete"
          >
            <img
              className="delete"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default PasswordItem
