## Backend Project
***install 

ejs
cookie-session
express
helmet
passport passport-local
sequelize
pg pg-hstore
bcryptjs
set express app

public folder
views folder
routes folder
login.js
registration.js
index.js
app.js
Registration

create form
gather information from submitted form and insert data to db
post route
parser to get info from header
registering username, and password
bcrypt to encrypt password
Build DB (sequelize)

user table: username, password, email
run sequelize init
configure db inside config/config.json
run sequelize db:create
generate a model (init.bash)
run bash init.bash
freeze table name (optional)
setup associations - inside models folder
modify migration to reflect foreign key (REFERENCES)
run migration (sequelize db:migrate)








#### The requirements for this group project are to generate a webpage using Express and PostgreSQL

## Group Members
* [The Team](#the-team) 
* [The Team](#the-team)
* [About the Project](#about-the-project)   
* [Built With](#built-with)               
* [MVP (Minimum Viable Product)](#mvp-minimum-viable-product)
* [Stretch Goals](#stretch-goals)
* [Challenges and Solutions](#challenges-and-solutions)
* [Code Snippets](#code-snippets)
* [Screenshots](#screenshots)


## The Team

<strong> Bogdan: https://github.com/bblach3 </strong>

Primary team role: Pulling API, What Db we are using

<strong> Destiny: https://github.com/Destinyaaiyana </strong>

Primary team role: Doing login js with routes set up

<strong> Anjunique Sampson: https://github.com/sampsonnene </strong>

Primary team role: In charge of Github pulling, cloning merging, Gathering info for API

<strong> Jennifer: https://github.com/jgrillo36 </strong>

Primary team role: Project Manager

<strong> Lorenzo: https://github.com/WilliamsAL218 </strong>

Primary team role: xxx xxx xx xxx x


- Format login homepage
     * Express for HTTP framework

- Create database in PostgeSQL
     * 3 tables with model classes
     * 2 tables related via foreign keys

- User login
     * bcrypt encryption

