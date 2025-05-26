# HRMS Dashboard

A modern, responsive HR Dashboard web application built with Next.js (App Router), React 18, Tailwind CSS, Chart.js, and the React Context API.

## 🚀 Live Demo

Visit the live demo: [HRMS Dashboard](https://hrms-dashboard-flame.vercel.app/dashboard)

## 🚀 Features

- User authentication (login/logout)
- Dashboard with summary cards, charts, and quick actions
- Employee management (list, search, filter, CRUD, profile view)
- Analytics & reporting (charts, export stubs)
- Bookmarking system (global state, tabs, actions)
- Responsive, accessible, and animated UI
- Modular folder structure and best practices

---

## 🛠️ Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/jaswanthmoram/HRMS-Dashboard.git
cd HRMS-Dashboard
```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) (v16 or higher) and [npm](https://www.npmjs.com/) installed.

```sh
npm install
```

### 3. Run the Development Server

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 📁 Project Structure

```
src/
  app/           # Next.js App Router pages/routes
  components/    # Reusable React components
  context/       # React Context providers
  styles/        # Tailwind and global styles
  lib/           # Utility functions and libraries
public/          # Static assets
```

---

## ⚙️ Environment Variables

If your app uses environment variables, create a `.env.local` file in the root directory and add your variables there.  
Example:

```
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

---

## 🧑‍💻 Development

- All source code is in the `src/` directory.
- Use the Context API for state management (no Zustand).
- Tailwind CSS is used for styling and responsiveness.
- Chart.js is used for analytics and dashboard charts.

---

## 🏗️ Build for Production

```sh
npm run build
npm start
```

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
2. Click **"New Project"** and import your `HRMS-Dashboard` repo.
3. Click **"Deploy"**. Vercel will handle the rest!

### Other Platforms

- You can also deploy to Netlify, AWS, or any Node.js-compatible host.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)
