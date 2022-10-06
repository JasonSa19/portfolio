import * as React from "react";

const HeadlineType = `h${this.props.level}`;

const Headline = ({ headlineContent }) => {
  return <HeadlineType>{headlineContent}</HeadlineType>;
};

export default Headline;
