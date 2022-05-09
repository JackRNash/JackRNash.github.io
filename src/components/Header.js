import React, { Component } from "react";
import { Icon } from "@iconify/react";
import emailIcon from "@iconify/icons-carbon/email";
import linkedInIcon from "@iconify/icons-carbon/logo-linkedin";
import githubIcon from "@iconify/icons-carbon/logo-github";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [x, 1500]).flat();
    }

    const HeaderTitleTypeAnimation = React.memo(() => {
      return <Typical className="title-styles" steps={this.titles} />
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: Math.max(window.innerHeight, 800), display: 'block' }}>
        <div className="row aligner" style={{  }}>
          <div className="col-md-12">
            <div>
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={"images/myProfile.jpg"}
                    alt="Picture of me"
                  />
                </span>
              </div>
              <br />
              <h1 className="mb-0">
                <p>{name}</p>
                {/* <Typical steps={[name]} wrapper="p" /> */}
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <div className="row center mx-auto mb-5">
                <div className="col-md-4 mb-5 center">
                  {/* <span className="m-4"> */}
                  <a href={'https://github.com/JackRNash'}
                    target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "400%", margin: "0% 5% 0% 5%", color: "black" }}
                  >
                    <Icon
                      icon={githubIcon}
                      className="headerIcons"
                    />
                  </a>
                  {/* </span> */}
                  <a href={'mailto:JackNashCA@gmail.com'}
                    target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "400%", margin: "0% 5% 0% 5%", color: "black" }}
                  >
                    <Icon
                      icon={emailIcon}
                      className="headerIcons"
                    />
                  </a>
                  {/* <Icon
                    icon={emailIcon}
                    style={{ fontSize: "400%", margin: "0% 5% 0% 5%" }}
                  /> */}
                  <a href={'https://www.linkedin.com/in/jack-nash-282765146/'}
                    target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "400%", margin: "0% 5% 0% 5%", color: "black" }}
                  >
                    <Icon
                      icon={linkedInIcon}
                      className="headerIcons"
                    />
                  </a>
                  {/* <Icon
                    icon={linkedInIcon}
                    style={{ fontSize: "400%", margin: "0% 5% 0% 5%" }}
                  /> */}
                </div>
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#a9d4fc"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />

            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
