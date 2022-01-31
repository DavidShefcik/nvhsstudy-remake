import React from "react";

import ErrorPage from "~/components/ErrorPage";

export default function Error() {
  return (
    <ErrorPage
      title="Something happened!"
      subtitle="An unexpected error occurred"
    />
  );
}
