import React from "react";

import InfoPage from "~/components/InfoPage";

export default function FAQ() {
  return (
    <InfoPage title="FAQ">
      <p>FAQ Page</p>
    </InfoPage>
  );
}

FAQ.getInitialProps = () => {
  return {
    title: "FAQ",
  };
};
