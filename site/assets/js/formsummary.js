// Fill summary information from sessionStorage
if (document.readyState !== 'loading') {
  fillSummaryInformation();
} else {
  window.addEventListener("DOMContentLoaded", function () {
    fillSummaryInformation();
  });
}

function fillSummaryInformation() {
  // summary information is in sesstionStorage
  // keys are prefixed with form-save-submit-

  // fields to fill in are in <dd> elements under a div
  // with ID form-summary
  var summaryDiv = document.getElementById("form-summary");
  var descriptionElements = summaryDiv.getElementsByTagName("dd");
  console.log("div has dd elements", descriptionElements);

  for (const element of descriptionElements) {
    // each dd element has a data-field-key attribute that
    // is used to build the key into sessionStorage
    var fieldKey = element.attributes["data-field-key"].value;
    if (fieldKey != null) {
      const storageKey = "form-save-submit-" + fieldKey;
      var itemValue = window.sessionStorage.getItem(storageKey);
      element.textContent = itemValue;
    }
  }
}
