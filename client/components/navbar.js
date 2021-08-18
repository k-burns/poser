import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <h1 className='title'>Pose Creator</h1>
    <nav>
      {isLoggedIn ? (
        // navbar if logged in
        <div className='nav-container'>
          <div className='nav-left'>
            <Link to='/create'>Create a Pose</Link>
          </div>
          <div className='nav-right'>
            <Link to='/gallery'>Gallery</Link>
            <a href='#' onClick={handleClick}>
              Logout
            </a>
          </div>
        </div>
      ) : (
        // navbar if logged out
        <div className='nav-container'>
          <div className='nav-left'>
            <Link to='/creat'>Create a Pose</Link>
          </div>
          <div className='nav-right'>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Login</Link>
          </div>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

const mapState = (state) => {
  return {
    //change state.user.id to boolean
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    },
  }
}

export default connect(mapState, mapDispatch)(Navbar)
