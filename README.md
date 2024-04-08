# Test Assignment "Account Creation Form"

## Description

This project is a simple HTML page with a form for creating an account.
When the user clicks the "Create account" button, the form performs data validation:
* all fields must be filled,
* the email address must match the format name@example.com,
* the entered passwords match,
* also, for increased security, I added password complexity check.

If the input is invalid, an error message is displayed. If it is valid, a success message is displayed.

## Installation

1. Clone the repository to your local computer using the command `git clone git@github.com:juliavolk96/backend_create_account.git`.
2. Navigate to the project folder using the command `cd <project name>`.
3. Install all necessary dependencies using the command `npm install`.

## Server Launch

1. Start the server using the command `npm start`.
2. The server will be running at `http://localhost:5000`.

## API

POST `/api/signup`: Handles the account creation request.
Requires the following fields in the request body: `firstName`, `lastName`, `email`, `password`, `confirmPassword`, `dob`. Returns a success or error message.