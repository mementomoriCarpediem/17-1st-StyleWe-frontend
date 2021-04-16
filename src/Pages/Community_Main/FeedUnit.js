import React, { Component } from 'react';
import { IoHeartOutline } from 'react-icons/io5';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { IoFileTrayOutline } from 'react-icons/io5';

import './FeedUnit.scss';
import itemInfos from './itemInfos';
import profileImgs from './profileImgs';

export default class FeedUnit extends Component {
  state = {
    itemNum: Math.floor(Math.random() * 3 + 1),
    imgNum: Math.floor(Math.random() * 3 + 1),
    newItemArray: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({
      newItemArray: itemInfos.data.splice(0, this.state.itemNum),
    });
  }

  handleFeed = () => {
    this.props.handleFeedModal(this.props.id);
  };

  render() {
    const {
      id,
      username,
      mainimg,
      linkedProduct,
      feedtext,
      likedNumber,
      comments,
      commentsNum,
      createdTime,
    } = this.props;

    return (
      <div className="FeedUnit" key={id}>
        <img
          className="mainImg"
          src={mainimg}
          alt="snsPicture"
          onClick={this.handleFeed}
        />

        {linkedProduct.product_name && (
          <section className="linkedProduct">
            <img src={linkedProduct.product_image} alt="productimg" />
            <div>
              <p className="productName">{linkedProduct.product_name}</p>
              <p className="price">
                <span className="new">
                  {`${(
                    linkedProduct.price *
                    (1 - linkedProduct.discount_rate)
                  ).toLocaleString()} 원`}
                </span>
                <span className="old">{`${linkedProduct.price.toLocaleString()} 원`}</span>
              </p>
            </div>
          </section>
        )}

        {linkedProduct.product_name &&
          this.state.newItemArray.map((item, index) => (
            <section key={index} className="productInformation">
              <div className="eachItem">
                <img src={item.iconUrl} alt="icon" />
                <div className="text">
                  <p>{item.product}</p>
                  <p>{item.brandName[this.state.itemNum]}</p>
                </div>
              </div>
            </section>
          ))}

        <section className="summary">
          <div className="summaryFeed">
            <img src={profileImgs[this.state.imgNum]} alt="profilepicture" />
            <div className="InnerBox">
              <div className="topText">
                <span>{username}</span>
                <span>{createdTime}</span>
              </div>
              <div className="bottomText">{feedtext}</div>
              <div className="icons">
                <IoHeartOutline className="icon" />
                <span>{likedNumber}</span>
                <IoChatbubbleOutline className="icon" />
                <span>{commentsNum}</span>
                <IoFileTrayOutline className="icon" />
                <span>16</span>
              </div>
            </div>
          </div>
        </section>

        {comments.map((comment, index) => {
          if (comment.user) {
            return (
              <div key={index} className="comments">
                <img src={profileImgs[this.state.itemNum]} alt="profile" />
                <div>
                  <p>
                    <span>{comment.user}</span> {comment.comment}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
