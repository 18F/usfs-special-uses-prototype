// Conditional state handling for question1.html

if (document.readyState !== 'loading') {
  attachRadioStateChangeHandlers();
} else {
  window.addEventListener("DOMContentLoaded", function () {
    attachRadioStateChangeHandlers();
    // adjust the initial visibilty to match
    adjustDynamicContent();
  });
}

function attachRadioStateChangeHandlers() {
  // need a listener on each radio input because un-checking a radio button
  // doesn't fire the "change" event
  document.getElementById("individual-organization").querySelectorAll("input").forEach((item) => {
    item.addEventListener("change", adjustDynamicContent);
  });
  document.getElementById("organization-type").querySelectorAll("input").forEach((item) => {
    item.addEventListener("change", adjustDynamicContent);
  });
}

function adjustDynamicContent(event) {
  // check if certain radio buttons are checked and decide whether to
  // enable certain questions

  var organization_radio_button = document.getElementById("organization");
  if (organization_radio_button.checked) {
    document.getElementById("organization-type").removeAttribute("disabled");
    // form goes to question 2 for an org
    document.getElementById("question1").setAttribute("action", "/question2/")
  } else {
    document.getElementById("organization-type").setAttribute("disabled", "");
    // form goes straight to submit if they aren't submitting for an
    // org
    document.getElementById("question1").setAttribute("action", "/submit/")
  }

  // second dynamic question
  var corporation_radio_button = document.getElementById("corporation");
  if (organization_radio_button.checked && corporation_radio_button.checked ) {
    document.getElementById("corporation-type").removeAttribute("disabled");
  } else {
    document.getElementById("corporation-type").setAttribute("disabled", "");
  }

  var agency_radio_button = document.getElementById("agency");
  if (organization_radio_button.checked && agency_radio_button.checked ) {
    document.getElementById("agency-type").removeAttribute("disabled");
  } else {
    document.getElementById("agency-type").setAttribute("disabled", "");
  }
}
