## Next Steps: Login and Registration
### 1. **Learn how to use hooks**
- ask gpt how they are similar to modules
- create a drive document on how to use them
- learn how to manage loading state potentially use finally block
- when creating your registration learn how to retrieve the response and route to home page if the response is positive

### 2. **Create User Registration**
- Set up a registration form with the following fields:
  - Username
  - Email
  - Password
- Ensure input validation for each field (e.g., valid email format, password strength).
- On successful registration, store user information in the database.
- Hash passwords before storing them for security.

### 3. **Create User Login**
- Set up a login form with the following fields:
  - Email
  - Password
- Authenticate the user using the stored credentials (e.g., comparing the hashed password).
- On successful login, generate and store a JWT token.

### 4. **Conditional Rendering Based on Login Status**
- Track login status using a global state (e.g., React Context or Redux) or by checking if a valid JWT is present.
- Conditionally render the following based on whether the user is logged in:
  - **Logged In**:
    - Show a "Logout" button.
    - Display user-specific content (e.g., wishlist, cart).
  - **Logged Out**:
    - Show "Login" and "Register" buttons.
    - Redirect to the login page for certain protected routes (e.g., profile, checkout).

### 5. **Secure Routes**
- Ensure that some routes are protected and can only be accessed by logged-in users.
- Redirect users to the login page if they attempt to access a protected route while logged out.
