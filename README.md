Product Management Dashboard

A responsive product management dashboard built with React, Tailwind CSS, and Next.js. The dashboard includes search, sort, and filter features, along with a light/dark mode toggle for better accessibility.
🚀 Features

    Product Listings: View product details like title, brand, price, condition, views, likes, and uploaded user info.
    Search & Filter: Search products by title or brand, and filter by date (Today/Tomorrow).
    Sorting: Clickable table headers to sort data by title, brand, price, and more.
    Light/Dark Mode: Full theme support with automatic text and background adjustments.
    Responsive Design: Fully responsive layout that works across all devices.
    Interactive Icons: Filter and sort icons for better UI/UX.

🛠️ Tech Stack

    Frontend: React, Next.js, Tailwind CSS
    Images: Next.js Image component for optimized image loading
    🖥️ Getting Started

    Clone the repository:

git clone https://github.com/your-username/product-dashboard.git
cd product-dashboard

    Install dependencies:

npm install

    Run the development server:

npm run dev

    Open the app in your browser:

http://localhost:3000

⚙️ Environment Variables

Create a .env.local file in the root directory to store environment variables (if needed).

Example:

NEXT_PUBLIC_API_URL=http://your-api-endpoint.com

✅ Customization

You can easily customize the dashboard:

    Colors & Themes: Modify Tailwind CSS classes in components.
    Table Columns: Add or remove columns in ProductTable.tsx.
    Data Source: Replace the static product data with an API call.

🏁 Deployment

Deploy the app using platforms like Vercel, Netlify, or Render:

npm run build
npm start

🧑‍💻 Contributing

Contributions are welcome! Feel free to submit an issue or pull request.

    Fork the repo
    Create a new branch (git checkout -b feature-name)
    Commit your changes (git commit -m "Add new feature")
    Push the branch (git push origin feature-name)
    Open a pull request

📃 License

This project is licensed under the MIT License.