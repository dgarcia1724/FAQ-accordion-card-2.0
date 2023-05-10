const allDropDowns = document.querySelectorAll(".dropDown");

allDropDowns.forEach(function (dropDown) {
  const questionFlex = dropDown.querySelector(".questionFlex");
  const arrow = dropDown.querySelector(".questionFlex > img");
  const question = dropDown.querySelector(".questionFlex > p");
  const answer = dropDown.querySelector(".answer");

  questionFlex.addEventListener("click", function () {
    if (
      answer.style.display === "block" &&
      arrow.style.transform === "rotate(180deg)" &&
      questionFlex.style.marginBottom === "12px" &&
      question.classList.contains("darkBold")
    ) {
      answer.style.display = "none";
      arrow.style.transform = "rotate(0deg)";
      questionFlex.style.marginBottom = "0px";
      question.classList.remove("darkBold");
    } else {
      answer.style.display = "block";
      arrow.style.transform = "rotate(180deg)";
      questionFlex.style.marginBottom = "12px";
      question.classList.add("darkBold");
    }
  });
});
