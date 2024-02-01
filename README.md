# Build a basic version of PayTM
Welcome to the Paytm Clone project! This project is a React-based MERN web application that emulates some of the basic functionalities of the Paytm platform. Users can sign up, log in, view a list of all users, search for specific users, send money, and then navigate back to the dashboard.

# Table of Contents
- [Features](#features)
- [Preview Video](#preview-video)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Contributing](#contributing)

## Preview Video
![](./preview.gif)

## Features

#### User Authentication:

Users can sign up and log in securely using bcrypt for password hashing.
JSON Web Tokens (JWT) are utilized for secure authentication.

#### User Management:

View a list of all users.
Search for specific users based on their details.
Money Transfer:

#### Users can send money to other users.
Responsive Design:

The UI is designed using React and styled with Tailwind CSS, providing a responsive and visually appealing experience.

#### Concurrent Development:

Concurrently is used to run both frontend and backend servers simultaneously.

## Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js
npm
MongoDB

## Installation
* Clone the repository :
``https://github.com/Amritpal-Kaur0/PAYTM``
* cd ``paytm-clone``
* ``npm run install``
* Create a ``.env`` file in the backend directory and configure it with your ``MongoDB_URI`` and ``JWT_SECRET``
* npm run develop

## Contributing
Contributions are welcome! Feel free to submit issues and pull requests.

* Fork the repository.
* Create a new branch for your feature or bug fix: git checkout -b feature/new-feature.
* Make your changes and commit them: git commit -m "Add new feature".
* Push your branch to your fork: git push origin feature/new-feature.
* Create a pull request, describing your changes and mentioning the issue it fixes (if applicable).


