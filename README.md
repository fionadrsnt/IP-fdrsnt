[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/0302N4UV)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12856539&assignment_repo_type=AssignmentRepo)

# My Full Stack Project!

My First Server App is an application to help you find the perfect job based on your resume. It performs standard CRUD actions based on RESTful concept.

## This App has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

## Tech Stack used to build this app:

- Node JS
- Express JS framework
- PostgreSQL
- Axios
- React

# RESTful endpoints

# POST/register

> Create new account

_Request Body_

```
{
    "fullName": "string",
    "email": "string",
    "password": "string",
    "phoneNumber": "string",
    "address": "string",
}
```

_Response (201 - Created)_

```
{
    "id": "integer",
    "email": "string"

}
```

_Response (400 - Bad Request)_

```
{
    "message": "fullName is required!"
}
OR
{
    "message": "Email is required!"
}
OR
{
    "message": "Password is required!"
}
OR
{
    "message": "Phone Number is required!"
}
OR
{
    "message": "Address is required!"
}
OR
{
    "message": "email must be unique"
}
```

# POST /login

_Request Body_

```
{
    "email": "string",
    "password": "string"
}
```

_Response (200 - OK)_

```
{
    "access_token": "string",
    "email": "string",
    "role": "string"
}
```

_Response (400 - Bad Request)_

```
{
    "message": "Email is required!"
}
OR
{
    "message": "Password is required!"
}
OR
{
    "message": "Invalid email/password"
}
```

# GET /adoptme

> Get all list of adopt-able animals
> _Request Headers_

```
{
    "authorization": "string"
}
```

_Response (200 - OK)_
