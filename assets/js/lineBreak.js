const textArea = document.querySelector("textarea");

if (textArea) {
  let theValue = textArea.textContent;
  const replace = theValue.replace(/\r?\n/g, "<br />");
  theValue = replace;
}
