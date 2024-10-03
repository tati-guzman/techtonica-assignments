# The Daisy Diaries

The Daisy Diaries is a blog app that allows users to add blog posts with titles, written content, and one image. Created to fulfill Techtonica's Week 12 Blog Project, it uses Express, Node, and Postgres for the back-end, and React and Vite for the front-end. When downloaded, it will auto-populate with the first three posts about Daisy the Dog. NPM's Sentiment Package is used to create sentiment scores for each post and provide a border color based on the sentiment color.

## Installation

Follow these steps to run The Daisy Diaries project locally:

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

### Initial Wire Frame

*** ADD IN SCREENSHOT OF WIREFRAME ***

### Demo

*** ADD IN DEMO SCREENSHOT OR GIF ***

## Built With

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

[Visual Studio Code](https://code.visualstudio.com/) - Source code editor

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

[JavaScript](https://www.javascript.com/) - Primary language used

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

[HTML](https://html.com/) - Used to design web layout


![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

[Express.js](https://expressjs.com/) as a web framework for Node.js
[Multer middleware](https://expressjs.com/en/resources/middleware/multer.html) was used to upload files into the database correctly

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

[PostgreSQL](https://www.postgresql.org/docs/current/datatype-datetime.html) - Used for database design and implementation

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

[npm sentiment](https://www.npmjs.com/package/sentiment) - used for Sentiment Analysis of posts

## Future Features

- [ ] Log-in for different users to be credited as authors on their posts
- [ ] Update feature to allow for blog posts to be edited after initial posting
- [ ] Delete or archive feature to remove posts no longer needed
- [ ] Commenting capabilities 
- [ ] Increased use of the npm sentiment package to monitor comments
- [ ] More input fields for images and increased capability to style via user preference

## Acknowledgements

* Techtonica & the H2 2024 Cohort
* This magnificent [Medium Article](https://medium.com/@drshawnhart/handling-image-uploads-in-a-react-form-18e96548d496) written by Shawn Hart regarding image uploads in React