<p align="center">
  <picture>
    <source srcset="./client/public/img/yapper_dark.webp" type="image/webp" />
    <img src="./client/public/img/yapper_dark.png" alt="Yapper logo" width="220" />
  </picture>
</p>

<p align="center"><em>Yapper is a social media platform akin to X / Bluesky.</em></p>

## How is Yapper being built?

- Frontend
  - TypeScript + React
- Backend
  - "Serverless" structure -> Azure App Service / Functions
- Database
  - Azure DB for PostgreSQL
- Auth
  - JWT-based auth. Access token stored in localStorage.
- Ambitious ideas
  - Real time pub sub if its not too expensive?
  - Some kind of recommendation algos so user sees targeted Yaps?

The app is deployed on Microsoft Azure and can be found [here](https://y-front-g5edgsegdcemctbv.swedencentral-01.azurewebsites.net/).
