import React from 'react'
import { PropTypes } from 'prop-types'
import { Navigation } from 'components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { container, innerContainer } from './styles.css'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'
import * as usersLikesActionCreators from 'redux/modules/usersLikes'
import { formatUserInfo } from 'helpers/utils'
import { firebaseAuth } from 'config/constants'

class MainContainer extends React.Component {
  propTypes: {
    isAuthed: PropTypes.bool.isRequired,
    authUser: PropTypes.func.isRequired,
    removeFetchingUser: PropTypes.func.isRequired,
    fetchingUserSuccess: PropTypes.func.isRequired,
    setUsersLikes: PropTypes.func.isRequired,
  }
  contextTypes : {
    router: PropTypes.object.isRequired,
  }
  componentDidMount () {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        const userData = user.providerData[0]
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid)
        this.props.authUser(user.uid)
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now())
        this.props.setUsersLikes()
        if(this.props.location.pathname === '/'){
          this.context.router.history.replace('feed')
        }
      } else {
        this.props.removeFetchingUser()
      }
    })
  }
  render () {
    return this.props.isFetching === true
    ? null
    : <div className={container}>
        <Navigation isAuthed={this.props.isAuthed}/>
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
  }
}

export default withRouter(connect(
  ({ users }) => ({isAuthed: users.isAuthed, isFetching: users.isFetching}),
  (dispatch) => bindActionCreators({
    ...userActionCreators,
    ...usersLikesActionCreators
  }, dispatch)
)(MainContainer))
