import * as React from "react";

const AboutPage = () => {
  return (
    <main>
      <div className="about-wrap">
        <span>
          Ich bin Jason, 20 Jahre jung und versuche mit dieser Seite, React und
          Gatsby näher kennenzulernen.
        </span>
      </div>
    </main>
  );
};

export const Head = () => <title>Jason S. | Über mich</title>;
export default AboutPage;
