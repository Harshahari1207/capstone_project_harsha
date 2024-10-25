# Bank API Full Stack Web Application

## Backend Microservices

### 1. UserService

#### Model:
- **User ID**: Unique.
- **Username**: Unique.
- **Email**: Email address.
- **Address**: User's address.

#### Endpoints:

- **GET** `/user`
  - Description: Retrieve all users' information.
  - URL: `http://localhost:8081/user`

- **GET** `/user/{id}`
  - Description: Retrieve user information by user ID.
  - URL: `http://localhost:8081/user/{id}`

- **POST** `/user/register`
  - Description: Register a new user with user information.
  - URL: `http://localhost:8081/user/register`
  - Body:
    ```json
    {
      "username": "exampleUser",
      "email": "user@example.com",
      "address": "123 Main St, City"
    }
    ```

- **POST** `/user/login`
  - Description: Login a user with username and password.
  - URL: `http://localhost:8081/user/login`
  - Body:
    ```json
    {
      "username": "exampleUser",
      "password": "examplePassword"
    }
    ```

- **PUT** `/user/{id}`
  - Description: Update user profile by user ID.
  - URL: `http://localhost:8081/user/{id}`
  - Body:
    ```json
    {
      "email": "newemail@example.com",
      "address": "456 New St, New City"
    }
    ```

---

### 2. AccountService

#### Model:
- **Account ID**: Unique.
- **Account Name**: Name of the bank.
- **Account Type**: Type of the account (e.g., Savings, Checking).
- **Balance**: Account balance.
- **User ID**: Linked User ID.
- **Secret Password**: Some password for account security.

#### Endpoints:

- **POST** `/accounts/register`
  - Description: Register a new bank account with account details.
  - URL: `http://localhost:8082/accounts/register`
  - Body:
    ```json
    {
      "accountName": "ABC Bank",
      "accountType": "Savings",
      "balance": 1000,
      "userId": 1,
      "secretePassword": "mySecret123"
    }
    ```

- **GET** `/accounts/user/{id}`
  - Description: Retrieve user's bank account information by user ID.
  - URL: `http://localhost:8082/accounts/user/{id}`

---

### 3. TransactionService

#### Model:
- **Transaction ID**: Unique.
- **From Account ID**: ID of the sending bank account.
- **Transaction Type**: Type of transaction (e.g., Transfer, Deposit).
- **To Account ID**: ID of the receiving bank account.
- **Amount**: Amount to transfer.
- **User ID**: Linked User ID.
- **Transaction Date**: Date the transaction was made.

#### Endpoints:

- **POST** `/transactions/register`
  - Description: Create a new transaction.
  - URL: `http://localhost:8082/transactions/register`
  - Body:
    ```json
    {
      "fromAccountId": 1,
      "toAccountId": 2,
      "transactionType": "Transfer",
      "amount": 200,
      "userId": 1,
      "transactionDate": "2024-10-24T12:30:00"
    }
    ```

- **GET** `/transactions/user/{id}`
  - Description: Retrieve user's transaction information by user ID.
  - URL: `http://localhost:8082/transactions/user/{id}`

---

## Frontend Pages

### 1. Home Page (Without Login)

- Basic homepage with navigation options to login or register.

![Screenshot 2024-10-25 085848](https://github.com/user-attachments/assets/d3add974-acb8-4cc6-a3b9-446a2b1fdf82)


### 2. Register Page

- Allows new users to create an account by submitting the registration form.
![Screenshot 2024-10-25 085818](https://github.com/user-attachments/assets/114a3d11-8d31-4ec1-a21b-31ed009cb7ba)
![Screenshot 2024-10-25 085827](https://github.com/user-attachments/assets/617f1f99-bd6a-4f1e-9698-b9cb9c4aa89a)

### 3. Login Page

- User login page with form to enter credentials and authenticate.
![Screenshot 2024-10-25 085848](https://github.com/user-attachments/assets/a8270a46-8430-4b3a-9def-a0ed3f4b65ad)

### 4. Home Page (After Login)
- Displays user-specific information like account details and recent transactions after successful login after navigation to the dashboard we can find that.
![Screenshot 2024-10-25 085859](https://github.com/user-attachments/assets/2447ed0c-8172-450f-956b-6f558bfada35)

### 5. Dashboard
- User dashboard to view linked accounts, and transaction history.
![Screenshot 2024-10-25 085920](https://github.com/user-attachments/assets/1ec0ab9d-5486-43f2-91ce-abe844113449)
![Screenshot 2024-10-25 085957](https://github.com/user-attachments/assets/a6cef4ee-ea81-4f0e-ae37-d306900a321b)
![Screenshot 2024-10-25 090009](https://github.com/user-attachments/assets/54ccaac7-e44d-4143-a87e-41be5026b811)
![Screenshot 2024-10-25 090019](https://github.com/user-attachments/assets/32c150a4-d632-48f1-9ba3-af09b199e6c8)

### 6. Profile
- User Profile management
![Screenshot 2024-10-25 090031](https://github.com/user-attachments/assets/bb68cc05-24a3-4566-b52b-aafdd574478f)
![Screenshot 2024-10-25 090041](https://github.com/user-attachments/assets/7f548d45-330c-4bcb-be81-d2c6e76b916c)

---
### Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/Harshahari1207/capstone_project_harsha.git
    ```

2. Backend:
    - Run `UserService`, `AccountService`, and `TransactionService` on respective ports.

3. Frontend:
    - Navigate to the frontend folder and start the React app.

    ```bash
    cd BankOfApis_Frontend
    npm install
    npm npm run dev
    ```

---

### Technologies Used

- **Backend**: Spring Boot (Microservices)
- **Frontend**: React.js
- **Database**: MySQL
