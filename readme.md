# Bulletin Board
A simple bulletin board where you can leave a message and which is populated dynamically from a database with pagination.

##### Technologies
HTML5 | CSS3 | JavasScript | Node.js | Express
React | Next.js | Styled Components | MongoDB | Mongoose

### Scope
##### What it was designed to do
+ Be a simple bulletin board
+ Allow a user to post a message with title and pick an avatar
+ An simple experiment in Next.js/SSR and Styled Components

##### What it wasn't designed to do
- Manage sessions or users
- Upload a picture of your own
- Be deployable, there's plenty of room for error handling but this is just a tech test

### Installation Notes
If you are looking to install this locally, please feel free to clone or download the repository. Modules are all included in the package.json but please note that you will need to have MongoDB installed locally as well. The populate file in the models folder is called from `server.js` to fill the database with dummy entries, please check the port setup though and be sure to uncomment lines 21 and 22 in `app.js`.
