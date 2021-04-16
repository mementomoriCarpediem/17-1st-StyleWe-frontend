import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

import './CreateModal.scss';

export default class CreateModal extends Component {
  constructor() {
    super();
    this.state = { isStyle: false, isCollection: false };
  }

  toggleOn = (e) => {
    const { name } = e.target;
    this.setState({
      [name]: true,
    });
  };

  toggleOff = (e) => {
    const { name } = e.target;
    this.setState({
      [name]: false,
    });
  };

  render() {
    const { isStyle, isCollection } = this.state;

    return (
      <div className="CreateModal">
        <div className="top">
          <p>업로드</p>
          <FaTimes
            size={25}
            className="closeIcon"
            onClick={this.props.handleCreateModal}
          />
        </div>
        <div className="boxContent">
          <div>
            <Link to="/upload">
              <img
                className="style"
                name="isStyle"
                src={isStyle ? 'images/style2.png' : 'images/style1.png'}
                alt="style"
                onMouseEnter={this.toggleOn}
                onMouseLeave={this.toggleOff}
              />
            </Link>
            <p>스타일</p>
          </div>
          <div>
            <img
              className="collection"
              name="isCollection"
              src={
                isCollection
                  ? 'images/collection2.png'
                  : 'images/collection1.png'
              }
              alt="collection"
              onMouseEnter={this.toggleOn}
              onMouseLeave={this.toggleOff}
              onClick=""
            />

            <p>콜렉션 만들기</p>
          </div>
        </div>
      </div>
    );
  }
}
