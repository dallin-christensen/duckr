import React from 'react'
import { bindActionCreators } from 'redux'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Duck } from 'components'
import * as usersLikesActions from 'redux/modules/usersLikes'

const { func, object, bool, number } = PropTypes

class DuckContainer extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.goToProfile = this.goToProfile.bind(this)
  }

  goToProfile (e) {
    e.stopPropagation()
    this.context.router.history.push('/' + this.props.duck.uid)
  }

  handleClick (e) {
    e.stopPropagation()
    this.context.router.history.push('/duckDetail/' + this.props.duck.duckId)
  }

  render () {
    return (
      <Duck
        goToProfile={this.goToProfile}
        onClick={this.props.hideReplyBtn ? null : this.handleClick}
        {...this.props}/>
    )
  }
}

DuckContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

DuckContainer.propTypes = {
  duck: PropTypes.object.isRequired,
  numberOfLikes: PropTypes.number,
  isLiked: PropTypes.bool.isRequired,
  hideLikeCount: PropTypes.bool.isRequired,
  hideReplyBtn: PropTypes.bool.isRequired,
  handleDeleteLike: PropTypes.func.isRequired,
  addAndHandleLike: PropTypes.func.isRequired
}

DuckContainer.defaultProps = {
  hideReplyBtn: false,
  hideLikeCount: true
}

function mapStateToProps ({ducks, likeCount, usersLikes}, props) {
  return {
    duck: ducks[props.duckId],
    hideLikeCount: props.hideLikeCount,
    hideReplyBtn: props.hideReplyBtn,
    isLiked: usersLikes[props.duckId] === true,
    numberOfLikes: likeCount[props.duckId],
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(usersLikesActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DuckContainer)
