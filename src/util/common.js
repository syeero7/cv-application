export function getInputValue(form, dataset) {
  return form.querySelector(`[data-${dataset}]`).value.trim();
}

export function getCurrentYear() {
  return new Date().toISOString().slice(0, 4);
}
