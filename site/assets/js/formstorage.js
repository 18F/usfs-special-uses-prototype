// Store form submission information into sessionStorage
if (document.readyState !== 'loading') {
  attachFormsSubmitHandler();
} else {
	window.addEventListener("DOMContentLoaded", function () {
		attachFormsSubmitHandler();
	});
}

function attachFormsSubmitHandler() {
  var forms = document.getElementsByClassName("form-submit-save");

  for (const form of forms) {
    // there was at least one form on the page
    form.addEventListener("submit", saveSubmittedData);
  };
}

function saveSubmittedData(event) {
	console.log("Handling submit button click");
  console.log("Event sent from", event.target, "with submitter", event.submitter);
  var formData = new FormData(event.target, event.submitter);

  for (const [name, value] of formData) {
		// form a key to save the data include .name and set that to .value in sessionStorage
    const key = "form-save-submit-" + event.target.id + "-" + name;
    window.sessionStorage.setItem(key, value);
  }
}
