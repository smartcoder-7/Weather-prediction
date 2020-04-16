The frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), Redux, and React-Bootstrp.
The backend was bootrapped with Node.js and Express.js.

## How to run the project

In the frontend directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

In the backend directory, you can run:

### `yarn serve`

Before running this command, please copy the .env.example as .env and fill the process environment variables with your own ones.
Make sure if the console shows the sercer running properly after excuting the command.

## Assumption

It seems like the free version of the [OpenWeatherMap](https://openweathermap.org/price) APIs doesn't support forecast data more than 5 days.
So, the result of choosing the best day for selling goods is about showing which goods today is the best for selling.

The dominant weather condition status is calculated based on 5 days/3hours forecast data. If a dominant weather condition occurs 5 times in a row, it shows the suggestion based on the dominant weather condition.
'Clouds' is for selling jackets and 'Rain' for selling umbrellas.
