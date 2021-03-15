export function createDomElem(type, id, classes, content) {
  const domElem = document.createElement(type);
  if (id) domElem.id = id;
  if (classes) {
    if (Array.isArray(classes)) {
      classes.forEach((elem) => domElem.classList.add(elem));
    } else {
      domElem.classList.add(classes);
    }
  }
  if (content) domElem.innerHTML = content;

  return domElem;
}