import React from "react";

import InfoPage from "~/components/InfoPage";

export default function About() {
  return (
    <InfoPage title="About Neuqua Study">
      <p>About Page</p>
    </InfoPage>
  );
}

About.getInitialProps = () => {
  return {
    title: "About",
  };
};
