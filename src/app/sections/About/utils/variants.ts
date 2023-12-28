import { Variants } from "framer-motion";

const screenVariants:Variants = {
  switchedOn: {
     height: "460px",
     width: "780px",
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
}

export default screenVariants;