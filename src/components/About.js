import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;

      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div className="card" style={{ margin: "2% 0% 2% 0%" }}>
            <div className="card-header">
              <span
                className="iconify"
                data-icon="emojione:red-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>
            <div
              className="card-body font-trebuchet ml-3 mr-3"
              style={{
                height: "auto",
                fontSize: "132%",
                lineHeight: "200%",
              }}
            >
              <br />
              <span className="wave">
                {projects.title}
                {projects.url ? (
                  <a
                    href={projects.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-href"
                  >
                    <span class="iconify" data-icon="carbon:logo-github" style={{ marginLeft: "10px" }}></span>
                  </a>
                ) : null}
              </span>
              <br />
              <br />
              <div class="row md-3">
                <div class="col-md-8" style={{ lineHeight: "110%" }}>
                  {projects.description}
                </div>
                {/* <br /> */}
              <div class="col-md-4 justify-content-center">
                {projects.images.length > 0 ? ( 
                  <img
                    src={projects.images[0]}
                    class="img-fluid"
                    alt="Image of project"
                    style={{ marginBottom: 0, paddingBottom: 0, position: 'relative', maxHeight: "200px" }}
                  />)
                  : null
                }
              </div>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            {/* <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Picture of me"
                  />
                  <Icon
                    icon={angularIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={vueIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div> */}

            <div className="col-md-8 center">
              <div className="col-md-10">
                {projects}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
