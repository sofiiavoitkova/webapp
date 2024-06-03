function submitForm() {
  const phrase = document.getElementById("inputPhrase").value;
  const selectOption = document.getElementById("selectOption").value;

  window.location.href = `page.html?phrase=${encodeURIComponent(
    phrase
  )}&element=${encodeURIComponent(selectOption)}`;
}
