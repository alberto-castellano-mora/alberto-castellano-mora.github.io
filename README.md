# 🌐 Alberto Castellano Mora’s Portfolio

This repository contains the code for my personal research portfolio.  
I’m not a professional web developer, but I built this site to showcase my work — and you can easily adapt it to create your own portfolio too!

🔗 **Live Demo:** [alberto-castellano-mora.github.io](https://alberto-castellano-mora.github.io/)  

---

## 🚀 Getting Started: Build Your Own Portfolio

Follow these steps to set up your own portfolio using this template.  

### 1. Prerequisites

Make sure you have the following installed:  

- A [GitHub account](https://github.com/signup)  
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)  
- [Visual Studio Code](https://code.visualstudio.com/download)  
- [Node.js](https://nodejs.org/en/download?utm_source=chatgpt.com)  
  - This potfolio was built using:
    - **Node:** v22.19.0 → check with `node -v`
    - **npm:** 10.9.3 → check with `npm -v`  

---

### 2. Clone the Repository

```bash
git clone https://github.com/alberto-castellano-mora/alberto-castellano-mora.github.io.git
```

Rename the folder if you’d like, e.g. your-name-portfolio.

---

### 3. Start your Build Process

```bash
npm run dev
```

Your app will be served locally at *http://localhost:xxxx*.

---

### 4. Customize Your Web Page

Here are the most important parts:

- In **package.json** file, update line.

``` json
"homepage": "https://alberto-castellano-mora.github.io/",
```

with:

``` json
"homepage": "https://your-user-name.github.io/",
```

- Change Alberto's name and experiences to your own.
- Add the images you'd like to assets and public folders.
- Customize the style in files index.css and other .css inside styles folder.

### 5. Install GitHub Pages

```bash
npm install gh-pages
```

### 6. Create a GitHub Repository

Name it exactly:

```lua
your-user-name.github.io
```

Example:

```lua
alberto-castellano-mora.github.io
```

### 7. Initialize & Push Your Code

Navigate to your project folder in your terminal and run:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

**Substitute the url with that of your project**

### 8. Deploy to GitHub Pages

Once you have pushed your code, run in your terminal:

```bash
npm run deploy
```

Steps 7 and 8 should have pushed your code to main and created a second Branch called gh-pages. The gh-pages branch is automatically created by the deploy script (npm run deploy). That branch only contains the built static files (index.html, JS bundles, CSS, etc.) that GitHub Pages serves. **⚠️ Never manually edit or push to gh-pages**.

### 9. View Your Site

Wait a few minutes to see your changes in *https://your-user-name.github.io/*

⏳ Changes may take a few minutes to appear. If you still see a 404 after ~5 minutes, try redeploying.

⚠️ If you still see a 404 after ~5 minutes try this:

1. Go to your github remote repository and click on **Settings**.
2. On the left menu, click on Pages
3. **Build and deployment** should be set to **Deploy from a branch** and the chosen branch should be **main**, not **None**.

### 10. Updating Your Site

Whenever you make changes, push them to main and re-deploy:

```bash
git add .
git commit -m "update portfolio"
git push
npm run deploy
```

## 📺 Extra Help

[This tutorial](https://www.youtube.com/watch?v=hn1IkJk24ow) provides additional guidance.

## 📜 License

This project is licensed under the MIT License — feel free to use and adapt it.
