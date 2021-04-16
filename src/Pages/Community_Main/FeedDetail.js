import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profileImgs from './profileImgs';
import './FeedDetail.scss';

import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { IoHeart } from 'react-icons/io5';

export default class FeedDetail extends Component {
  state = {
    isHoverOnImage: false,
    slideMove: 0,
    feedData: '',
    imgNum: Math.floor(Math.random() * 3 + 1),
  };

  getData = () => {
    // fetch(`http://10.58.2.215:8000/feed/${this.props.feedId}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.setState({
    //       feedData: data,
    //     });
    //   });
    fetch('/data/mockFeedData.json')
      .then((res) => res.json())
      .then((data) => this.setState({ feedData: data }));
  };

  componentDidMount() {
    this.getData();

    this.setState({
      slideMove: 0,
    });
  }

  hoverImageOn = () => {
    this.setState({
      isHoverOnImage: true,
    });
  };

  hoverImageOff = () => {
    this.setState({
      isHoverOnImage: false,
    });
  };

  handlePresentImage = (e) => {
    this.setState({
      slideMove: e.target.dataset.id * -100,
    });
  };

  prevImage = () => {
    if (this.state.slideMove < 0) {
      this.setState({
        slideMove: this.state.slideMove + 100,
      });
    } else {
      this.setState({
        slideMove: 0,
      });
    }
  };

  nextImage = () => {
    if (
      this.state.slideMove >
      -(this.state.feedData.feed_image_data.length - 1) * 100
    ) {
      this.setState({
        slideMove: this.state.slideMove - 100,
      });
    } else {
      this.setState({
        slideMove: -(this.state.feedData.feed_image_data.length - 1) * 100,
      });
    }
  };

