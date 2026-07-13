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

In command prompt:

```bash
npm run dev --host
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
"homepage": "https://your-username.github.io/",
```

- Change Alberto's name and experiences to your own (I recommend searching for the words "Alberto Castellano Mora" or "alberto-castellano-mora" and replacing it with your name).
- Add the images you'd like to assets and public folders.
- Customize the style in files index.css and other .css inside styles folder.

---

### 5. Install GitHub Pages

```bash
npm install gh-pages
```

---

### 6. Create a GitHub Repository

Name it exactly:

```lua
your-user-name.github.io
```

Example:

```lua
alberto-castellano-mora.github.io
```

---

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

---

### 8. Deploy to GitHub Pages

Once you have pushed your code, run in your terminal:

```bash
npm run deploy
```

Steps 7 and 8 should have pushed your code to main and created a second Branch called gh-pages. The gh-pages branch is automatically created by the deploy script (npm run deploy). That branch only contains the built static files (index.html, JS bundles, CSS, etc.) that GitHub Pages serves. **⚠️ Never manually edit or push to gh-pages**.

---

### 9. View Your Site

Wait a few minutes to see your changes in *https://your-username.github.io/*

⏳ Changes may take a few minutes to appear. If you still see a 404 after ~5 minutes, try redeploying.

⚠️ If you still see a 404 after ~5 minutes try this:

1. Go to your github remote repository and click on **Settings**.
2. On the left menu, click on Pages
3. **Build and deployment** should be set to **Deploy from a branch** and the chosen branch should be **main**, not **None**.

---

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

## 🧭 Let Google know your portfolio exists

Now that you have your portfolio published, you might have tried accessing it from google search and failed. Here are some tips for making your portfolio discoverable and indexable.

### 1. Make sure your site is indexable

- In your React app, add proper meta tags in **index.html**:
  - After adding the social media tags, you can test them in https://www.linkedin.com/post-inspector/ or in the tweet composer in https://x.com/
- Add an <*h1*> tag with your name on the homepage (e.g., <*h1*>Your Name</*h1*>). Google gives weight to this. (Already included in code)
- Customize the following files in */public* folder.
  - **404.html** which will sertve as a fallback.
  - **robots.txt**
  - **sitemap.xml** --> add here any extra sites you have created. This current portfolio only has the base and about pages.

### 2. Submit your site to Google

- Go to [Google Search Console](https://search.google.com/search-console/welcome)
- Choose “URL prefix” and enter your full site URL (include the trailing slash): *https://your-username.github.io/*

- Verify ownership using the HTML <*meta*> tag method (easiest method for GitHub Pages, uploading an HTML file will not work)
  - Google gives you a <meta name="google-site-verification" ...> tag. Copy it.
  - Replace this line inside your **index.html** file with your tag:

```html
<meta name="google-site-verification" content="efGeEOG95PK5m7aZDIhw5EBBgLPHeENKbXR6BilhkUI" />
```

- Push changes (this tag is not secret) and deploy again.

```bash
git add .
git commit -m "add verification tag"
git push
npm run deploy
```

- Then click Verify in Search Console.

- ⚠️ Do not remove this verification tag from your html. Aditionally, it is recommended to add multiple verifications. Take a look at *Settings>Property verification*

### 3. Submit your sitemap

Submit your customized sitemap.xml in the public/ folder to [Google Search Console](https://search.google.com/search-console/welcome).

- In Search Console, select your verified property (i.e. *alberto-castellano-mora.github.io*).
- In the left menu, click “Sitemaps”.
- Under “Add a new sitemap”, enter: "*sitemap.xml*", (Google will automatically resolve it as https://alberto-castellano-mora.github.io/sitemap.xml).
- Hit Submit. Google will start crawling it. You can check status later.
- ⚠️ Google sometimes reports “could not be read” if the sitemap was recently updated. Wait a few hours and refresh the submission page.

### 4. Improve discoverability

- Add your portfolio link to your LinkedIn, Twitter, GitHub profile, and email signature. Google will find it faster if it sees backlinks.

- Use your full name consistently across profiles so your site ranks when people search for it.

### 5. Be patient

Google might take a few days to a few weeks to show your site for your name, depending on competition and how unique your name is.

## 📜 License

This project is licensed under the MIT License — feel free to use and adapt it.
