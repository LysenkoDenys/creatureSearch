# 🐉 RPG Creature Search App

A simple web application that allows users to search for RPG-style creatures by **name or ID** and view detailed information including stats, types, and special abilities. Built using **HTML**, **CSS**, and **Vanilla JavaScript**, with data fetched from a public [FreeCodeCamp Creature API](https://rpg-creature-api.freecodecamp.rocks/).

## 🚀 Features

- 🔍 Search for creatures by name or ID
- 📋 Displays creature stats: HP, Attack, Defense, Speed, etc.
- 🌈 Dynamic type coloring based on creature type
- 🎯 Real-time UI updates
- ⏳ Loading spinner for better UX
- 📱 Fully responsive design

## 🖼️ Demo

![App Screenshot](./screenshot.png) <!-- Replace with your actual screenshot file -->

## 📦 Technologies Used

- HTML5 & CSS3
- JavaScript (ES6)
- Fetch API
- Font Awesome (for icons)

## 🛠️ How to Run Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/rpg-creature-search.git
   cd rpg-creature-search
   ```

Open index.html in your browser:

bash
Копіювати
Редагувати
open index.html
Or use Live Server (recommended in VS Code).

🧪 Test Instructions
This project was designed to pass FreeCodeCamp's automated tests. The following behaviors are covered:

Search by name or ID (e.g. Pyrolynx, 2)

DOM elements update correctly with retrieved data

Displays correct types, including clearing previous ones

Alerts when an invalid creature is searched

📁 Project Structure
bash
Копіювати
Редагувати
.
├── index.html # Main HTML file
├── styles.css # App styling
├── script.js # JavaScript logic
├── README.md # This file
└── screenshot.png # Optional demo screenshot

🔮 Future Improvements
Add creature images

Debounced input with live search

Favorite creatures list (localStorage)

Accessibility enhancements (keyboard nav, ARIA)

📄 License
MIT — Feel free to use and modify.
