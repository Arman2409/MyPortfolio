import { useCallback } from "react";

const PortfolioItem = ({ url, link, description, left, top}) => {

    const takeToLink = useCallback(() => {
        const linkEl = document.createElement("a");
        linkEl.setAttribute("href", link);
        linkEl.setAttribute("target", "_blank");
        linkEl.click();
    }, [link] )

   return (
    <div  
      className="portfolio_item"
      style={{
        left: left + "px", 
        top: top + 50 + "px",
      }}
      onClick={takeToLink}>
        <p className="portfolio_item_description">
            {description}
        </p>
        <img
          alt="Portfolio item"
          className="portfolio_item_image"
          src={url}/> 
    </div>
   )
}

export default PortfolioItem;