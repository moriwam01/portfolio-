import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"January 2020 - Present"}
            title={"Computer Science & Engineering Student"}
            subTitle={"World University Of Bangladesh"}
            text={
              "Mimi is a computer science student at World University of Bangladesh. She is a react developer and highly interested in learning new technologies."
            }
          />
          <ResumeItem
            year={"January 2022 - June 2022"}
            title={"Web Deevlopment Intern"}
            subTitle={"Interactive Cares"}
            text={
              "Mimi is a computer science student at World University of Bangladesh. She is a react developer and highly interested in learning new technologies."
            }
          />
          <ResumeItem
            year={"January 2022 - June 2022"}
            title={"Frontend Developer Intern"}
            subTitle={"TestBuddy"}
            text={
              "Mimi is a computer science student at World University of Bangladesh. She is a react developer and highly interested in learning new technologies."
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2021 - Present"}
            title={"Computer Science & Engineering Degree"}
            subTitle={"World University Of Bangladesh"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"2017 - 2019"}
            title={"HSC"}
            subTitle={"Safiuddin Sarker Academy & College"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"2015 - 2017"}
            title={"SSC"}
            subTitle={"Kalmeswar Rokeya Smarnai Girls High School"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
