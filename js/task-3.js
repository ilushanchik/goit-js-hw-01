function getElementWidth(content, padding, border) {
  const contenT = Number.parseFloat(content);
  const paddinG = Number.parseFloat(padding);
  const bordeR = Number.parseFloat(border);
      const totalWidth = contenT + (paddinG * 2) + (bordeR * 2);
    return totalWidth;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200