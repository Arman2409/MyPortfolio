import React, { useCallback } from "react";

export type PortfolioItemProps = {
  img: string
  link: string
  description: string
  left: number
  top: number
  index?: number
  id?: number
}
const PortfolioItem: React.FC<PortfolioItemProps> = ({ img, link, description, left, top }) => {

  const takeToLink = useCallback(() => {
    const linkEl = document.createElement("a");
    linkEl.setAttribute("href", link);
    linkEl.setAttribute("target", "_blank");
    linkEl.click();
  }, [link])

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
        src={img} />
    </div>
  )
}

export default PortfolioItem;