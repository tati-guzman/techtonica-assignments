# Weather App

This weather app is a full-stack app that uses React and Vite for the front end and Express for the back end. It is connected to the OpenWeather API to render real-time data. Users are able to input a city name and receive temperature, humidity, and wind conditions for their city of choice.

## Installation

Follow these steps to run the weather app locally:

Open your terminal

Change directory to where you want to store the weather app

```
~/ cd new/Directory/on/your/machine
```

Clone this repository using the HTTPS URL

```
git clone https://github.com/tati-guzman/techtonica-assignments.git
```

Navigate into the weather app

```
cd ../weatherapp/
```

Install all relevant dependencies

```
npm install
```

Start the server - it should run on PORT 5002

```
node server.js
```

Open a new window for your terminal and navigate into the client folder

```
cd .../techtonica-assignments/weatherapp/client
```

Install all relevant dependencies

```
npm install
```

Navigate into the src folder

```
cd ../src
```

Start the front end - it should run on PORT 5173

```
npm run dev
```

Navigate to [http://localhost:5173](http://localhost:5173) to interact with the front end of the app.

### Demo

Landing Page:

![Screenshot 2024-09-03 at 3 28 39 AM](https://github.com/user-attachments/assets/df3abc18-5529-4a47-9756-79f7613a5a02)

Weather Data View:

![Screenshot 2024-09-03 at 2 24 32 AM](https://github.com/user-attachments/assets/2d393b8e-2a4c-426c-9637-5abe9c75c7d6)

## Built With

* [OpenWeather API](https://openweathermap.org/api) - API used to fetch real-time weather data
* [Visual Studio Code](https://code.visualstudio.com/) - Source code editor
* [JavaScript](https://www.javascript.com/) - Primary language used
* [HTML](https://html.com/) - Used to design web layout
* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
* [Express.js](https://expressjs.com/) as a web framework for Node.js

## Acknowledgements

* Techtonica & the H2 2024 Cohort
