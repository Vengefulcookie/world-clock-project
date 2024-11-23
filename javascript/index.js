setInterval(function () {
  let cityJohannesburg = document.querySelector("#johannesburg");
  let dateJohannesburg = cityJohannesburg.querySelector(".date");
  let timeJohannesburg = cityJohannesburg.querySelector(".time");
  johannesburgData = moment().tz("Africa/Johannesburg");
  dateJohannesburg.innerHTML = johannesburgData.format("MMMM Do YYYY");
  timeJohannesburg.innerHTML = johannesburgData.format(
    "HH:mm:ss [<small>] A [</small>]"
  );

  let cityTokyo = document.querySelector("#tokyo");
  let dateTokyo = cityTokyo.querySelector(".date");
  let timeTokyo = cityTokyo.querySelector(".time");
  tokyoData = moment().tz("Asia/Tokyo");
  dateTokyo.innerHTML = tokyoData.format("MMMM Do YYYY");
  timeTokyo.innerHTML = tokyoData.format("HH:mm:ss [<small>] A [</small>]");

  let cityParis = document.querySelector("#paris");
  let dateParis = cityParis.querySelector(".date");
  let timeParis = cityParis.querySelector(".time");
  parisData = moment().tz("Europe/Paris");
  dateParis.innerHTML = parisData.format("MMMM Do YYYY");
  timeParis.innerHTML = parisData.format("HH:mm:ss [<small>] A [</small>]");
}, 1000);
