# Technically-Social-API

## Description

This is a social network API that allows users to interact with various features such as creating, updating, and deleting users, thoughts, reactions, and friend connections. The API is built using Node.js, Express.js, and MongoDB with Mongoose as the ODM

## Installation

To run this application locally, please follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the following command: npm install
4. Set up a MongoDB database and update the database configuration in the .env file with your database connection details.
5. Run the application using the following command: npm start

## Building Blocks

The Technically Social API is built using the following technologies and frameworks:

1. Node.js: A JavaScript runtime environment that executes server-side code.
2. Express.js: A minimal and flexible web application framework for Node.js.
3. MongoDB: A NoSQL document database used for storing data.
4. Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js that provides a straightforward schema-based solution.


## Usage

Once the application is running, you can interact with the API using an HTTP client like Insomnia or Postman. The following routes are available:

1. GET /api/users: Retrieves all users from the database.
2. GET /api/users/:userId: Retrieves a specific user by their ID.
3. GET /api/thoughts: Retrieves all thoughts from the database.
4. GET /api/thoughts/:thoughtId: Retrieves a specific thought by its ID.
5. POST /api/users: Creates a new user. The request should include the necessary user details in the request body.
6. PUT /api/users/:userId: Updates an existing user by their ID. The request should include the updated user details in the request body.
7. DELETE /api/users/:userId: Deletes a user by their ID.
8. POST /api/thoughts: Creates a new thought. The request should include the necessary thought details in the request body.
9. DELETE /api/thoughts/:thoughtId: Deletes a thought by its ID.
10. POST /api/reactions/:thoughtId: Creates a new reaction to a thought. The request should include the necessary reaction details in the request body.
11. DELETE /api/reactions/:thoughtId/:reactionId: Deletes a reaction from a thought by their IDs.
12. POST /api/users/:userId/friends/:friendId: Adds a friend to a user's friend list. The request should include the IDs of the user and the friend.
13. DELETE /api/users/:userId/friends/:friendId: Removes a friend from a user's friend list. The request should include the IDs of the user and the friend.

***All data is exchanged in JSON format.***

## Features

The Technically Social API provides the following features:

* User management: Create, update, and delete users.
* Thought management: Create, update, and delete thoughts.
* Reaction management: Add and delete reactions to thoughts.
* Friend management: Add and remove friends from a user's friend list.

- You can see all these features in action by watching my demonstration video [here](https://photos.app.goo.gl/FZTRvjBZqa1KHBg37)!

***By using the provided routes and appropriate HTTP methods, you can effectively interact with the API and perform the desired operations on users, thoughts, reactions, and friendships.***

[Insomnia Overview](./Images/Insomnia.png)

## License

![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)

## Contact

If you have any questions about this application, please contact me at jadyngg19@gmail.com. You can find more of my work at https://github.com/Jadyngg19.
