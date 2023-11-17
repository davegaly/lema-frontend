
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

// App Initialization
let isValid = true;
console.log("App is Starting...");
console.log("Checking mandatory .env settings");
const settingsBackEndEndpointENV = process.env["REACT_APP_BACKEND_ENDPOINT"];
console.log("REACT_APP_BACKEND_ENDPOINT: " + settingsBackEndEndpointENV);
if (settingsBackEndEndpointENV == undefined) {
  console.log("Could not retrieve REACT_APP_BACKEND_ENDPOINT in .env file. Shutting down...");
  isValid = false;
}
console.log("All good");

const root = createRoot(document.getElementById('app'));

if (isValid == true) {
  root.render(
    <StrictMode>
      <App name="StackBlitz" />
    </StrictMode>
  );
}
else
{
  root.render("Startup error!");
}
