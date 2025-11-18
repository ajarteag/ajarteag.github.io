# Alejandro's Portfolio Website

Personal portfolio website showcasing robotics, software engineering, and machine learning projects. Built with Jekyll for easy maintenance and GitHub Pages deployment.

## 🚀 Live Site

Visit: [https://ajarteag.github.io](https://ajarteag.github.io)

## 📋 Features

- **Project Showcase**: Organized by category (robotics, software, machine learning) and type (personal/team)
- **Filtering**: Dynamic filtering of projects by category and type
- **Blog**: Technical blog posts and updates
- **Responsive Design**: Mobile-friendly layout
- **SEO Optimized**: Built-in SEO tags and sitemap
- **Easy Maintenance**: Markdown-based content management

## 🛠️ Technology Stack

- **Jekyll**: Static site generator
- **GitHub Pages**: Hosting and deployment
- **Minima Theme**: Base theme with custom styling
- **Markdown**: Content writing

## 📁 Project Structure

```
.
├── _config.yml          # Site configuration
├── _layouts/            # Page templates
│   └── project.html     # Project detail layout
├── _projects/           # Project markdown files
├── _posts/              # Blog posts
├── about.md             # About page
├── index.md             # Homepage
├── projects.md          # Projects listing page
├── blog/                # Blog index
└── Gemfile             # Ruby dependencies
```

## 🚀 Local Development

### Prerequisites

- Ruby 3.x
- Bundler

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ajarteag/ajarteag.github.io.git
   cd ajarteag.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the local server:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser to `http://localhost:4000`

## ✏️ Adding Content

### Adding a New Project

1. Create a new markdown file in `_projects/`:
   ```bash
   touch _projects/my-new-project.md
   ```

2. Add front matter and content:
   ```yaml
   ---
   title: "Project Title"
   description: "Brief description"
   category: robotics|software|ml
   project_type: personal|team
   technologies:
     - Tech 1
     - Tech 2
   github_url: https://github.com/username/repo
   date: YYYY-MM-DD
   ---

   ## Project details go here...
   ```

### Adding a Blog Post

1. Create a new file in `_posts/` with the format `YYYY-MM-DD-title.md`:
   ```bash
   touch _posts/2024-11-18-my-blog-post.md
   ```

2. Add front matter and content:
   ```yaml
   ---
   layout: post
   title: "Post Title"
   date: YYYY-MM-DD HH:MM:SS -0800
   categories: category1 category2
   ---

   Post content here...
   ```

## 🎨 Customization

### Site Configuration

Edit `_config.yml` to update:
- Site title and description
- Contact information
- Social media links
- Base URL

### Styling

The site uses the Minima theme with custom CSS embedded in layout files. To customize:
- Edit styles in `_layouts/project.html`
- Modify `projects.md` and `blog/index.html` for page-specific styles

## 📦 Deployment

The site automatically deploys to GitHub Pages when you push to the main branch.

1. Make your changes
2. Commit and push:
   ```bash
   git add .
   git commit -m "Your message"
   git push origin main
   ```

3. GitHub Pages will build and deploy automatically

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.
