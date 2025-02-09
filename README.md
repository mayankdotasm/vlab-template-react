# V-Lab React Template

This is a **React-based Virtual Lab (V-Lab) template** built with **Vite** for fast development and optimized performance. The template provides a structured layout with modular components for creating interactive virtual labs.

## 🚀 Features

- **Fast Development** – Powered by [Vite](https://vitejs.dev/) for instant hot module replacement (HMR).
- **Modular Structure** – Components are organized for easy customization.
- **Optimized Performance** – Vite's efficient bundling and lazy loading.
- **Customizable Components** – Includes sections like Aim, Theory, Procedure, Practice, Code, Applications, Quiz, References, and Team & Tools.

---

## 📌 Why Vite?

[Vite](https://vitejs.dev/) is a **next-generation frontend tooling** that provides:

- ⚡ **Blazing fast** build times compared to Webpack.
- 🔥 **Instant hot module replacement (HMR)** for smooth development.
- 📦 **Optimized production builds** with pre-configured Rollup.
- 🔄 **Automatic dependency pre-bundling** for faster startup.

---

## 📂 Project Structure

```
vlab-template-react/
├── public/          # Static assets (logos, icons, etc.)
├── src/             # Source code
│   ├── assets/      # Static files (images, icons, styles)
│   ├── components/  # Reusable React components
│   │   ├── common/  # Shared components (e.g., Header, Footer)
│   │   ├── modules/ # Lab sections
│   │   │   ├── Aim/
│   │   │   ├── Applications/
│   │   │   ├── Code/
│   │   │   ├── Practice/
│   │   │   ├── Procedure/
│   │   │   ├── Quiz/
│   │   │   ├── References/
│   │   │   ├── Results/
│   │   │   ├── TeamnTools/
│   │   │   ├── Theory/
│   ├── App.jsx      # Main application component
│   ├── main.jsx     # Entry point
│   ├── index.css    # Global styles
├── package.json     # Project metadata & dependencies
├── vite.config.js   # Vite configuration
└── README.md        # Project documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/mayankdotasm/vlab-template-react.git
cd vlab-template-react
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Development Server
```sh
npm run dev
```

### 4️⃣ Build for Production
```sh
npm run build
```

### 5️⃣ Preview Production Build
```sh
npm run preview
```

