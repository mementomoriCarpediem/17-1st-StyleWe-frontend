import React from 'react';
import { Link } from 'react-router-dom';
import './StoreNav.scss';

class StoreNav extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      categoriesData: [],
      searchInputValue: '',
      hoverValue: '',
      isPlaceholder: false,
      isLogin: false,
    };
  }

  componentDidMount() {
    this.getMenuData();
  }

  getMenuData = () => {
    fetch('/data/navMenu.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          categoriesData: data,
        });
      });
  };

  handleSearchInput = (e) => {
    this.setState({
      searchInputValue: e.target.value,
    });
  };

  handleSearchInputToggle = () => {
    this.setState({
      isPlaceholder: !this.state.isPlaceholder,
    });
    if (!this.isPlaceholder) {
      this.inputRef.current.value = '';
    }
  };

  handleCategoriesMouseHover = (e) => {
    this.setState({
      hoverValue: e.target.innerText,
    });
  };

  render() {
    const { isPlaceholder, isLogin, categoriesData, hoverValue } = this.state;

    return (
      <nav className="storeNav">
        <section className="storeNavSection">
          <section className="searchSection">
            <div className="navMenuWrapper">
              <img className="logo" alt="Logo" src="/images/styleWeLogo.png" />
              <div className="menuWrapper">
                <button>#OOTD</button>
                <button>STORE</button>
              </div>
            </div>
            <div className="navSearchBarWrapper">
              <div className="searchBar">
                <input
                  className="searchInput"
                  type="search"
                  ref={this.inputRef}
                  onChange={this.handleSearchInput}
                  onClick={this.handleSearchInputToggle}
                  onBlur={this.handleSearchInputToggle}
                />
                {!isPlaceholder && (
                  <div className="displayOnPlaceHolder">
                    <img
                      className="searchIcon"
                      alt="search icon"
                      src="/images/searchIcon.svg"
                    />
                    <span>스타일과 상품을 검색해 보세요</span>
                  </div>
                )}
              </div>
            </div>
            {!isLogin ? (
              <div className="nonMemberDisplay">
                <img
                  className="bucketIcon"
                  alt="장바구니"
                  src="/images/paperBagIcon.svg"
                />
                <Link to="/signin">
                  <button className="signBtn">로그인/가입</button>
                </Link>
              </div>
            ) : (
              <div className="memberDisplay">
                <img className="bellIcon" alt="알림" src="/images/bell.svg" />
                <img
                  className="bucketIcon"
                  alt="장바구니"
                  src="/images/paperBagIcon.svg"
                />
                <img
                  className="profileImageBtn"
                  alt="프로필 이미지"
                  src="/images/profileImage.png"
                />
              </div>
            )}
          </section>
          <ul className="catergoiesSection">
            {categoriesData.map((mainCategory) => {
              return (
                <div key={mainCategory.id}>
                  <li
                    className="storeCategories"
                    onMouseEnter={this.handleCategoriesMouseHover}
                  >
                    {mainCategory.catergoriesName}
                  </li>
                  {hoverValue === mainCategory.catergoriesName &&
                    mainCategory.subCatergoriesName[0] && (
                      <div
                        className="detailMenuTab"
                        onMouseLeave={this.handleCategoriesMouseHover}
                      >
                        <div className="wrapper">
                          {mainCategory.subCatergoriesName.map(
                            (subCategory, index) => {
                              return (
                                <div key={index} className="subCategory">
                                  {subCategory}
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    )}
                </div>
              );
            })}
          </ul>
        </section>
        <div className="hoverBackgroudColor" />
      </nav>
    );
  }
}

export default StoreNav;
