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
Create Database
```
CREATE TABLE user (
  id_user int(11) NOT NULL,
  name varchar(100) NOT NULL,
  age int NOT NULL,
  birth_date date NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at TIMESTAMP,
  PRIMARY KEY (id_user)
);

CREATE TABLE patient (
  id_patient int(11) NOT NULL,
  id_user int(11) NOT NULL,
  name varchar(100) NOT NULL,
  address varchar(100) NOT NULL,
  phone int NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at TIMESTAMP,
  PRIMARY KEY (id_patient),
  FOREIGN KEY (id_user) REFERENCES user(id_user)
);
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

## Criteria Endpoint
## Project setup
```
npm install
npm install express mysql body-parser
npm install express sequelize mysql2 cors --save
```

### Run
```
node server.js
```

Project reference:
> [Build Node.js Rest APIs with Express & MySQL](https://www.bezkoder.com/node-js-rest-api-express-mysql/)

> [Membuat RESTful API Node JS + Express + MySQL (CRUD)](https://medium.com/chevalier-lab/membuat-restful-api-node-js-express-mysql-crud-c4a1512600b6)

> [Membuat RESTful API Dengan Express.js, Sequelize.js dan PostgreSQL](https://medium.com/@nico26deo/membuat-restful-api-dengan-express-js-sequelize-js-dan-postgresql-cb14d045cefd)

> [Membuat Autentikasi JWT pada RESTful API dengan Express.js, Sequelize.js](https://medium.com/@nico26deo/membuat-autentikasi-jwt-pada-restful-api-dengan-express-js-sequelize-js-da623653abdd)
