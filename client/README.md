# Homework for Inbank

## Task

Please design a decision engine which takes in personal code, loan amount, loan period in months and returns a decision (negative or positive) and the amount.

The idea of the decision engine is to determine what would be the maximum sum, regardless of the person requested loan amount. For example if a person applies for 4000 €, but we determine that we would approve a larger sum then the result should be the maximum sum which we would approve. Also in reverse, if a person applies for 4000 € and we would not approve it then we want to return the largest sum which we would approve, for example 2500 €. If a suitable loan amount is not found within the selected period, the decision engine should also try to find a new suitable period. In real life the solution should connect to external registries and compose a comprehensive user profile, but for the sake of simplicity this part can be mocked as a hard coded result for certain personal codes. As the scope of this solution you only need to support 4 different scenarios - a person has debt or a person falls under a different segmentation.

For example :

49002010965 - debt
49002010976 - segment 1 (credit_modifier = 100)
49002010987 - segment 2 (credit_modifier = 300)
49002010998 - segment 3 (credit_modifier = 1000)

If a person has debt then we do not approve any amount. If a person has no debt then we take the identifier and use it for calculating person`s credit score taking into account the requested input.

Constraints:

Minimum input and output sum can be 2000 €
Maximum input and output sum can be 10000 €
Minimum loan period can be 12 months
Maximum loan period can be 60 months

Scoring algorithm. For calculating credit score a really primitive algorithm should be implemented. You need to divide the credit modifier with the loan amount and multiply the result with the loan period in months. If the result is less than 1 then we would not approve such sum, if the result is larger or equal than 1 then we would approve this sum.

credit score = (credit modifier / loan amount) \* loan period

As a result please provide working code with a single api endpoint and front-end application which uses the functionality. Also whenever possible share your thought process. If you have any additional questions, then please feel free to ask them.

## App

App calculates the following:

- if loan can be given (user has no debt)
- if selected amount can be given for the selected loan period
- if yes or no then how much would be the max amount for the selected period
- how much would be the montly installments to pay back (given 0 interest)

## Backend

To connect to DB, navigate to server directory and run:

### `nodemon index.js`

There are no relations between the user's data, so I opted for simple SQL database to store user data.
User data is stored as
\_id: ObjectId
userId: String
hasDebt: Boolean
creditModifier: Int32

Added cors to index.js to avoid CORS errors that would otherwise disallow get requests.

There are two Routes, I initially planned to create user authentication using [JWT](https://jwt.io/) and utilise getUserById, but due to time constraints opted for a simpler solution where all user data would be fetched with getAllUsers route.

## Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run the app navigate to the client directory and run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Not using Redux as the app is small.

### Routes

Created Route handling with errors with `react-router-dom`. If there is no handled route, it returns 404 error.

### Components

Each component has a single purpopse and is reusable.

### Pages

Divided into pages and reusablePages. Reusable ones can be used in multiple places. Split them for better organisation of files.

### Types

To cover the typescript needs.

### Utils

Include different calculations, formatter, custom hook etc.
