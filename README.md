**🌐 Personal Portfolio Website** **--Mohammad Akhtar Babu**

A modern, responsive portfolio website built using **React + Vite**, showcasing my projects, skills, and contact information.
Deployed seamlessly using GitHub Pages for free and fast hosting.

**🚀 Features**

* ⚡ Blazing fast performance with Vite
* 🎨 Responsive design for all devices
* 🧠 Clean and minimal UI/UX
* 🧰 Modular code structure for easy updates
* 🖼️ Projects section with live links and GitHub repos
* 📬 Contact form / social links integration

**🛠️ Tech Stack**

| Category               | Technology                                                      |
| ---------------------- | --------------------------------------------------------------  |
| **Frontend Framework** | [React](https://react.dev/)                                     |
| **Bundler**            | [Vite](https://vitejs.dev/)                                     |
| **Styling**            | CSS / Bootstrap / Styled Components *(depending on your setup)* |
| **Deployment**         | [GitHub Pages](https://pages.github.com/)                       |
| **Package Manager**    | npm                                                             |

**📁 Project Structure**
```
portfolio/
├── dist/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Aboutr.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
|   |   ├── Hero.jsx
|   |   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
│       └── index.css
├── vite.config.js
├── package.json
└── README.md
```

**⚙️ Setup Instructions**

**1️⃣ Clone the Repository**
```
 git clone https://github.com/Akhtar7890/portfolio.git
 cd portfolio
```

**2️⃣ Install Dependencies**
```
npm install
```

**3️⃣ Run Locally**
```
npm run dev
```
Open http://localhost:5173  to view it in your browser.

**🧱 Build for Production**
```
npm run build
```

This creates an optimized build in the **dist/** folder.

**🚀 Deploy to GitHub Pages**

Make sure you have **gh-pages** installed:

```
 npm install gh-pages --save-dev 
```
Then add the following to your **package.json:**

```
"homepage": "https://yourusername.github.io/portfolio/",

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Update your **vite.config.js:**

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
```

Finally, run:
```
npm run deploy
```

**Your portfolio will be live at:**
👉 https://yourusername.github.io/portfolio/

**🧑‍💻 Customization**

- Update your name, bio, and social links in the About.jsx or configuration file.
- Add new projects in Projects.jsx.
- Replace placeholder images in public/images/.
- Customize styling in src/styles/index.css or via Tailwind.


**💡 Future Enhancements**

- Add dark/light mode toggle
- Integrate email sending via EmailJS
- Add blog section
- Include animation effects using Framer Motion

**👨‍💻 Author**

Mohammad Akhtar Babu



