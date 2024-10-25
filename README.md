Bank API’s Full stack Web Page

Bank API’s Backend
MicroServices:

UserService:
Model:
User ID: Unique.
Username: Unique.
Email: Email address.
Address: Useraddress.

EndPoints:
"http://localhost:8081/user"
GET /user: Retrieve users information 

"http://localhost:8081/user/{id}"
GET /users/{id}: Retrieve user information by username.

"http://localhost:8081/user/register" body with user information
POST /user/register: Register a new user.

"http://localhost:8081/user/login" body with user information
POST /user/login: Login user.

"http://localhost:8081/user/{id}"
PUT /users/{id}: Update user profile.

AccountService:
Model:
Account ID: Unique.
Account Name: Name of the bank.
Account Type: Type of the account.
Balance: Balance.
User Id: User Id.
Secrete password: Some password.

EndPoints:
"http://localhost:8082/accounts/register" body with bank details
Post /accounts/register: Register information of bank

"http://localhost:8082/accounts/user/{id}"
GET /users/{id}: Retrieve user’s bank information by userId.
















AccountService:
Model:
Transaction ID: Unique.
From Account Id: Id of the From bank.
Transaction Type: Type of the Transaction.
ToAccount Id: Id of the To bank.
Amount: Amount to send.
User Id: User Id.
Transaction Date: Date of the transaction done.

EndPoints:
"http://localhost:8082/transactions/register" body with transaction details
Post /accounts/register: Make Transaction.

"http://localhost:8082/transactions/user/{id}"
GET /users/{id}: Retrieve user’s Transactions information by userId.








Bank API’s Frontend


Home page without login:



Register Page:
Login Page:

Home Page After Login: 
DashBoard:Profile Page:
