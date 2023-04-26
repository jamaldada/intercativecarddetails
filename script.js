/* const cardName = document.getElementById("cardnameinput").value;
const cardNumber = document.getElementById("cardno").value;
const cardMonth = document.getElementById("expinumberone").value;
const cardYear = document.getElementById("expinumbertwo").value;
const cardCvc = document.getElementById("expiry-date").value;
const cardNamo = document.querySelector(".namio");
const cardNumbero = document.querySelector(".cardio");
const cardMontho = document.querySelector(".datio");
const cardYearo = document.querySelector(".datitwo");
const cardCvco = document.querySelector(".cvco");
const btnConfirm = document.querySelector(".btnconfirm");
const btnContinue = document.querySelector(".continue");
const containerOne = document.querySelector(".container1")
const containerTwo = document.querySelector(".container2")

btnConfirm.addEventListener('click', function() {

    cardNamo.textContent = cardName;
    cardNumbero.textContent = cardNumber;
    cardMontho.textContent = cardMonth;
    cardYearo.textContent = cardYear;
    cardCvco.textContent = cardCvc;
  
    containerOne.classList.add("hidden");
    containerTwo.classList.remove("hidden")
    containerTwo.style.display = "flex"
})



 */



/* document.addEventListener('DOMContentLoaded', function() {

    const cardNameInput = document.getElementById("cardnameinput");
    const cardNumberInput = document.getElementById("cardno");
    const cardMonthInput = document.getElementById("expinumberone");
    const cardYearInput = document.getElementById("expinumbertwo");
    const cardCvcInput = document.getElementById("expiry-date");
    const cardNameOutput = document.querySelector(".namio");
    const cardNumberOutput = document.querySelector(".cardio");
    const cardMonthOutput = document.querySelector(".datio");
    const cardYearOutput = document.querySelector(".datitwo");
    const cardCvcOutput = document.querySelector(".cvco");
    const btnConfirm = document.querySelector(".btnconfirm");
    const btnContinue = document.querySelector(".continue");
    const containerOne = document.querySelector(".container1");
    const containerTwo = document.querySelector(".container2");
  
    btnConfirm.addEventListener('click', function() {
      const cardName = cardNameInput.value;
      const cardNumber = cardNumberInput.value;
      const cardMonth = cardMonthInput.value;
      const cardYear = cardYearInput.value;
      const cardCvc = cardCvcInput.value;
  
      
  
      cardNameOutput.textContent = cardName;
      cardNumberOutput.textContent = cardNumber;
      cardMonthOutput.textContent = cardMonth;
      cardYearOutput.textContent = cardYear;
      cardCvcOutput.textContent = cardCvc;
  
      containerOne.classList.add("hidden");
      containerTwo.classList.remove("hidden");
      containerTwo.style.display = "flex";
    });
  
  });
   */


  /* const cardNameInput = document.getElementById("cardnameinput");
const cardNoInput = document.getElementById("cardno");
const expMonthInput = document.getElementById("expinumberone");
const expYearInput = document.getElementById("expinumbertwo");
const cvcInput = document.getElementById("expiry-date");
const cardNameOutput = document.querySelector(".namio");
const cardNoOutput = document.querySelector(".cardio");
const expDateOutput = document.querySelector(".datio");
const cvcOutput = document.querySelector(".cvco");
const confirmBtn = document.querySelector(".btnconfirm");
const continueBtn = document.querySelector(".continue");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");

confirmBtn.addEventListener('click', function() {
  const cardName = cardNameInput.value;
  const cardNo = cardNoInput.value;
  const expMonth = expMonthInput.value;
  const expYear = expYearInput.value;
  const cvc = cvcInput.value;

  cardNameOutput.textContent = cardName;
  cardNoOutput.textContent = cardNo;
  expDateOutput.textContent = `${expMonth}/${expYear}`;
  cvcOutput.textContent = cvc;

  container1.classList.add("hidden");
  container2.classList.remove("hidden");
  container2.style.display = "flex";
});


continueBtn.addEventListener("click", function(){
    cardNameOutput.textContent = "";
  cardNoOutput.textContent = "";
  expDateOutput.textContent = "";
  cvcOutput.textContent = "";
}) */

const cardNameInput = document.getElementById("cardnameinput");
const cardNoInput = document.getElementById("cardno");
const expMonthInput = document.getElementById("expinumberone");
const expYearInput = document.getElementById("expinumbertwo");
const cvcInput = document.getElementById("expiry-date");
const cardNameOutput = document.querySelector(".namio");
const cardNoOutput = document.querySelector(".cardio");
const expDateOutput = document.querySelector(".datio");
const cvcOutput = document.querySelector(".cvco");
const confirmBtn = document.querySelector(".btnconfirm");
const continueBtn = document.querySelector(".continue");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");

confirmBtn.addEventListener('click', function(e) {
  const cardName = cardNameInput.value;
  const cardNo = cardNoInput.value;
  const expMonth = expMonthInput.value;
  const expYear = expYearInput.value;
  const cvc = cvcInput.value;

  cardNameOutput.textContent = cardName;
  cardNoOutput.textContent = cardNo;
  expDateOutput.textContent = `${expMonth}/${expYear}`;
  cvcOutput.textContent = cvc;

  container1.classList.add("hidden");
  container2.classList.remove("hidden");
  container2.style.display = "flex";

  e.preventDefault()
});

continueBtn.addEventListener("click", function(){
  cardNameOutput.textContent = "";
  cardNoOutput.textContent = "";
  expDateOutput.textContent = "";
  cvcOutput.textContent = "";

  container1.classList.remove("hidden")
  container2.classList.add("hidden")
  container2.style.display = "none";
});
