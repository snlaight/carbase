# CARBASE

## SCRIPTS

in order to start the application, run `npm run dev` in the root folder of the project. This will start the application and open a browser window.

## CONTRIBUTING

There is a `jsconfig.json` file in the root folder which applies some structure to the project. This means that when you are importing different parts of the application, you can use the `@components` folder to import the components. The same applies for other folders of the project.

When building custom components, please make sure to add them to the `index.js` file inside the `components` folder so that they can be imported directly from the `@components` root.

