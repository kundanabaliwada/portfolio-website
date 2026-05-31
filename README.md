# Kundana Sri Baliwada Portfolio

A responsive personal portfolio website for a Computer Science AIML student interested in web technologies. The project includes a static frontend and an optional Express/MongoDB backend for contact form submissions.

## Features

- Responsive portfolio layout
- Hero section with profile, LinkedIn, GitHub, and resume links
- About, skills, internships, projects, and contact sections
- Contact form with frontend validation
- Express backend API for saving contact messages to MongoDB

## Tech Stack

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB

## Folder Structure

```text
portfolio-website/
  frontend/
    assets/
    index.html
    style.css
    script.js
    resume.pdf
  backend/
    models/
    routes/
    server.js
    package.json
    .env.example
```

## Run the Frontend

```bash
cd frontend
python -m http.server 5500
```

Open `http://localhost:5500`.

## Run the Backend

```bash
cd backend
npm install
copy .env.example .env
npm start
```

Set `MONGO_URI` in `backend/.env` before using the contact form.

## GitHub Setup

Create a new GitHub repository, then push this project:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/kundanabaliwada/portfolio-website.git
git push -u origin main
```

If you deploy only the frontend with GitHub Pages, use the `frontend` folder as the website source or copy its contents into the repository root.
