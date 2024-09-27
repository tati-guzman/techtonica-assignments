# 🐯 Tati's Terrific Trivia 🐯

This trivia app tests your animal knowledge! With 10 easy questions, answer True/False to find out if you're ready to be a zoologist. Using React and Vite for the front end and Postgres, Node, and Express for the back end, this app connects to the Open Trivia Database to pull 10 Easy True/False Animal questions and present them to the user one by one. Users are able to save their user name for a chance to be on the leader board of Top 10 Players! If they've played before, users can update their score as well.

## Installation

Follow these steps to run the trivia app locally:

Open your terminal

Change directory to where you want to store the trivia app

```
~/ cd new/Directory/on/your/machine
```

Clone this repository using the HTTPS URL

```
git clone https://github.com/tati-guzman/techtonica-assignments.git
```

Navigate into the trivia app

```
cd ../quiz-app/
```

Install all relevant dependencies

```
npm install
```

Restore DB Dump File

```
psql -f db.sql
```

Create a .env file

```
touch .env
```

Add in relevant configuration

```
DB_URI="postgresql://localhost/<nameofdatabase>
```

Start the server - it should run on PORT 5003

```
node server.js
```

Open a new window for your terminal and navigate into the client folder

```
cd .../techtonica-assignments/quiz-app/client
```

Install all relevant dependencies again

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

Navigate to [http://localhost:5173](http://localhost:5173) to interact with the front end of the app and play the game.

### Demo

#### Landing Page:

<img width="1334" alt="Screenshot 2024-09-06 at 12 28 39 PM" src="https://github.com/user-attachments/assets/d80565f3-9fad-444b-8be7-bf27dc9a52dc">


#### Question Example:

<img width="1236" alt="Screenshot 2024-09-06 at 12 28 57 PM" src="https://github.com/user-attachments/assets/4cbf4928-cb11-4648-903a-76ef71ae9615">


#### Final Message:

<img width="1264" alt="Screenshot 2024-09-06 at 12 29 12 PM" src="https://github.com/user-attachments/assets/c65ec555-f5f5-4159-85d8-c09786512cd4">


## Built With

* [Open Trivia Database](https://opentdb.com/api_config.php) - API used to fetch trivia questions
* [Visual Studio Code](https://code.visualstudio.com/) - Source code editor
* [JavaScript](https://www.javascript.com/) - Primary language used
* [HTML](https://html.com/) - Used to design web layout
* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
* [Express.js](https://expressjs.com/) as a web framework for Node.js

## Future Plans

Right now, Tati's Terrific Trivia can only be played on the easy setting. Future iterations will take user input to set the difficulty level to either easy, medium, or hard. Other ideas include to switch the answer choices to multiple choice and allow the user to decide that as well as they're gearing up for the quiz on the landing page. Eventual versions of this game will also allow for other trivia categories.

## Acknowledgements

* Techtonica & the H2 2024 Cohort
* Steve Irwin - forever grateful for the love of animals he helped instill in me!

