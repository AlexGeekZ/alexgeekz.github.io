import { Fragment } from "react";
import { Hero, AboutMe, Video, SkillCarousel, AwardsProgress, YouTube } from "../components";

export const Home = () => {
  return (
    <Fragment>
      <Hero />
      <AboutMe />
      <SkillCarousel />
      <Video />
      <AwardsProgress />
      <YouTube />
    </Fragment>
  );
};
