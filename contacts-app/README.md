# Celebrity Contacts App

This contacts app is a simple app that allows users to input contact information such as name, phone number, email address, and birthday notes. It also has a feature to track whether or not users have been in contact recently with the person in the app. When downloaded, it will auto-populate with fake celebrity information that users can update to their real friends and family. The app contains a contact form to update contacts or create new ones.

## Installation

Follow these steps to run the Contacts App locally:

Open your terminal

Change directory to where you want to store the project

```
~/ cd new/Directory/on/your/machine
```

Clone this repository using the HTTPS URL

```
git clone https://github.com/tati-guzman/techtonica-assignments.git
```

Navigate into the contacts-app client directory

```
cd ./contacts-app/client
```

Install all relevant dependencies

```
npm install
```

Navigate into the contacts-app server directory

```
cd ../contacts-app/server/
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

*** ADD DEMO DETAILS ***

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - Source code editor
* [JavaScript](https://www.javascript.com/) - Primary language used
* [HTML](https://html.com/) - Used to design web layout
* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
* [Express.js](https://expressjs.com/) as a web framework for Node.js
* [PostgreSQL](https://www.postgresql.org/docs/current/datatype-datetime.html) - Used for database design and implementation

## Future Features

- [ ]Improved styling
- [ ] Smoother functionality switching between components (clean up code to reduce calls to database if not needed) 

## Acknowledgements

* Techtonica & the H2 2024 Cohort