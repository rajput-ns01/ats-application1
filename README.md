Table of Contents
Project Setup
Backend Setup
Frontend Setup
Application Usage
Creating a Rule
Evaluating a Rule
API Endpoints
Create Rule
Combine Rules
Evaluate Rule
Technologies Used
Project Setup
Prerequisites
Node.js and npm installed
MongoDB installed and running on mongodb://localhost:27017
Backend Setup
1.create new folder and navigate
cd rule-engine-ast

2.Install dependencies:
node index.js

3.Start MongoDB: Make sure MongoDB is running locally on mongodb://localhost:27017.

4.Run the backend server:
node index.js

The backend server will start at http://localhost:5000.

Frontend Setup
1.Navigate to the frontend folder:

2.Install dependencies:
npm install

3.Run the frontend server:
npm start

The frontend server will start at http://localhost:3000.

Application Usage
The application allows you to:

Create Rules with conditions like age > 30 AND department = 'Sales'.
Combine Rules to create complex rules.
Evaluate Rules against user data to check if they match the conditions.
Creating a Rule
Go to http://localhost:3000/create-rule.
Enter a rule in text format, such as age > 30 AND department = 'Sales'.
Click on Create Rule to store the rule in the database.
The response will show the AST representation of the created rule.
Evaluating a Rule
Go to http://localhost:3000/evaluate-rule.
Enter the ruleId of the rule you want to evaluate.
Enter user data in JSON format, such as:
{
  "age": 35,
  "department": "Sales",
  "salary": 60000,
  "experience": 3
}

Click on Evaluate Rule to get the result (true or false) based on whether the user data satisfies the rule.

API Endpoints
The backend provides the following endpoints:

1. Create Rule
URL: /api/rules/create
Method: POST
Request Body:
json
{
  "ruleString": "age > 30 AND department = 'Sales'"
}
Response:
json
{
  "message": "Rule created successfully",
  "rule": {
    "_id": "ruleId",
    "ast": { ...AST structure... }
  }
}
2. Combine Rules
URL: /api/rules/combine
Method: POST
Request Body:
json
   
{
  "ruleIds": ["ruleId1", "ruleId2"]
}
Response:
json

{
  "combinedAST": { ...AST structure of combined rules... }
}
3. Evaluate Rule
URL: /api/rules/evaluate
Method: POST
Request Body:
json
{
  "ruleId": "ruleId",
  "userData": {
    "age": 35,
    "department": "Sales",
    "salary": 60000,
    "experience": 3
  }
}
Response:
json
{
  "result": true
}
Technologies Used
Backend: Node.js, Express, MongoDB, Mongoose
Frontend: React, React Router
Database: MongoDB for storing rules and their ASTs
Other: JSON for rule and user data exchange
