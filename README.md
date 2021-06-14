# Express Scaffolding Cli

## How to install this ?

- npm i express-scaffolding-cli
- you can also install globally by typing this command i.e. npm i -g express-scaffolding-cli

## How to run this ?

- I'll prefer install this package globally and then simply type this command i.e. express-scaffolding-cli
- You can also use npx this is your choice.

## How to use this ?

- This is a very simple cli. First it will ask you a project name that you want to create.
- If you are already in the folder that you want to scaffold then simply add . which means scaffolding in the current folder.
- But if you want to create folder and then scaffold in that folder then you'll have to pass the folder name just a regular string this cli will automatically create a folder for you and all that scaffolding stuff. Happy Coding 😊❤️ .

## After Scaffolding Project

- Navigate to your project and then install all packages by typing this command i.e. npm install or npm i
- Go to default.json file in the config folder in the root of the project, add your database name in "connString"
- You can also change jwt secret key present in default.json file in the config folder. By the way this is just for development purposes but in production your "connString" and "secret" should not expose. And this is very simple fix. Simple create custom-environment-variables.json file and put on that. For more info checkout this [config docs](https://github.com/lorenwest/node-config) ...
- for development: run this command npm run dev. It will start the development server which uses nodemon for file changes .

## Features

- Custom Exception Classes e.g. NotFoundException, BadRequestException etc ..
- Catch Unhandle Exceptions. If you are not handling exceptions don't worry we'll catch all unhandle exceptions for you ..
- Mongodb Connection. We'll connect mongodb for you.
- express server boilerplate code.
- User Model which contains name, email, password field. We are also hash password before save into database.
- User registration and login.
- Generate jwt token after user login.
- IsAuthMiddleware for checking if user is logged in or not ...


## Request More Features
- If you want more features then go to this url [express-cli-tool](https://github.com/RanaJazim/express-cli-tool/issues) and open an issue. And then add what features you want. Thank you 😇 .