  render() {
    const { feedData, slideMove, isHoverOnImage } = this.state;

    return (
      <div className="FeedDetail">
        <div className="leftContainer">
          <section className="carousel">
            <div className="topSection">
              {feedData.feedImages &&
                feedData.feedImages.map((image, index) => {
                  console.log(image[index]);
                  return (
                    <img
                      src={image[index]}
                      className="presentImg"
                      alt="presentImg"
                      style={{
                        transform: `translateX(${slideMove}%)`,
                      }}
                      onMouseEnter={this.hoverImageOn}
                      onMouseLeave={this.hoverImageOff}
                    />
                  );
                })}

              {/* {feedData.feed_image_data &&
                feedData.feed_image_data.map((image) => {
                  return (
                    <img
                      src={image.url}
                      className="presentImg"
                      alt="presentImg"
                      style={{
                        transform: `translateX(${slideMove}%)`,
                      }}
                      onMouseEnter={this.hoverImageOn}
                      onMouseLeave={this.hoverImageOff}
                    />
                  );
                })} */}

              <IoArrowBackCircleOutline
                className={
                  'arrow arrow-left' + (isHoverOnImage && ' hoverOnImage')
                }
                onMouseEnter={this.hoverImageOn}
                onClick={this.prevImage}
              />
              <IoArrowForwardCircleOutline
                className={
                  'arrow arrow-right' + (isHoverOnImage && ' hoverOnImage')
                }
                onMouseEnter={this.hoverImageOn}
                onClick={this.nextImage}
              />

              {/* <img
                className={
                  'arrow arrow-left' + (isHoverOnImage && ' hoverOnImage')
                }
                src="https://www.flaticon.com/svg/vstatic/svg/570/570220.svg?token=exp=1613828052~hmac=35c0c1dd0f7c208b276be6606331f1fa"
                alt="leftArrow"
                onMouseEnter={this.hoverImageOn}
                onClick={this.prevImage}
              /> */}
              {/* <img
                className={
                  'arrow arrow-right' + (isHoverOnImage && ' hoverOnImage')
                }
                src="https://www.flaticon.com/svg/vstatic/svg/467/467152.svg?token=exp=1613828027~hmac=aff396c8c4913f626e820244943aa723"
                alt="rightArrow"
                onMouseEnter={this.hoverImageOn}
                onClick={this.nextImage}
              /> */}
            </div>

            <div className="bottomSection">
              {feedData.feed_image_data &&
                feedData.feed_image_data.map((image, index) => {
                  return (
                    <img
                      src={image.url}
                      data-id={index}
                      alt="smallimage"
                      onClick={this.handlePresentImage}
                    />
                  );
                })}
            </div>
          </section>

          <section className="collections">
            <div className="topLine">
              <span>
                collected in <strong>1 Collection</strong>
              </span>
              <div className="arrow">
                <img
                  className="arrow-left"
                  src="https://www.flaticon.com/svg/vstatic/svg/892/892512.svg?token=exp=1613908978~hmac=e463a3fa066a66b2f2f092c116786c5e"
                  alt="left-arrow"
                />
                <img
                  className="arrow-right"
                  src="https://www.flaticon.com/svg/vstatic/svg/892/892528.svg?token=exp=1613909069~hmac=e554dbdd650c360948789c07bff16a9a"
                  alt="right-arrow"
                />
              </div>
            </div>
            <img
              className="collection"
              src="https://usercontents-c.styleshare.io/images/48846633/640x-"
              alt="collection"
            />
          </section>
        </div>

        <aside>
          {feedData.product_data &&
            feedData.product_data.map((product) => {
              return (
                <Link to={`product/${product.id}`}>
                  <section className="contentInBox productBox">
                    <span>StyleWe에서 구입가능한 제품</span>
                    <div className="product">
                      <img src={product.product_image} alt="" />
                      <div>
                        <p className="productName">{product.product_name}</p>
                        <p className="price">
                          {`${product.price
                            ?.split('.')[0]
                            .toLocaleString()} 원`}
                          <span>
                            {Math.round(
                              product.price * (1 - product.discount_rate)
                            ).toLocaleString() + '원'}
                          </span>
                        </p>
                      </div>
                    </div>
                  </section>
                </Link>
              );
            })}

          <section className="contentInBox brandBox">
            <div className="brand">
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/884/884485.svg?token=exp=1613909649~hmac=df80a627289988ea6469a2ec1239b282"
                alt="pant"
              />
              <div>
                <p>Top </p>
                <p>스파오 </p>
              </div>
            </div>
          </section>

          <section className="contentInBox feedContents">
            <div className="profile">
              <img
                className="profileImg"
                src="https://usercontents-c.styleshare.io/images/47984102/40x40"
                alt="profileImg"
              />
              <div>
                <p>{feedData.feed_basic_data?.feed_user}</p>
                <p>{feedData.feed_basic_data?.feed_writer_about}</p>
              </div>
              <img
                className="follow"
                src="https://www.flaticon.com/svg/vstatic/svg/907/907873.svg?token=exp=1613991840~hmac=5a94b82bc0b18dc9a824527ae20a60ac"
                alt="follow"
              />
            </div>
            <p>
              {feedData.feed_basic_data?.description}
              <br />
              <br /> insta - hi_hooooon <br />
              <br />
              <span>
                #데일리룩 #데일리 #데일리코디 #인스타그램 #인플루언서 #베레모
                #베레모코디 #투명안경 #안경 #브이넥 #흑청 #흑청바지 #스타터
                #스타터신발 #흑청코디 #좋아요 #팔로우 #맞팔 #좋반
              </span>
            </p>
          </section>

          <section className="feedicons">
            <div>
              <IoHeart />
              <span>{feedData.feed_basic_data?.like_number}</span>
            </div>
            <img
              className="collectionImage"
              src="https://www.flaticon.com/svg/vstatic/svg/3580/3580085.svg?token=exp=1613994414~hmac=4ec4d8f1df0e2b803e95ee9adb9282c4"
              alt="collection"
            />
            <img
              className="moreImage"
              src="https://www.flaticon.com/svg/vstatic/svg/2089/2089792.svg?token=exp=1613994442~hmac=8e39ff24ca1c755a782b6d5654cdd303"
              alt="more"
            />
          </section>
          <section className="comments">
            <div className="topRow">
              <span>
                댓글({feedData.feed_comment_data?.feed_comment_count})
              </span>
              <a href="www.naver.com">더보기</a>
            </div>
            <div className="commentsArea">
              {feedData.feed_comment_data?.comment_list &&
                feedData.feed_comment_data?.comment_list.map((comment) => {
                  return (
                    <div className="singleComment">
                      <img
                        src={profileImgs[this.state.imgNum]}
                        alt="profileImg"
                      />
                      <div class="commentText">
                        <p>
                          <span>{comment.user}</span>
                          {comment.content}
                        </p>
                        <p className="writtenDate">
                          {comment.created_at.split('T')[0]}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
            <input type="text" placeholder="댓글을 남기세요" />
          </section>
        </aside>
      </div>
    );
  }
}
