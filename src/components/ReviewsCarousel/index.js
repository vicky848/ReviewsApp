import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewId: 0,
  }

  getReview = reviewsList => {
    const {activeReviewId} = this.state

    const {imgUrl, username, companyName, description} = reviewsList[
      activeReviewId
    ]

    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onClickLeft = () => {
    const {activeReviewId} = this.state
    if (activeReviewId > 0) {
      this.setState(prevState => ({
        activeReviewId: prevState.activeReviewId - 1,
      }))
    }
  }

  onClickRight = () => {
    const {reviewsList} = this.props
    const {activeReviewId} = this.state

    if (activeReviewId < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewId: prevState.activeReviewId + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props

    return (
      <div className="app-container">
        <button
          type="button"
          data-testid="leftArrow"
          className="button"
          onClick={this.onClickLeft}
        >
          <img
            className="arrow"
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        {this.getReview(reviewsList)}

        <button
          data-testid="rightArrow"
          className="button"
          type="button"
          onClick={this.onClickRight}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
