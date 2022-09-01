# Node.js Rest APIs with Express & MySQL

Build endpoint Create, Read, Update, Delete (CRUD) for user list and patient with attribute:
```
users
{
    "id" string,
    "name" string,
    "age" integer,
    "birthDate" date
}

patient
{
    "id" string,
    "name" string,
    "address" string,
    "phone" number
}
```

## Criteria Endpoint
1. One user handled multiple user/patient.
2. Verify name user/patient are unique.
3. Validate input form user (alternative: class-validator)
4. Implement search feature from data list user and patient, showing list user and   patient where similiar each other.
   - exmaple `rom` -> search result `romi` and `romo`.
5. Using MySQL Database.
6. List endpoint patient from user perspektif, where user only view list patient in handled are.
7. List endpoint patient and user from admin perspektif, where admin can view all user and patient, and search feature by name.
8. Verify result only user/patient when method response API in operate.

## Project setup
```
npm install
```

### Run
```
node server.js
```

Project reference:
> [Build Node.js Rest APIs with Express & MySQL](https://www.bezkoder.com/node-js-rest-api-express-mysql/)
