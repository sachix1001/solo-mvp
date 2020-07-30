This was created during my time as a student at Code Chrysalis. as a Solo MVP Project.

## Ghibli Movie Recommendation


See it deployed  [here 👈](https://solo-mvp-sachi.herokuapp.com/).
<img "https://github.com/sachix1001/Totoro-solo-mvp/blob/master/ReactApp.gif" width="150"  />

### what is this?
This is Ghibli movie recommendation app.
when you select your favourite Ghibli movie, it reorders all movies by recommendation. 

### what is the logic?
A recommendation will be made based on content-based recommender system. It recommends close feature movies.
https://www.npmjs.com/package/content-based-recommender

### Tech used
- React (https://github.com/facebook/create-react-app)
- Redux
- Material-UI (https://material-ui.com/)
- Express
- Node
- Postgres
- Heroku

## 

## Installing Dependencies and Starting Up
Fork the app and git clone in your local computer.

First, install the dependencies for this project:
```
yarn start
```

create a database called movie
```
CREATE DATABASE movie
```

Create a table in your database
```
yarn knex migrate:latest
```
Seed your table
```
yarn knex seed:run
```
To run the app in development mode with hot-reloading:
```
yarn start
```


