import React from "react";

import ErrorPage from "~/components/ErrorPage";

export default function NotFound() {
  return <ErrorPage title="404!" subtitle="That page was not found" />;
}
