function getDate(languageCode) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date().toLocaleDateString(languageCode, options);
}

const welcomeElement = document.getElementById("welcome");
if (welcomeElement) {
  const languageCode = navigator.language.slice(0, 2);
  const date = getDate(languageCode);
  const greeting = getGreeting(languageCode);
  welcomeElement.innerHTML = `${greeting} !<br /><span class="accent">${date}</span>`;
}
