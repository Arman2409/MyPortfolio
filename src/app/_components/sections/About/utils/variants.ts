import type { Variants } from "framer-motion";

import type { ScreenSize } from "../../../../_types/global";

const getTVVariants = (breakpoint:ScreenSize):Variants => ({
  switchedOn: {
     height: breakpoint === "small" ? "220px" : breakpoint === "medium" ? "360px" : "460px",
     width: breakpoint === "small" ? "400px" :  breakpoint === "medium" ? "590px" : "780px",
     transition: {
        duration: 0.25
     }
  },
  switchedOff: {
    height: "0px",
     width: "0px",
     transition: {
        duration: 0.25
     }
  }
})

export default getTVVariants;