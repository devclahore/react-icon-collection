import * as React from "react";

const SvgCloud = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 48 34" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.52 30.4H12.2c-4.62 0-8.38-3.75-8.38-8.38 0-4.62 3.76-8.38 8.38-8.38 1.8 0 2.47.23 4.19 1.13.01 0 .02 0 .02.01.05.02.1.04.16.06.04.01.09.03.13.05h.03c.04.02.08.02.12.02.05.01.09.02.14.02.06.01.13 0 .19 0 .03 0 .06 0 .09-.01.07 0 .14-.02.21-.04.02 0 .05-.01.07-.02.07-.02.13-.05.19-.08.02-.01.05-.02.08-.04.05-.03.1-.06.15-.1l.09-.06c.05-.04.08-.08.12-.13.03-.03.06-.05.08-.09a.56.56 0 00.1-.15c.02-.02.04-.05.06-.08v-.02c.03-.05.05-.1.07-.15.01-.04.03-.09.04-.14.01 0 .01-.01.01-.02A13.354 13.354 0 0131.52 3.67c7.37 0 13.36 6 13.36 13.37 0 7.37-5.99 13.36-13.36 13.36zm0-29.73c-6.93 0-12.99 4.31-15.34 10.68-1.15-.47-2.25-.71-3.98-.71C5.93 10.64.82 15.75.82 22.02.82 28.3 5.93 33.4 12.2 33.4h19.32c9.02 0 16.36-7.34 16.36-16.36C47.88 8.01 40.54.67 31.52.67z"
    />
  </svg>
);

export default SvgCloud;
