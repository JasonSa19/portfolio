import * as React from "react";

const Headline = ({ headlineContent, type }) => {
  const HeadlineType = `h${this.props.type}`;
  return <HeadlineType>{headlineContent}</HeadlineType>;
};

export default Headline;
