# WEATHER APP ⛅

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/JCarlosLucio/weather-app#readme)

> A weather forecast app using the OpenWeather API.  
> Developed for The Odin Project's
> [curriculum](https://www.theodinproject.com/lessons/node-path-javascript-weather-app).

## ✨ Demo

[![Weather App Homepage](../media/weather-app-desktop.webp?raw=true)](https://lucio-weather-app.netlify.app/)

## 📜 Docs

### Install

```sh
npm install
```

### Build

Builds the app for production to the `dist` folder.

```sh
npm run build
```

### Develop

Runs the app in development mode. Open
[http://localhost:5173/](http://localhost:5173/) to view it in the browser.

```sh
npm run dev
```

### Preview

Locally preview the production build. Open
[http://localhost:3000/](http://localhost:3000/) to view it in the browser.

```sh
npm run preview
```

### Lint

Run eslint to report linting errors.

```sh
npm run lint
```

## 🚀 Deployment

Deployed to [Cloudflare Pages](https://pages.cloudflare.com/).

1. `Connect to Git` in **Cloudflare Dashboard > Workers & Pages > Pages**.
2. Pick your `Git` hosting service. ex. `GitHub` / `Gitlab`.
3. Select your repository.
4. Pick your `Project name`.
5. Select the corresponding `Framework preset` in the build setting.
6. Add `Build command` ex. `npm run build`.
7. Add `Build output directory` ex. `dist`.
8. Add `Environment variables` from `.env.example`.
9. Deploy site.
10. Setup a Custom domain in **Custom domains**.

[More on deployment to Cloudflare Pages...](https://vitejs.dev/guide/static-deploy.html#cloudflare-pages)

### Triggering a Deploy

Deploys are triggered on `push` or `pull_request` merge to `master` branch.

## Lessons Learned

- Using asynchronous React with async/await.
- Using a Public API ([OpenWeatherAPI](https://openweathermap.org/)).
- Handling loading and errors states.
- Using environment variables in React.
- Using [CSS Modules](https://github.com/css-modules/css-modules) with
  [SASS](https://sass-lang.com/).
- Deploying to [Netlify](https://www.netlify.com/).
- Migrating from [CRA](https://create-react-app.dev/) to
  [Vite](https://vitejs.dev/).
- Migrating from [Netlify](https://www.netlify.com/) to
  [Cloudflare Pages](https://pages.cloudflare.com/).
- Deploying to [Cloudflare Pages](https://pages.cloudflare.com/).

## Author

👤 **Juan Carlos Lucio**

- Github: [@JCarlosLucio](https://github.com/JCarlosLucio)
