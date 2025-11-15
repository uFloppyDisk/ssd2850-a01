const elForm = document.getElementById("formSignup");

const elReferral = document.getElementById("referral");
const elReferralDetailsGroup = document.getElementById("referralDetailsGroup");
const referralDetailsInitDisplayStyle = elReferralDetailsGroup.style.display;

function displayReferralDetailsInput(display = false) {
  if (display) {
    elReferralDetailsGroup.style.display = referralDetailsInitDisplayStyle;
  } else {
    elReferralDetailsGroup.style.display = "none";
  }
}

elReferral.addEventListener("change", (e) => {
  const target = e.target;

  if (["magic", "other"].includes(target.value)) {
    displayReferralDetailsInput(true);
    return;
  }

  displayReferralDetailsInput(false);
});

elForm.addEventListener("reset", () => {
  displayReferralDetailsInput(false);
});

displayReferralDetailsInput();

{
  const copyrightYear = document.getElementById("copyrightYear");
  if (copyrightYear) {
    copyrightYear.innerText = new Date().getFullYear();
  }
}
