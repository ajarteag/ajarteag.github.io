---
layout: page
title: Projects
permalink: /projects/
---

## My Projects

Here you'll find a collection of my personal and team projects in robotics, software engineering, and machine learning. Each project represents a unique challenge and learning opportunity.

### Filter by Category

<div class="project-filters">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="robotics">Robotics</button>
  <button class="filter-btn" data-filter="software">Software Engineering</button>
  <button class="filter-btn" data-filter="ml">Machine Learning</button>
</div>

### Filter by Type

<div class="project-type-filters">
  <button class="type-filter-btn active" data-type="all">All</button>
  <button class="type-filter-btn" data-type="personal">Personal Projects</button>
  <button class="type-filter-btn" data-type="team">Team Projects</button>
</div>

---

{% if site.projects.size > 0 %}
  <div class="projects-grid">
    {% for project in site.projects %}
      <div class="project-card" data-category="{{ project.category }}" data-type="{{ project.project_type }}">
        <h3>
          <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
        </h3>
        <p class="project-meta">
          <span class="badge badge-{{ project.category }}">{{ project.category | capitalize }}</span>
          <span class="badge badge-type">{{ project.project_type | capitalize }} Project</span>
        </p>
        <p class="project-description">{{ project.description }}</p>
        {% if project.technologies %}
          <p class="project-technologies">
            <strong>Tech Stack:</strong> {{ project.technologies | join: ", " }}
          </p>
        {% endif %}
        {% if project.github_url %}
          <p>
            <a href="{{ project.github_url }}" target="_blank" class="github-link">
              View on GitHub →
            </a>
          </p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
{% else %}
  <p class="no-projects">No projects yet. Check back soon!</p>
{% endif %}

<script>
// Simple filtering functionality
document.addEventListener('DOMContentLoaded', function() {
  // Category filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  const typeFilterBtns = document.querySelectorAll('.type-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  let activeCategory = 'all';
  let activeType = 'all';
  
  function filterProjects() {
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const type = card.getAttribute('data-type');
      
      const categoryMatch = activeCategory === 'all' || category === activeCategory;
      const typeMatch = activeType === 'all' || type === activeType;
      
      if (categoryMatch && typeMatch) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      activeCategory = this.getAttribute('data-filter');
      filterProjects();
    });
  });
  
  typeFilterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      typeFilterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      activeType = this.getAttribute('data-type');
      filterProjects();
    });
  });
});
</script>

<style>
.project-filters, .project-type-filters {
  margin: 20px 0;
}

.filter-btn, .type-filter-btn {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 8px 16px;
  margin: 5px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.filter-btn:hover, .type-filter-btn:hover {
  background-color: #e0e0e0;
}

.filter-btn.active, .type-filter-btn.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.project-card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.project-meta {
  margin: 10px 0;
}

.badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85em;
  margin-right: 5px;
}

.badge-robotics {
  background-color: #ff6b6b;
  color: white;
}

.badge-software {
  background-color: #4ecdc4;
  color: white;
}

.badge-ml {
  background-color: #95e1d3;
  color: #333;
}

.badge-type {
  background-color: #f0f0f0;
  color: #333;
}

.project-description {
  margin: 15px 0;
  line-height: 1.6;
}

.project-technologies {
  font-size: 0.9em;
  color: #666;
  margin: 10px 0;
}

.github-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.github-link:hover {
  text-decoration: underline;
}

.no-projects {
  text-align: center;
  padding: 40px;
  color: #666;
  font-style: italic;
}
</style>
