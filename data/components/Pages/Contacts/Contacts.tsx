import { useRef, useEffect } from "react";

import Links from "./components/Links";
import MessageMe from "./components/MessageMe";

const Contacts = () => {
   const mainBox = useRef<any>(null);

   useEffect(() => {
      setTimeout(() => {
         mainBox.current.style.top = "0px";
      }, 1000);
      window.scrollTo({ top: 0 });
   })

   return (
      <div
         ref={mainBox}
         style={{
            transition: "0.5s",
            position: "relative",
            top: "-2500px",
         }}
        >
         <Links />
         <MessageMe />
      </div>
   )
}

export default Contacts;