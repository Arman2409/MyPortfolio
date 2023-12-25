# Frontend
The client side of the project was made with React.js and TypeScript.The TypeScript code is located at the /data folder, from where it is transpiled into the /src folder, except for styles, which is already in the src folder.There is also one more exception, which is the Header.jsx file in /data folder, which is written in JavaScript, instead of TypeScript, and this file should be copied or bundled to /src folder manually.

### To transpile TypeScript
>>> tsc --w

### To start the project 
>>> npm run start