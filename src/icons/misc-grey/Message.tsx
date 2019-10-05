import * as React from "react";

const SvgMessage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 40 38" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.918 25.28c0 .09-.195.28-.5.28h-17.75c-.024 0-.047 0-.071.01-.052 0-.104 0-.157.01l-.139.03c-.047.01-.093.03-.139.04l-.139.06a.713.713 0 00-.121.07.468.468 0 00-.135.09l-.057.03-8.542 7.09v-5.93c0-.83-.671-1.5-1.5-1.5h-3.75c-.305 0-.5-.19-.5-.28V3.87c0-.09.195-.28.5-.28h32.5c.305 0 .5.19.5.28v21.41zm-.5-24.69h-32.5c-1.93 0-3.5 1.47-3.5 3.28v21.41c0 1.81 1.57 3.28 3.5 3.28h2.25v7.62c0 .58.336 1.11.862 1.36.204.1.421.14.637.14.344 0 .684-.11.958-.34l10.584-8.78h17.209c1.93 0 3.5-1.47 3.5-3.28V3.87c0-1.81-1.57-3.28-3.5-3.28z"
    />
  </svg>
);

export default SvgMessage;
