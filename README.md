# ![logo](https://user-images.githubusercontent.com/30145681/112718115-386f1a80-8ef1-11eb-9a50-d0c9ffd422ab.png) Monkey Monday

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://blok-monke.herokuapp.com/)
[![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://blok-monke.herokuapp.com/)

![node-current](https://img.shields.io/node/v/npm)
![npm](https://img.shields.io/npm/v/npm)
![GitHub last commit](https://img.shields.io/github/last-commit/jortdus/blok-monke)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/jortdus/blok-monke)
![GitHub license](https://img.shields.io/github/license/jortdus/blok-monke)](https://github.com/jortdus/blok-monke/blob/main/LICENSE)

Block Tech Assignement; Focus on matching features and Node.JS

## What does it do?
This app focuses on providing an experience for steam users to connect to people with the same preferences. 

A user will login using their steamID or username and in the future with openID via steam. Data retrieved from the steamAPI will be filtered and send to a database and matched to that specific user. The user can than match his profile to other users and find a match based on a few parameters. 

## Table of Contents
* [Features](#features)
* [Usage](#usage)
* [Databse](#Database)
* [Contributors](#Contributors)
* [Support](#support)
* [Credits](#credits)
* [License](#license)

## Features
Retrieving information from the steamAPI.
Combining API retrieved data and user information into a scheme in a database.
Matching users based on API data.

## Usage
To clone and run this application, you need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/) (which comes with [npm](https://www.npmjs.com/)) installed on your computer. From your command line:

```bash
    # Clone this repository
    $ git clone https://github.com/jortdus/blok-monke.git
    # Go into the repository
    $ cd blok-tech

    # Install dependencies
    $ npm install

    # Run the app
    $ npm run start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Database
You will need to do a few more things to get it running, first you need to setup your database. You can do this by folowing the documentation of MongoDB. [here is the link](https://docs.mongodb.com/guides/server/drivers/) You will have to make a account/login, create a `cluter`, click on `collections`, and then on `create database`.

If you have a database you will have to create a .env file in the same folder where the sever.js is. 
Copy this and put it in your .env file
```
STEAMAPI=
HOST=
PORT=
DB_NAME= 
DB_CONNECTION_STRING=
```

To find the URI needed to connect to your database you will have to select connect when looking at a `cluster`, setup your `connection security`, select connect your application and you will see the link.

`STEAMAPI` is the steam API you have created for the app.

`HOST` is the host (can be localhost)

`PORT` is the port you will use

`DB_NAME` is the name of the database you created

and `DB_CONNECTION_STRING` is the connection string you can get from the MongoDB atlas.

The database will look something like this:
### Blogs
| Table | Type | Value |
| --- | --- | --- |
| _id | ObjectId | Id mongodb |
| name | string | maggness |
| title | string | star wars |
| message | string | Jij altijd met je starwars |

### persoons
| Table | Type | Value |
| --- | --- | --- |
| _id | ObjectId | Id mongodb |
| foto | string | https://steamcdn-a.akamaihd.net/steamcommunity/_medium.jpg |
| genre | string | MMORPG |
| gamertag | string | deaap2 |
| like | int32 | 1 |
| dislike | int32 | 4 |

### users
| Table | Type | Value |
| --- | --- | --- |
| _id | ObjectId | Id mongodb |
| username | string | maggness |
| steamID | string | 76561198076958988 |
| country | string | maggness has decided to not share this information |
| profilePicture | string | https://steamcdn-a.akamaihd.net/steamcommunity/public/images |
| gameGenre | string  | FPS |

## Support
If there is a problem, please contact us. we are happy to help! You can find our email's down at [Contributors](https://github.com/Jortdus/blok-monke/wiki/readme#Contributors)

## Contributors
Tim de Roller // [timderoller@gmail.com](timderoller@gmail.com)

Fabian Vis // [fabianvis988@gmail.com](fabianvis988@gmail.com)

Jort Broekhof 

Sietse Roos

## Credits
This project uses the following open source packages:

+ [Node.js](https://nodejs.org/en/)
+ [Npm](https://www.npmjs.com/)
+ [Nodemon](https://nodemon.io/)
+ [Express](http://expressjs.com/)
+ [Ejs](http://ejs.co/)
+ [Body-parser](https://www.npmjs.com/package/body-parser)
+ [Mongoose](https://mongoosejs.com/)

## License
Matching app is released under the [MIT](https://github.com/jortdus/blok-monke/blob/main/LICENSE)
