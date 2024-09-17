# Eventonica

Eventonica is full-stack web app that uses React and Vite for the front end and Express for the back end. It is connected to a local database to store event data. Users are able to manage Techtonica events with features such as create, update, delete, and search. Each event has a "Category" feature to allow for better organization and classification. The Search bar will query events with matching characters in the event title or category. With this app, Techtonica's Event Manager will be able to keep important details such as location, date, time, and descriptions organized and efficiently stored in a local database.

## Installation

Follow these steps to run the Eventonica app locally:

Open your terminal

Change directory to where you want to store Eventonica

```
~/ cd new/Directory/on/your/machine
```

Clone this repository using the HTTPS URL

```
git clone https://github.com/tati-guzman/techtonica-assignments.git
```

Navigate into the eventonica client directory

```
cd ./eventonica/client/
```

Install all relevant dependencies

```
npm install
```

Navigate into the eventonica server directory

```
cd ../eventonica/server/
```

Install all relevant dependencies

```
npm install
```

Create a PostgreSQL Database and update the connection details in a .env file 
```
DB_URI="postgresql://localhost/your_database_name"
```

Start the app concurrently

```
npm run dev
```

Navigate to [http://localhost:5173](http://localhost:5173) to interact with the front end of the app.

### Demo

<img width="1903" alt="Screenshot 2024-09-16 at 9 51 59 PM" src="https://github.com/user-attachments/assets/18d5a0b7-a242-4e4d-a1d8-85c0b53fe028">


## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - Source code editor
* [JavaScript](https://www.javascript.com/) - Primary language used
* [HTML](https://html.com/) - Used to design web layout
* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
* [Express.js](https://expressjs.com/) as a web framework for Node.js

## Future Features

- [ ] README: More information on how to create a PostgreSQL Database or db_dump file
- [ ] Event time will be included in form and displayed appropriately
- [ ] Favorite: User will be able to favorite and un-favorite events
- [ ] Updated Design: "Create Event" and "Update Event" form will only render if needed and Search Bar will be located in the Nav Bar

## Acknowledgements

* Techtonica & the H2 2024 Cohort

