import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import { Login, Signup, UserHome, SavedPose, Info } from './components'
import { me } from './store'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn } = this.props
    return (
      <Switch>
        {/* loads if logged out */}
        {/* <Route path='/create' component={PoseLoader} /> */}
        {/* <Route path='/info' component={Info} /> */}
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        {isLoggedIn && (
          <Switch>
            {/* loads if logged in */}
            <Route path='/home' component={UserHome} />
            <Route path='/savedPoses' component={SavedPose} />
          </Switch>
        )}
        <Route component={Login} />
      </Switch>
    )
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me())
    },
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))
