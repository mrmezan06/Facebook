# Facebook Server

## Description

It is a custom server that can be used to create update delete user and run the facebook clone application.

## Email Validation (./helpers/Validation.js)

![Email Validation Snippet](./Email-Validation.png)

## Length Validation (./helpers/Validation.js)

![Length Validation Snippet](./Length-Validation.png)

## User Model Schema (./models/user.js)

![User Model Schema](./User-Model.png)

## Username Validation (./helpers/Validation.js)

![Username Validation](./Username-Validation.png)

## JWT Token (./helpers/token.js)

- Generate Token
  ![Generate From Controller](./Token_Generate.png)
- Token Generator
  ![JWT Token](./jwt-token.png)

## Email Verification (./helpers/mailer.js)

- UserController.js
  ![Email Verification From Controller](./Email-Verification.png)
- Mailer
  ![Mailer](./Mailer.png)

  ## Account Activation (./controller/user.js)

![Account Activation](./Account-activation.png)

## Server.js

![Server](./Server.png)

## Requirements

- [x] Node.js
- [x] Express.js
- [x] MongoDB
- [x] React.js

## Start

```javascript
cd backend
npm install
npm run server
```

```javascript
cd frontend
npm install
npm start
```

## Server Code

```javascript
200 - OK
201 - Created
202 - Accepted
204 - No Content
400 - Bad Request
401 - Unauthorized
403 - Forbidden
404 - Not Found
500 - Internal Server Error
501 - Not Implemented
502 - Bad Gateway
503 - Service Unavailable
504 - Gateway Timeout
505 - HTTP Version Not Supported
506 - Variant Also Negotiates
507 - Insufficient Storage
508 - Loop Detected
510 - Not Extended
511 - Network Authentication Required
599 - Network Connect Timeout Error
599 - Network read timeout error
```
