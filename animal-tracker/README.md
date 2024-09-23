# Animal Tracker

Animal Tracker is a full-stack app used by the pretend "TG Wildlife Research Center." It stores data around endangered animals, including species information, individuals being tracked, and recorded sightings. Notable features include the three forms (species, individuals, and sightings) as well as efficient navigation via the buttons in the navigation bar to switch between forms and components.

## Installation

Follow these steps to run the Animal Tracker app locally:

Open your terminal

Change directory to where you want to store Animal Tracker

```
~/ cd new/Directory/on/your/machine
```

Clone this repository using the HTTPS URL

```
git clone https://github.com/tati-guzman/techtonica-assignments.git
```

Navigate into the animal-tracker client directory

```
cd ./animal-tracker/client
```

Install all relevant dependencies

```
npm install
```

Navigate into the animal-tracker server directory

```
cd ../animal-tracker/server/
```

Install all relevant dependencies

```
npm install
```

Restore DB Dump file

```
psql -f db.sql
```

Create a .env file

```
touch .env
```

Add in relevant configuration

```
DB_URI="postgresql://localhost/<nameofdatabase>"
```

Start the app concurrently from server directory

```
npm run dev
```

Navigate to [http://localhost:5173](http://localhost:5173) to interact with the front end of the app.

### Demo

!(client/src/assets/Animal_Tracker_Screenshot.png)

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - Source code editor
* [JavaScript](https://www.javascript.com/) - Primary language used
* [HTML](https://html.com/) - Used to design web layout
* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
* [Express.js](https://expressjs.com/) as a web framework for Node.js
* [Bootstrap](https://getbootstrap.com/docs/4.0/components/buttons/) - Used for formatting
* [PostgreSQL](https://www.postgresql.org/docs/current/datatype-datetime.html) - Used for database design and implementation

## Future Features

- [ ] Images of endangered animals or individuals featured
- [ ] Additional styling -> cards will populate via grid
- [ ] Log-in capabilities to allow different users to log specific information
- [ ] Link to a ticket form in case of errors

## Acknowledgements

* Techtonica & the H2 2024 Cohort
* Background Image: [Pixabay](https://pixabay.com/illustrations/trees-field-hills-mountains-forest-7191822/)