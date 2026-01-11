// Load saved value on popup load
document.addEventListener("DOMContentLoaded", function () {
  const homepageInput = document.getElementById("homepage");
  const saveButton = document.getElementById("save");
  const statusDiv = document.getElementById("status");

  // Load saved value
  browser.storage.local.get(["defaultHomepage"], function (result) {
    if (result.defaultHomepage) {
      homepageInput.value = result.defaultHomepage;
    } else {
      homepageInput.value = "about:home";
    }
  });

  // Save the new value
  saveButton.addEventListener("click", function () {
    const homepage = homepageInput.value.trim() || "about:home";

    browser.storage.local.set(
      {
        defaultHomepage: homepage,
      },
      function () {
        // Display success message
        statusDiv.textContent = "✓ Saved successfully";
        statusDiv.className = "status success";

        // Hide message after 2.5 seconds
        setTimeout(function () {
          statusDiv.style.display = "none";
        }, 2500);
      }
    );
  });

  // Allow saving with Enter key
  homepageInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      saveButton.click();
    }
  });
});
