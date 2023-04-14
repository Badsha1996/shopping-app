# Shopping app
## Client 
Open up your terminal using `Ctrl + alt + t` go to this project directory then type `cd client`. That will navigate you to client. Install all the dependencies using `npm install` then run `npm run dev` to start the client app. Alternatively you can run `npm run dev -- --host` to kickstart mobile version also. Note: use your own firebase config as i have not make .env file for the firebase

## Server 
Open up your terminal using `Ctrl + alt + t` go to this project directory then type `cd server`. That will navigate you to server.Install all the dependencies using `npm install` , Now run `npm start` or `npm run start`. you will get a message of *server is running at 3000*. One key thing to remember the server has a requrement of .env file which has stripe secrect key and port so set `STRIPE_SECRET_KEY` and `PORT` variable.

## Pages 
Api will run at http://localhost:4000/ and the app will run at http://localhost:5173/