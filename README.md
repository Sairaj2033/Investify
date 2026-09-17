# 📈 Investify – A Zerodha Clone

> A modern full-stack trading platform inspired by Zerodha, built to simulate stock investing, portfolio management, order placement, and market analysis.

<p align="center">

<a href="https://github.com/Sairaj2033/Investify">
<img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>

<br/>

<img src="https://img.shields.io/badge/JWT-Authentication-black?style=for-the-badge&logo=jsonwebtokens&logoColor=white"/>
<img src="https://img.shields.io/badge/bcrypt-Password%20Hashing-003B57?style=for-the-badge"/>
<img src="https://img.shields.io/badge/REST-API-02569B?style=for-the-badge"/>
<img src="https://img.shields.io/badge/React%20Charts-Data%20Visualization-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>

</p>

---

## 📖 About

**Investify** is a full-stack **Zerodha-inspired stock trading platform clone** built to simulate the core experience of an online investment application.

The project combines a modern React frontend with a Node.js + Express backend and MongoDB database to create an interactive environment for authentication, stock management, portfolio tracking, order management, and investment visualization.

Investify focuses on understanding how a real-world financial application can be structured from **frontend UI to backend APIs and database operations**.

> ⚠️ **Disclaimer:** Investify is an educational project inspired by modern trading platforms. It is not affiliated with, sponsored by, or connected to Zerodha.

---

## ✨ Highlights

<table>
<tr>
<td width="50%">

### 🔐 Secure Authentication

**JWT-based User Authentication & Authorization**

* JWT tokens
* Protected routes
* bcrypt password hashing
* Authenticated API requests

</td>

<td width="50%">

### 📊 Interactive Charts

**React-based financial visualization**

* Stock charts
* Portfolio visualization
* Investment analytics
* Profit & Loss tracking

</td>
</tr>

<tr>
<td>

### 📈 Trading System

**Simulated stock trading**

* Buy stocks
* Sell stocks
* Order management
* Holdings tracking

</td>

<td>

### 💼 Portfolio Management

**Track your investments**

* Holdings
* Quantity
* Average price
* Current value
* Profit / Loss

</td>
</tr>
</table>

---

## 🚀 Features

* 🔐 **JWT-based User Authentication & Authorization**
* 🔒 **bcrypt password hashing**
* 🛡️ Protected backend routes
* 📈 Interactive stock charts
* 📊 Financial data visualization using **React Charts**
* 💰 Simulated stock buying & selling
* 💼 Portfolio & holdings management
* 📋 Order management
* 🔎 Stock search and filtering
* 📊 Profit & Loss tracking
* 🌐 RESTful API architecture
* 🗄️ MongoDB database integration
* ⚛️ Reusable React components
* 📱 Responsive user interface
* ⚡ Fast frontend-backend communication

---

## 📊 Trading Dashboard

Investify provides a centralized trading interface where users can monitor their investments and interact with the simulated market.

```text
┌───────────────────────────────────────────────┐
│                  INVESTIFY                    │
├───────────────────────────────────────────────┤
│                                               │
│  💰 Portfolio Value       📈 P&L              │
│                                               │
│  ₹1,24,500                +₹8,420             │
│                                               │
├───────────────────────────────────────────────┤
│                                               │
│  📊 Market Chart                              │
│                                               │
│       ╭────╮                                  │
│      ╱      ╲        ╭──╮                    │
│  ───╯        ╰──────╯    ╰───                │
│                                               │
├───────────────────────────────────────────────┤
│  📈 Holdings       📋 Orders       💼 Portfolio│
└───────────────────────────────────────────────┘
```

---

## 🔐 Authentication & Authorization

Investify implements **JWT-based authentication and authorization** with **bcrypt password hashing**.

### Authentication Flow

```text
                    👤 USER
                       │
                       ▼
               ┌───────────────┐
               │ Signup / Login│
               └───────┬───────┘
                       │
                       ▼
               🔒 bcrypt Hashing
                       │
                       ▼
                 🗄️ MongoDB
                       │
                       ▼
                  Credential
                  Verification
                       │
                       ▼
                 🔑 JWT Token
                       │
                       ▼
             🛡️ Protected Routes
                       │
                       ▼
              📊 Trading Dashboard
```

### 🔒 Security Technologies

| Technology             | Purpose                        |
| ---------------------- | ------------------------------ |
| **bcrypt**             | Secure password hashing        |
| **JWT**                | Authentication & authorization |
| **Express Middleware** | Protected route handling       |
| **MongoDB**            | User data persistence          |
| **Mongoose**           | Database modeling              |

Passwords are hashed before storage rather than being stored as plain text.

---

## 📈 Data Visualization

Investify uses **React Charts** to visualize financial information and make market data easier to understand.

### 📊 Visualization Includes

* 📈 Stock price movements
* 💼 Portfolio performance
* 💰 Investment value
* 📉 Profit & Loss
* 📅 Historical price data

The chart-based interface provides a visual representation of market and portfolio information instead of relying only on numerical data.

---

## 🛒 Trading Workflow

```text
🔎 Search Stock
      │
      ▼
📊 View Stock Information
      │
      ▼
📈 Analyze Chart
      │
      ▼
🛒 Buy / Sell
      │
      ▼
📋 Create Order
      │
      ▼
💼 Update Holdings
      │
      ▼
📊 Update Portfolio
      │
      ▼
💰 Calculate P&L
```

---

## ⚙️ How It Works

