## Quick overview
    - the react application was generated using vite
    - the backend node application is using express as an api framework
    - there is only one endpoint on the express app, all of the logic for calculating a streak is in /node/src/streak.ts
    - note that there is no cors support, the vite development server proxies api calls to the express app. We can see the code for this in /react/vite.config.ts with the url for the express app hard coded
    - on the react app, the code for displaying the ui is in /react/src/App.tsx
    - there are some StyledComponents to make it look somewhat a little more pleasant

## To run

### Node Express
1. In the /node directory, run `npm install` if you haven't already
2. In the same directory, run `npm run dev` to start application. You should find it listening on port 3000, that 3000 is hard coded in /node/src/index.ts

### React
1. In the /react folder, run `npm install` if you haven't already
2. In the same directory, run `npm run dev`
3. For me, vite starts listening on `http://127.0.0.1:5173/` , which seems a bit random. It might be a different port on a different machine, but we should see it in the console. Click the link in there and you should land on the react app.