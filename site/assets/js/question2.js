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
  document.getElementById("parent-company").querySelectorAll("input").forEach((item) => {
    item.addEventListener("change", adjustDynamicContent);
  });
  document.getElementById("other-permits").querySelectorAll("input").forEach((item) => {
    item.addEventListener("change", adjustDynamicContent);
  });
}

function adjustDynamicContent(event) {
  // check if certain radio buttons are checked and decide whether to
  // enable certain questions

  var permits_radio_button = document.getElementById("has-permits");
  if (permits_radio_button.checked) {
    document.getElementById("permit-numbers").removeAttribute("disabled");
  } else {
    document.getElementById("permit-numbers").setAttribute("disabled", "");
  }

  // second dynamic question
  var parent_radio_button = document.getElementById("has-parent");
  if (parent_radio_button.checked) {
    document.getElementById("parent-info").removeAttribute("disabled");
  } else {
    document.getElementById("parent-info").setAttribute("disabled", "");
  }
}
