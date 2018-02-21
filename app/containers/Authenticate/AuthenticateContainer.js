import React, { PropTypes } from 'react'
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import { connect } from 'react-redux'
import * as userActionCreators from 'redux/modules/users'
console.log(userActionCreators)

class AuthenticateContainer extends React.Component{
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  }
  handleAuth () {
    // this.props.dispatch(userActionCreators.fetchingUser())
    auth().then((user) => {
      console.log('Authed User', user)
    })
  }
  render () {
    console.log('isFecthing',this.props.isFetching)
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth} />
    )
  }
}

function mapStateToProps (state) {
  return {
    isFetching : state.isFetching,
    error : state.error,
  }
}

export default connect(mapStateToProps)(AuthenticateContainer)
