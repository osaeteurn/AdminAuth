# AuthAdmin is a project I'm tinkering around with using SB Admin 4 Template and a Login system with the MEAN Stack

This original SB Admin can be download at:

Github: https://github.com/start-angular/SB-Admin-BS4-Angular-4

This starter project was also generated with [Angular CLI](https://github.com/angular/angular-cli) in the starter template.
The original SB Admin can be download at:

Github: https://github.com/start-angular/SB-Admin-BS4-Angular-4

This project was also generated with [Angular CLI] @ https://github.com/angular/angular-cli in the starter template.
I updgraded to the version below which I am using at the momment until v.5 releases:
- angular-v4.3.1
- angular/cli-v1.4.3

# Install Node use NPM
# Install Mongodb

# Steps I took
I downloaded the starter template.
- CD to folder 
- $ npm install
- then npm installed --save the following to my packages:

other dependencies and versions I added:
- "mongodb": "^2.2.31"
- "mongoose": "^4.11.11"
- "express": "^4.15.4"
- "passport": "^0.4.0"
- "passport-jwt": "^3.0.0"
- "jsonwebtoken": "^8.0.1"
- "bcryptjs": "^2.4.3"
- "body-parser": "^1.18.1"
- "core-js": "^2.4.1"
- "cors": "^2.8.4"

# output Angular Application to `dist` folder
$ ng build --dev
# started mongodb server in another tab
$ mongod
# started mongoose client in another tab
$ mongo
# started the frontend application on 'http://localhost:3000/'
$ node server (to start server) or $ nodemon (if you have it installed).
# Also you can make changes on the frontend application on 'http://localhost:4200/'
$ ng serve  
# you have to rebuild the dist folder when u make changes to Angulars frontend 
