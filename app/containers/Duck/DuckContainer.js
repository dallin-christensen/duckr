import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Duck } from 'components'

const { func, object, bool, number } = PropTypes
console.log('proptypes', PropTypes)
class DuckContainer extends React.Component {
  propTypes: {
    duck: object.isRequired,
    handleClick: func,
    hideLikeCount: PropTypes.bool.isRequired,
    hideReplyBtn: PropTypes.bool.isRequired,
    isLiked: PropTypes.bool.isRequired,
    numberOfLikes: number,
    addAndHandleLike: func.isRequired,
    handleDeleteLike: func.isRequired,
  }
  contextTypes: {
    router: PropTypes.object.isRequired,
  }
  getDefaultProps () {
    return {
      hideReplyBtn: false,
      hideLikeCount: false
    }
  }
  goToProfile = (e) => {
    e.stopPropagation()
    this.context.router.push('/' + this.props.duck.uid)
  }
  handleClick = () => {
    e.stopPropagation()
    this.context.router.push('/duckDetail/' + this.props.duck.duckId)
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

function mapStateToProps ({ducks, likeCount, usersLikes}, props) {
  return {
    duck: ducks[props.duckId],
    hideLikeCount: props.hideLikeCount,
    hideReplyBtn: props.hideReplyBtn,
    isLiked: usersLikes[props.duckId] === true,
    numberOfLikes: likeCount[props.duckId],
  }
}

export default connect(
  mapStateToProps,
)(DuckContainer)
