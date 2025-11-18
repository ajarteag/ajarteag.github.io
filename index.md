---
layout: default
title: Home
---

<div class="home">
  <h1 class="page-heading">Welcome to My Portfolio</h1>

  <p>
    I'm Alejandro Arteaga, a passionate engineer specializing in robotics, software engineering, and machine learning.
    This site showcases my journey through various personal and team projects where I build intelligent systems and innovative solutions.
  </p>

  <h2>Featured Areas</h2>
  <ul>
    <li><strong>Robotics:</strong> Building autonomous systems and robotic applications</li>
    <li><strong>Software Engineering:</strong> Creating scalable and maintainable software solutions</li>
    <li><strong>Machine Learning:</strong> Developing intelligent algorithms and data-driven applications</li>
  </ul>

  <h2>Recent Projects</h2>
  {% if site.projects.size > 0 %}
    <div class="project-list">
      {% for project in site.projects limit:6 %}
        <div class="project-item">
          <h3>
            <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
          </h3>
          <p class="project-meta">
            <span class="project-category">{{ project.category }}</span> | 
            <span class="project-type">{{ project.project_type }}</span>
          </p>
          <p>{{ project.description }}</p>
          {% if project.technologies %}
            <p class="technologies">
              <strong>Technologies:</strong> {{ project.technologies | join: ", " }}
            </p>
          {% endif %}
        </div>
      {% endfor %}
    </div>
    <p><a href="{{ "/projects/" | relative_url }}" class="button">View All Projects →</a></p>
  {% else %}
    <p>Projects coming soon...</p>
  {% endif %}

  <h2>Latest Blog Posts</h2>
  {% if site.posts.size > 0 %}
    <ul class="post-list">
      {% for post in site.posts limit:3 %}
        <li>
          <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
          <h3>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <p>{{ post.excerpt }}</p>
        </li>
      {% endfor %}
    </ul>
    <p><a href="{{ "/blog/" | relative_url }}" class="button">View All Posts →</a></p>
  {% else %}
    <p>Blog posts coming soon...</p>
  {% endif %}
</div>