```text
                👤 USER
                   │
                   ▼
          ┌─────────────────┐
          │   React Client  │
          │                 │
          │ Dashboard       │
          │ Charts          │
          │ Portfolio       │
          │ Orders          │
          │ Authentication  │
          └────────┬────────┘
                   │
              REST API
                   │
                   ▼
          ┌─────────────────┐
          │ Express Server  │
          │                 │
          │ Routes          │
          │ Controllers     │
          │ Middleware      │
          │ JWT Validation  │
          └────────┬────────┘
                   │
                   ▼
          ┌─────────────────┐
          │    MongoDB      │
          │                 │
          │ Users           │
          │ Stocks          │
          │ Orders          │
          │ Holdings        │
          └─────────────────┘
```

---

## 🧩 Key Technical Implementations

### 🔐 JWT Authentication

Implemented token-based authentication to protect user-specific resources and API endpoints.

### 🔒 bcrypt Password Security

Passwords are hashed using **bcrypt** before being stored in the database.

### 📊 React Charts

Used chart components to convert financial data into interactive visualizations.

### 🌐 REST APIs

Frontend and backend communicate through structured REST API endpoints.

### 🍃 MongoDB + Mongoose

MongoDB provides persistent data storage while Mongoose handles schemas and database operations.

### ⚛️ React Architecture

The frontend is organized into reusable components and pages for better maintainability.

---

## 🛠 Tech Stack

<p align="center">

<img src="https://skillicons.dev/icons?i=react,nodejs,express,mongodb,js,html,css,git,github,vscode,postman"/>

</p>

### 🎨 Frontend

* ⚛️ React
* 🟨 JavaScript
* 🌐 HTML5
* 🎨 CSS3
* 📊 React Charts
* 🧭 React Router

### ⚙️ Backend

* 🟢 Node.js
* 🚂 Express.js
* 🌐 REST APIs
* 🔑 JWT Authentication
* 🔒 bcrypt

### 🗄️ Database

* 🍃 MongoDB
* 🦫 Mongoose

### 🧰 Development Tools

* 🐙 Git
* 💻 GitHub
* 📝 VS Code
* 🚀 Postman

---

## 📂 Project Structure

```text
📦 Investify
│
├── 📁 client
│   ├── 📁 src
│   │   ├── 📁 components
│   │   ├── 📁 pages
│   │   ├── 📁 charts
│   │   ├── 📁 hooks
│   │   └── 📁 assets
│   │
│   └── 📄 package.json
│
├── 📁 server
│   ├── 📁 models
│   ├── 📁 routes
│   ├── 📁 controllers
│   ├── 📁 middleware
│   └── 📄 server.js
│
├── 📄 package.json
└── 📄 README.md
```

---

## 🧠 What I Learned

Building Investify helped me understand and implement:

* ⚛️ Full-stack React architecture
* 🌐 REST API development
* 🔐 JWT authentication
* 🔒 Password hashing with bcrypt
* 🗄️ MongoDB database management
* 🍃 Mongoose schemas & models
* 📊 Financial data visualization
* 🛒 Trading/order workflows
* 💼 Portfolio management
* 🔄 CRUD operations
* 🧩 Frontend-backend integration
* 🛡️ Protected API routes
* 📱 Responsive dashboard design

---

## 🚧 Challenges

### 🔐 Authentication

Implementing secure login, registration, password hashing, JWT generation, and protected routes.

### 📊 Financial Data

Structuring stock, holdings, order, and portfolio data in a way that can be efficiently displayed and updated.

### 📈 Data Visualization

Converting numerical market information into clear and interactive charts.

### 🔄 State Synchronization

Keeping portfolio, holdings, orders, and user information synchronized between the frontend and backend.

### 🎨 Trading UI

Creating a clean financial dashboard while maintaining responsive layouts across different screen sizes.

---

## 💡 Solutions

* 🔑 JWT-based authentication
* 🔒 bcrypt password hashing
* 🛡️ Middleware-protected routes
* 🍃 Mongoose data models
* 🌐 RESTful API architecture
* 📊 React-based chart components
* ⚛️ Reusable React components
* 🔄 Structured frontend-backend communication
* 📱 Responsive CSS layouts

---

## 🔮 Future Roadmap

* 📡 Real-time market data
* 📊 Advanced technical charts
* 🔔 Stock price alerts
* 📰 Financial news integration
* 🤖 AI-powered market insights
* 📈 Advanced portfolio analytics
* ⚡ WebSocket-based live updates
* 📱 Android & iOS application
* 🌐 Production deployment
* 🔔 Personalized notifications

---

## 🤝 Contributing

Contributions are welcome!

If you'd like to improve **Investify**, feel free to:

```text
1. 🍴 Fork the repository
2. 🌿 Create a feature branch
3. 💻 Make your changes
4. 📦 Commit your changes
5. 🚀 Push to your branch
6. 🔃 Submit a Pull Request
```

You can also open an **Issue** for bugs, improvements, or feature requests.

---

## 👨‍💻 Author

### Sairaj Patil

<p align="left">

<a href="https://github.com/Sairaj2033">
<img src="https://img.shields.io/badge/GitHub-Sairaj2033-181717?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:sairajpatil035@gmail.com">
<img src="https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
</a>

</p>

---

## ⭐ Support

If you find **Investify** useful or interesting, consider giving the repository a **⭐ Star** on GitHub!

<p align="center">

### 📈 Build. Invest. Learn. 🚀

**Investify — A Zerodha-inspired Full-Stack Trading Platform**

</p>
