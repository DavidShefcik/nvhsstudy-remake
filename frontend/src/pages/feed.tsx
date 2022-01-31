import React from "react";

export default function Feed() {
  return (
    <div>
      <p>Feed</p>
    </div>
  );
}

Feed.getInitialProps = () => {
  return {
    title: "Welcome Back",
  };
};
