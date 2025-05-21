export const cntl = (
  template: TemplateStringsArray,
  ...templateElements: (string | number | boolean)[]
) => {
  return template
    .reduce((sum, n, index) => {
      const templateElement = templateElements[index];
      if (typeof templateElement === "string") {
        return `${sum}${n}${templateElement}`;
      }
      return `${sum}${n}`;
    }, "")
    .trim()
    .replace(/\s{2,}/g, " ");
};
