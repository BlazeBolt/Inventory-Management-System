# 📦 Inventory Management System

A simple Inventory Management System built using **HTML**, **CSS**, **JavaScript**, and **PHP** that allows users to **add**, **fetch**, and **delete** inventory data. The application connects to a **dynamically created MySQL database**, making it lightweight and easy to deploy.

---

## 🛠️ Features

- ✅ Add new inventory items (name, quantity, price, etc.)
- 📄 Fetch and display all items from the database
- ❌ Delete items from the inventory
- 🧠 Automatically creates required database and tables on first run
- 💡 Interactive UI built with vanilla HTML, CSS, and JS

---

## 💻 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: PHP (Procedural or OOP, depending on implementation)
- **Database**: MySQL (via `mysqli` or `PDO`)

---

## 📁 Project Structure

inventory-management-system/
│
├── index.html # Main frontend UI
├── style.css # Stylesheet for layout and design
├── script.js # JavaScript for interactivity
├── db.php # Database connection and creation logic
├── add.php # PHP script to add new item
├── fetch.php # PHP script to retrieve all items
├── delete.php # PHP script to delete an item
└── README.md # Project documentation

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/inventory-management-system.git
cd inventory-management-system
2. Setup your local environment
Make sure you have PHP, MySQL, and Apache installed (e.g., via XAMPP).

Start Apache and MySQL servers.

3. Place the project in the web server root
Copy or move the folder into your server's root directory:
XAMPP: htdocs

4. Access the app via browser
