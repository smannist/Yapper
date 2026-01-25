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
  - TBD but toss up between Azure SQL Database and Azure Cosmos DB or a combination of these two
- Auth
  - Azure auth providors

The app is deployed on Microsoft Azure and can be found [here](https://y-front-g5edgsegdcemctbv.swedencentral-01.azurewebsites.net/).
