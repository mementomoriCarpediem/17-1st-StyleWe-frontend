import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./signin.scss";

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      user_name: "",
      password: "",
    };
  }

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = () => {
    this.props.history.push("/Main");
  };

  clickSignin = () => {
    fetch("http://10.90.206.147:8000/user/signin/", {
      method: "POST",
      body: JSON.stringify({
        user_name: this.state.user_name,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => this.respoSignin(res));
    // .then((result) => console.log("결과: ", result));
  };

  respoSignin = (res) => {
    // console.log("onClick");
    alert(res.message === "SIGNIN_SUCCESS" ? "로그인 성공" : "로그인 실패");
  };

  respoSignin = () => {
    this.goToMain();
  };

  render() {
    // const { user_name, password } = this.state;
    return (
      <div className="signin">
        <img
          alt="backgroundphoto"
          src="https://images.unsplash.com/photo-1569748079281-dc67c9569015?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTkzfHxzdHJlZXQlMjBmYXNoaW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <div className="signinContainer">
          <div className="signinContainerWrapper">
            <div className="signinBox">
              <header>
                <p className="Logo">Style 'We'</p>
                <p className="loginTitle">로그인</p>
              </header>
              <main>
                <div className="loginInputBox">
                  <div className="loginFormuserId">
                    <input
                      name="user_name"
                      onChange={this.handleInput}
                      type="text"
                      placeholder="ID/Email"
                    />
                  </div>
                  <div className="loginFormuserPassword">
                    <input
                      name="password"
                      onChange={this.handleInput}
                      type="password"
                      placeholder="비밀번호를 입력해 주세요."
                    />
                  </div>
                  <div className="loginFormButton">
                    <button
                      className="loginButton"
                      // className={
                      //   user_name.length > 2 && password.length > 5
                      //     ? "loginButton activeBtn"
                      //     : "loginButton inactiveBtn"
                      // }
                      onClick={this.clickSignin}
                      // onClick={this.goToMain}
                      type="button"
                    >
                      Signin
                    </button>
                  </div>
                </div>
                <div className="snsLoginForm">
                  <ul>
                    <li className="snsLoginFormList">
                      <button type="button" className="snsLoginFace">
                        <span>페이스북으로 로그인하기</span>
                      </button>
                      <button type="button" className="snsLoginTwit">
                        트위터로 로그인하기
                      </button>
                      <button type="button" className="snsLoginGoog">
                        구글로 로그인하기
                      </button>
                      <button type="button" className="snsLoginKakao">
                        카카오톡으로 로그인하기
                      </button>
                    </li>
                  </ul>
                </div>
              </main>
              <footer>
                <div className="bottomText">ID가 없으세요?</div>
                <div className="bottomListSignup">
                  <Link to="/signup">여기서 가입</Link>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signin);
