export function message(messageType = "success", message = "") {
  return `<div class="${messageType}">${message}</div>`;
}
