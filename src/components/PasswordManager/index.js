import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    searchInput: '',
    showPasswordStatus: false,
    count: 0,
  }

  deletePassword = id => {
    const {passwordList} = this.state

    this.setState({
      passwordList: passwordList.filter(password => password.id !== id),
    })
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({
      showPasswordStatus: !prevState.showPasswordStatus,
    }))
  }

  onAddPassword = event => {
    event.preventDefault()
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      showPasswordStatus,
    } = this.state

    const newPassword = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
      showPassword: showPasswordStatus,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
      count: prevState.count + 1,
    }))
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      passwordList,
      searchInput,
      showPasswordStatus,
      count,
    } = this.state

    const searchResults = passwordList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="imageSmall"
        />
        <div>
          <div>
            <form onSubmit={this.onAddPassword}>
              <h1>Add New Password</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.onChangeWebsiteInput}
                value={websiteInput}
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                type="text"
                placeholder="Enter Username"
                onChange={this.onChangeUsernameInput}
                value={usernameInput}
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.onChangePasswordInput}
                value={passwordInput}
              />
              <button type="submit">Add</button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="imageSmall"
            />
          </div>
        </div>
        <div>
          <h1>Your Passwords</h1>
          <p>{count > 0 ? passwordList.length : count}</p>

          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
          />
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="showPassword"
            value="showPassword"
            onChange={this.onChangeShowPassword}
          />
          <label htmlFor="showPassword">Show passwords</label>
        </div>
        <ul>
          {searchResults.length > 0 ? (
            searchResults.map(each => (
              <PasswordItem
                key={each.id}
                passwordDetails={each}
                deletePassword={this.deletePassword}
                showPasswordStatus={showPasswordStatus}
              />
            ))
          ) : (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="imageSmall"
              />
              <p>No Passwords</p>
            </div>
          )}
        </ul>
      </div>
    )
  }
}

export default PasswordManager
