import * as React from "react";

const SvgStar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 45 43" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.474 17.78l7.968 7.77c.353.34.515.84.432 1.32l-1.882 10.97 9.85-5.18c.437-.23.959-.23 1.396 0l9.849 5.18-1.88-10.97c-.084-.48.078-.98.431-1.32l7.968-7.77-11.012-1.6a1.504 1.504 0 01-1.13-.82L22.54 5.38l-4.925 9.98c-.219.44-.641.75-1.129.82l-11.012 1.6zM10 42.08c-.311 0-.62-.09-.882-.28a1.511 1.511 0 01-.597-1.47l2.262-13.19-9.58-9.33c-.409-.4-.556-1-.38-1.54.177-.55.646-.94 1.211-1.02l13.24-1.93 5.921-11.99A1.49 1.49 0 0122.54.49c.571 0 1.092.32 1.345.84l5.921 11.99 13.239 1.93c.565.08 1.035.47 1.211 1.02.177.54.03 1.14-.38 1.54l-9.579 9.33 2.261 13.19c.096.56-.135 1.13-.597 1.47-.462.33-1.073.38-1.58.11L22.54 35.69l-11.842 6.22a1.44 1.44 0 01-.698.17z"
    />
  </svg>
);

export default SvgStar;
