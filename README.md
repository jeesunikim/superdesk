# Superdesk

Indepdent project I built as a student at Fullstack Academy. It's built on MEAN stack.

## Folder Structure
```
supermesh
├── /app
│   ├── /assets
│   │       ├── /images
│   │       ├── /javascripts (angular components)
│   │       │           ├── /add
│   │       │           │     ├── controller.js
│   │       │           │     └── service.js
│   │       │           ├── /barbarian
│   │       │           │     ├── controller.js
│   │       │           │     └── service.js
│   │       │           ├── /components
│   │       │           │     └── /modal
│   │       │           │           ├── directive.js
│   │       │           │           └── modal.html
│   │       │           ├── /edit
│   │       │           │     ├── controller.js
│   │       │           │     ├── directive.js
│   │       │           │     └── view.html
│   │       │           ├── /pwd
│   │       │           │     ├── controller.js
│   │       │           │     ├── directive.js
│   │       │           │     └── password.js
│   │       │           ├── /search
│   │       │           │     └── controller.js
│   │       │           ├── app.js
│   │       │           └── service.js
│   │       └── /stylesheets
├── /public (output folder)
└── /server
			├── /models (database model)
			│			└── barbarians.js
			├── /routes (express)
			│			└── index.js
			└── app.js (where server magic happens)
```

## Mongoose Model

### Barbarians Model
    - Name (String)
    - Department (String)
    - Seating (Object with number)
    - Executive (Boolean)

## How to start the app
1)
```
$ npm install
```

2)
```
$ npm start
```

3) Project should be on
```
http://localhost:3000/
```