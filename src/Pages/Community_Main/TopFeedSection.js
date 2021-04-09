import React, { Component } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import './TopFeedSection.scss';

import ColumnList from './ColumnList';
import TextOverImage from './TextOverImage';

export default class TopFeedSection extends Component {
  constructor() {
    super();
    this.state = {
      columnContent: [],
    };
  }

  getData = () => {
    fetch('/data/mockColumnList.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          columnContent: data,
        });
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="TopFeedSection">
        <div className="bigColumn">
          <TextOverImage />
          <img
            src="https://image.chosun.com/sitedata/image/201904/17/2019041702117_0.jpg"
            alt="bigColumnPicture"
          />
          <div className="bigColumnContent">
            <img src="images/image.png" alt="logo" />
            <div className="author">
              <p>by</p>
              <p>StyleWe</p>
            </div>
            <div className="styleNum">
              <p>스타일</p>
              <p>40</p>
            </div>
            <div className="followNum">
              <p>팔로워</p>
              <p>100</p>
            </div>
          </div>
        </div>
        <div className="smallColumn">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ss-winter-sh-comp-1602272936.jpg"
            alt="smallColumnPicture"
          />
          <div className="textContent">
            민감한 피부를 가진 스쉐러들에게 #요즘대세 #피부빨간펜 🖍 더마코스메틱
            브랜드 리더스가 제안하는 특별한 스킨케어로... 더 보기
          </div>
          <div className="smallColumnContent">
            <div className="styleNum">
              <p>스타일</p>
              <p>21</p>
            </div>
            <div className="followNum">
              <p>팔로워</p>
              <p>24</p>
            </div>
            <FaPlusCircle size={'30px'} style={{ marginRight: '10px' }} />
          </div>
          <div className="styleWe">
            <img src="images/image.png" alt="logo" />
            <div className="author">
              <p>by</p>
              <p>StyleWe</p>
            </div>
          </div>
        </div>
        <div className="smallColumn">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5KmORR0pn4wTv8Dnn98uCaTjS_w8mPaNSQ&usqp=CAU"
            alt="smallColumnPicture"
          />
          <div className="textContent">
            지금 스쉐에서만 득템할 수 있는 인기 슈즈 모음🙌 가장 잘나가는
            스니커즈와 슬리퍼의 박빙 대결속 상품들을 신학기 매치전.. 더보기
          </div>
          <div className="smallColumnContent">
            <div className="styleNum">
              <p>스타일</p>
              <p>15</p>
            </div>
            <div className="followNum">
              <p>팔로워</p>
              <p>10</p>
            </div>
            <FaPlusCircle size={'30px'} style={{ marginRight: '10px' }} />
          </div>
          <div className="styleWe">
            <img src="images/image.png" alt="logo" />
            <div className="author">
              <p>by</p>
              <p>StyleWe</p>
            </div>
          </div>
        </div>
        <div className="columnList">
          {this.state.columnContent.map((content) => {
            return (
              <ColumnList
                key={content.id}
                imgSrc1={content.imgSrc1}
                imgSrc2={content.imgSrc2}
                content={content.content}
                author={content.author}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
