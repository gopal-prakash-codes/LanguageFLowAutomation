import React, { forwardRef } from "react";
import SvgFirecrawlLogo from "./FirecrawlLogo";

export const FirecrawlIcon = forwardRef<
  SVGSVGElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  return <SvgFirecrawlLogo ref={ref} {...props} />;
});
