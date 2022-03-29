import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import { Icon } from '@iconify/react';
import mongoIcon from '@iconify/icons-cib/mongodb';
import shareThisIcon from '@iconify/icons-ps/sharethis';

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var iconLookup = {
          "mongo": <Icon icon={mongoIcon} class="experience-icon" />,
          "sharethis": <Icon icon={shareThisIcon}  class="experience-icon" />,
          "cornell": <i class="fa fa-university experience-icon" aria-hidden="true"></i>
        };
        var desc = work.description.map((item,i) => <li key={i}>{item}</li>);
      
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#4795df",
              color: "#fff",
              textAlign: "center",
            }}
            icon={iconLookup[work.icon]}
            key={i}
          >
            {/* <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainTech}
            </div> */}

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left", fontWeight: "bold" }}
            >
              {work.company}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h4>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left", marginTop: "10px", marginLeft: "14px" }}
            >
              {desc}
            </h4>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#4795df",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
