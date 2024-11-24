setInterval(function () {
  let cityJohannesburg = document.querySelector("#johannesburg");
  if (cityJohannesburg) {
    let dateJohannesburg = cityJohannesburg.querySelector(".date");
    let timeJohannesburg = cityJohannesburg.querySelector(".time");
    johannesburgData = moment().tz("Africa/Johannesburg");
    dateJohannesburg.innerHTML = johannesburgData.format("MMMM Do YYYY");
    timeJohannesburg.innerHTML = johannesburgData.format(
      "HH:mm:ss [<small>] A [</small>]"
    );
  }

  let cityTokyo = document.querySelector("#tokyo");
  if (cityTokyo) {
    let dateTokyo = cityTokyo.querySelector(".date");
    let timeTokyo = cityTokyo.querySelector(".time");
    tokyoData = moment().tz("Asia/Tokyo");
    dateTokyo.innerHTML = tokyoData.format("MMMM Do YYYY");
    timeTokyo.innerHTML = tokyoData.format("HH:mm:ss [<small>] A [</small>]");
  }

  let cityParis = document.querySelector("#paris");
  if (cityParis) {
    let dateParis = cityParis.querySelector(".date");
    let timeParis = cityParis.querySelector(".time");
    parisData = moment().tz("Europe/Paris");
    dateParis.innerHTML = parisData.format("MMMM Do YYYY");
    timeParis.innerHTML = parisData.format("HH:mm:ss [<small>] A [</small>]");
  }
}, 1000);

function changeCity(event) {
  let selectedTimezone = event.target.value;
  let nameChange = selectedTimezone.replace("_", " ").split("/")[1];
  let selectedTime = moment().tz(selectedTimezone);
  let mainCities = document.querySelector("#cities");
  mainCities.innerHTML = ` <div class="city">
          <div class="combined">
            <h2>${nameChange}</h2>
            <div class= "date">${selectedTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class= "time">${selectedTime.format(
            "HH:mm:ss [<small>] A [</small>]"
          )}</div>
        </div>`;
}

let selectedCity = document.querySelector("#selected-city");
selectedCity.addEventListener("change", changeCity);
