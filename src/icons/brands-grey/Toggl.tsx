import * as React from "react";

const SvgToggl = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <path d="M12 0C5.373 0 0 5.37 0 12s5.373 12 12 12c6.63 0 12-5.37 12-12S18.63 0 12 0zm-.84 4.67h1.68v8.36h-1.68V4.67zM12 18.155a5.866 5.866 0 01-1.55-11.523v1.71a4.247 4.247 0 00-2.695 3.96 4.245 4.245 0 108.491-.005 4.246 4.246 0 00-2.694-3.95V6.63a5.868 5.868 0 01-1.551 11.524z" />
  </svg>
);

export default SvgToggl;
