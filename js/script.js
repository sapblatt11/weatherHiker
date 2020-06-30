const KEY = "d9fd1b4d994374b15d15739b57bbd54c";
const LATITUDE = '44.0537';
const LONGITUDE = '-71.1284';

//const request = new Reqeust('https://api.openweathermap.org/data/2.5/onecall?lat=' + LATITUDE + '&lon=' + LONGITUDE + '&exclude=hourly, current, minutely&appid=' + KEY);

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + LATITUDE + '&lon=' + LONGITUDE + '&exclude=hourly, current, minutely&appid=' + KEY)
    .then(response => response.json())
    .then(data => console.log(data["daily"][1]["weather"]));