const textarea = document.getElementById("message");
const charCount = document.getElementById("charCount");
const warning = document.getElementById("warning");
const maxChars = 200;

textarea.addEventListener("input", () => {
  let textLength = textarea.value.length;

  // Update character count
  charCount.textContent = textLength;

  // Check if limit reached
  if (textLength >= maxChars) {
    warning.textContent = "You have reached the maximum character limit!";
    textarea.value = textarea.value.substring(0, maxChars); // prevent extra typing
  } else {
    warning.textContent = "";
  }
});
