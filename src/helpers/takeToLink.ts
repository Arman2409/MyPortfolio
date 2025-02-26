export const takeToLink = (href: string) => {
    // Create anchor element 
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = href;
    link.click();
}