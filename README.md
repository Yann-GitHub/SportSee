# SportSee - Analytics dashboard with React

This repository contains all the source code required to run the SportSee app, an analytics dashboard that helps you visualize and analyze your sports performance data.

## 1. General information

In this documentation, we will provide instructions on how to easily launch the frontend project. Please note that this frontend project is connected to a backend API service which also needs to be launched locally.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 2. Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) or [Npm]()
- IDE (VSCode, IntelliJ, ...)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

## 3. Getting Started

### 3.1 Backend Api

The SportSee app relies on a backend API to retrieve data. You can find the source code for the backend API at the following URL: https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.

To run the SportSee app, you will need to have the backend API running locally as well. Please follow the instructions in the backend API repository's README file to set up and run the API locally.

Once the backend API is up and running, you can start the SportSee app by following the instructions in the "Installing" section of this README file.

The backend will be available at http://localhost:3000.

### 3.2 Frontend App

**A/ Dependencies**

This project also has the following dependencies:

```bash
@testing-library/jest-dom: ^5.16.5
@testing-library/react: ^13.4.0
@testing-library/user-event: ^13.5.0
prettier: ^2.8.4
prop-types: ^15.8.1
react: ^18.2.0
react-dom: ^18.2.0
react-router-dom: ^6.9.0
react-scripts: 5.0.1
recharts: ^2.4.3
sass: ^1.59.2
web-vitals: ^2.1.4
jsdoc: ^4.0.2
```

Please ensure that you have these dependencies installed and up-to-date before running the app.

**B/ Installing**

- Clone this repository using the following command:

```bash
git clone git@github.com:Yann-GitHub/sportsee.git
```

- Install the dependencies by running the command:

```bash
npm install or yarn install
```

**C/ Running the app**

- Runs the app in the development mode by running the command:

```bash
npm start or yarn start
```

Open [http://localhost:4000](http://localhost:4000) to view it in your browser.
The page will reload when you make changes. You may also see any lint errors in the console.

## 4. Documentation

JSDoc documentation is available for this project, providing detailed information about the functions, parameters, and return types of the source code. To access the documentation, navigate to the doc folder in the root directory of the frontend project.

You can generate the documentation by running the following command in the terminal:

```bash
npm run jsdoc
```

This will generate the JSDoc documentation in the doc folder, which you can then open in your browser to view the documentation.

Note: Please ensure that you have installed all the dependencies listed in the package.json file before generating the documentation.
