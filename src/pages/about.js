// Import react for jsx syntax
import * as React from "react";

// Init aboutPage Component
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
// Export Title to Head
export const Head = () => <title>Jason S. | Über mich</title>;

// export aboutPage Component
export default AboutPage;
