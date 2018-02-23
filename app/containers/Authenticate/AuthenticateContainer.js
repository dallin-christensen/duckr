import React from 'react'
import { PropTypes } from 'prop-types'
import { Authenticate } from 'components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'


class AuthenticateContainer extends React.Component{
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    fetchAndHandleAuthedUser: PropTypes.func.isRequired,
  }
  contextTypes: {
    // router: PropTypes.object.isRequired,
    router: React.PropTypes.func.isRequired,
  }
  handleAuth = (e) => {
    e.preventDefault()
    this.props.fetchAndHandleAuthedUser()
      .then(() => {
        this.props.history.replace('feed')
      })
  }
  render () {
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
    isFetching : state.users.isFetching,
    error : state.users.error,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( userActionCreators, dispatch)
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticateContainer))
