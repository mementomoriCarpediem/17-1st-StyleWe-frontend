import React, { Component } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';

import '../../Styles/commons.scss';
import './CommunityMain.scss';

import TopFeedSection from './TopFeedSection';
import FeedUnit from './FeedUnit';
import CreateModal from './CreateModal';
import Footer from '../../Components/Footer/Footer';

import StoreNav from '../../Components/Nav/StoreNav/StoreNav';
import FeedDetail from './FeedDetail';

export default class CommnunityMain extends Component {
  state = {
    feedContent: [],
    isCreateModalOpen: false,
    isFeedDetailModalOpen: false,
    offset: 0,
    feedContainerHeight: 2400,
    isScollTopZero: false,
    feedId: 0,
  };

  getData = () => {
    // const LIMIT = 30;
    // const { offset } = this.state;

    // fetch(`http://10.58.2.215:8000/feed?limit=${LIMIT}&offset=${offset}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.setState({
    //       feedContent: [...this.state.feedContent, ...data.feed_list],
    //     });
    //   });

    fetch('/data/mockFeedData.json')
      .then((res) => res.json())
      .then((data) => this.setState({ feedContent: [...data] }));
  };

  componentDidMount() {
    this.getData();
    window.addEventListener('scroll', this.infiniteScroll, true);
  }

  infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      this.getData();
      this.setState({
        offset: this.state.offset + this.state.limit,
        feedContainerHeight: this.state.feedContainerHeight + 2400,
      });

      this.componentDidMount();
    }

    this.setState({
      isScollTopZero: scrollTop === 0 ? true : false,
    });
  };

  goUp = () => {
    window.scrollTo(0, 0);
  };

  handleCreateModal = () => {
    this.setState({
      isCreateModalOpen: !this.state.isCreateModalOpen,
    });
  };

  handleFeedModal = (id) => {
    this.setState({
      isFeedDetailModalOpen: !this.state.isFeedDetailModalOpen,
      feedId: id,
    });
  };

  render() {
    const {
      feedContent,
      isCreateModalOpen,
      isFeedDetailModalOpen,
      feedContainerHeight,
      isScollTopZero,
    } = this.state;

    document.body.style.overflow =
      isCreateModalOpen || isFeedDetailModalOpen ? 'hidden' : 'auto';

    return (
      <>
        <StoreNav />
        <main className="CommunityMain">
          {(isCreateModalOpen || isFeedDetailModalOpen) && (
            <div
              className="overlay"
              style={{ height: `${feedContainerHeight}px` }}
              onClick={this.handleFeedModal}
            ></div>
          )}

          {isFeedDetailModalOpen && <FeedDetail feedId={this.state.feedId} />}

          <TopFeedSection />

          <p className="sectionTitle">지금의 트랜드</p>
          <div className="Feeds" style={{ height: `${feedContainerHeight}px` }}>
            {feedContent.map((feed) => {
              return (
                <FeedUnit
                  key={feed.id}
                  id={feed.id}
                  username={feed.username}
                  mainimg={feed.feedImages[0]}
                  linkedProduct={feed.linkedProduct}
                  feedtext={feed.FeedText}
                  likedNumber={feed.LikedNumber}
                  comments={feed.comments}
                  commentsNum={feed.commentsNumber}
                  createdTime={feed.createdTime}
                  handleFeedModal={this.handleFeedModal}
                />
              );
            })}
            {/* {feedContent.map((feed) => {
              return (
                <FeedUnit
                  id={feed.feed_basic_data?.feed_id}
                  username={feed.feed_basic_data.feed_user}
                  mainimg={feed.feed_basic_data.feed_main_image?.image_url}
                  linkedProduct={feed.product_data}
                  feedtext={feed.feed_basic_data.description}
                  likedNumber={feed.feed_basic_data.like_number}
                  comments={feed.feed_comment_data.comment_list}
                  commentsNum={feed.feed_comment_data.feed_comment_count}
                  createdTime={feed.feed_basic_data.created_at.split('T')[0]}
                  handleFeedModal={this.handleFeedModal}
                />
              );
            })} */}
          </div>
          <FaChevronUp
            className={'upScroll' + (isScollTopZero ? ` topEnd` : '')}
            onClick={this.goUp}
          />

          <FaPlusCircle
            className="createContent"
            onClick={this.handleCreateModal}
          />

          {isCreateModalOpen && (
            <CreateModal handleCreateModal={this.handleCreateModal} />
          )}

          <Footer />
        </main>
      </>
    );
  }
}
