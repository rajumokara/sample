export const handleKeyPressNumbers = (event) => {
  const keyCode = event.keyCode || event.which;
  const keyValue = String.fromCharCode(keyCode);

  // Allow only numbers and the backspace key
  if (!/^[0-9\b]+$/.test(keyValue)) {
    event.preventDefault();
  }
};
