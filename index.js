var express = require("express");
const https = require("https");

const app = express();
// const bodyparser=require("body-parser")

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const city = req.body.cityInput;

  const apiKeys =
    "made your own api key from this website https://openweathermap.org/appid";
    
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  https.get(url, (resp) => {
    resp.on("data", (data) => {
      try {
        const weatherstatus = JSON.parse(data);
        const temperature = weatherstatus.main.temp;
        const condition = weatherstatus.weather[0].description;

        res.setHeader("Content-Type", "text/html");
        res.status(200);

        res.write(`
        <table style="
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        font-size: x-large;
        font-weight: bold;
        color:white;
        background-color: rgb(29, 166, 166);
        box-sizing: border-box;">
       
        <tr><td><i>City:</i><u>"${city}" </u></td>
       
        <tr><td><i> temperature:</i> <u> "${temperature} &#176;C"</u></td></tr>
        
        <tr><td><i> weather Condition:</i><u> "${condition}"</u> </td> </tr>
       
        </table>`);

        console.log(
          `the temperature in ${city} temperature is ${temperature} C weather is ${condition}`
        );
      } catch (error) {
        res.setHeader("Content-Type", "text/html");
        res.status(200);

        res.write(`<h3>please enter right city name<br>
              you entered: "${city}" is not a city <h3>`);
      }
    });
  });
});
app.listen(505, console.log(`server is listning`));
