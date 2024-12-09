export function getInputValue(form, dataset) {
  return form.querySelector(`[data-${dataset}]`).value.trim();
}

export function hasOnlyFirstChild(parentElementSelector) {
  const parentElement = document.querySelector(parentElementSelector);
  return parentElement?.children.length === 1;
}

export function getCurrentYear() {
  return new Date().toISOString().slice(0, 4);
}
