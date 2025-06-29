import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Role {
  name: string;
  file: string;
}

@Component({
  standalone: true,
  selector: 'app-roles-directory',
  imports: [CommonModule, HttpClientModule],
  template: `
  <div class="directory-container">
    <!-- Top Category Nav -->
    <nav class="category-nav">
      <button class="category-nav"
        *ngFor="let cat of categories"
        [class.active]="cat.key === selectedCategory"
        (click)="selectCategory(cat.key)">
        {{ cat.label }}
      </button>
    </nav>

    <div class="content-area">
      <!-- Left Level Nav -->
      <aside class="level-nav" *ngIf="selectedCategory">
        <button
          *ngFor="let level of levels"
          [class.active]="level.key === selectedLevel"
          (click)="selectLevel(level.key)">
          {{ level.label }}
        </button>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <!-- Show roles if a level is selected and no role is open -->
        <ul class="role-list" *ngIf="selectedLevel && !roleHtml">
          <li *ngFor="let role of getRolesForSelected()">
            <a href="#" (click)="loadRole(role, $event)">{{ role.name }}</a>
          </li>
        </ul>
        <!-- Show role content if a role is selected -->
        <section *ngIf="roleHtml" class="role-content" #roleContent>
          <button (click)="closeRole()" class="close-btn">← Back to Roles</button>
          <div [innerHTML]="roleHtml"></div>
        </section>
        <!-- Prompt if nothing selected -->
        <div *ngIf="!selectedLevel && !roleHtml" class="placeholder">
          <p>Select a Level to view available roles.</p>
        </div>
      </main>
    </div>
  </div>
  `,
  styles: [`
    .directory-container {
      font-family: 'Segoe UI', Arial, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      background: #fafbfc;
      border-radius: 8px;
      box-shadow: 0 4px 16px #0001;
    }
    .category-nav {
      display: flex;
      border-bottom: 3px solid #e0e4ea;
      background: #2b3a55;
      padding: 0 0 0 8px;
      border-radius: 8px 8px 0 0;
      overflow-x: auto;
    }
    .category-nav button {
      background: none;
      border: none;
      color: #fff;
      font-size: 1.1rem;
      padding: 18px 32px 14px 32px;
      cursor: pointer;
      transition: background 0.18s, color 0.18s;
      border-bottom: 3px solid transparent;
    }
    .category-nav button.active,
    .category-nav button:hover {
      color: #ffb700;
      border-bottom: 3px solid #ffb700;
      background: #344366;
    }
    .content-area {
      display: flex;
      min-height: 560px;
    }
    .level-nav {
      flex: 0 0 200px;
      background: #f1f4f8;
      padding: 36px 12px 24px 16px;
      border-right: 2px solid #e0e4ea;
      display: flex;
      flex-direction: column;
      gap: 20px;
      min-width: 180px;
    }
    .level-nav button {
      background: none;
      border: none;
      color: #2b3a55;
      font-size: 1.09rem;
      text-align: left;
      padding: 8px 0 8px 8px;
      border-left: 4px solid transparent;
      cursor: pointer;
      border-radius: 3px;
      transition: color 0.16s, border 0.16s, background 0.16s;
    }
    .level-nav button.active,
    .level-nav button:hover {
      color: #ffb700;
      background: #fffbe5;
      border-left: 4px solid #ffb700;
    }
    .main-content {
      flex: 1 1 0;
      padding: 36px 38px 36px 38px;
      min-width: 0;
      display: flex;
      flex-direction: column;
    }
    .role-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 18px;
    }
    .role-list li {
      margin-bottom: 14px;
    }
    .role-list a {
      display: block;
      background: #fff;
      color: #2b3a55;
      text-decoration: none;
      padding: 13px 18px;
      border-radius: 6px;
      box-shadow: 0 2px 8px #0001;
      transition: background 0.18s;
      font-size: 1.04rem;
      font-weight: 500;
    }
    .role-list a:hover {
      background: #ffb700;
      color: #2b3a55;
    }
    .role-content {
      background: #fffbe5;
      border: 1px solid #f5e6a4;
      padding: 28px 32px;
      margin: 0 0 24px 0;
      border-radius: 7px;
      box-shadow: 0 2px 8px #0001;
      min-height: 220px;
      position: relative;
      animation: fadeIn 0.2s;
    }
    .close-btn {
      position: absolute;
      top: 18px;
      left: 18px;
      background: #f1f4f8;
      border: none;
      color: #2b3a55;
      font-weight: 500;
      border-radius: 4px;
      padding: 7px 15px;
      cursor: pointer;
      transition: background 0.14s;
    }
    .close-btn:hover {
      background: #ffe59d;
    }
    .placeholder {
      color: #aaa;
      font-size: 1.13rem;
      padding: 68px 0;
      text-align: center;
    }
    @media (max-width: 900px) {
      .content-area { flex-direction: column; }
      .level-nav { flex-direction: row; min-width: 0; border-right: none; border-bottom: 2px solid #e0e4ea; gap: 0 18px; padding: 18px 0 10px 10px;}
      .main-content { padding: 20px 8px; }
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: none; }
    }
  `]
})
export class RolesDirectoryComponent {
  categories = [
    { key: 'software-development', label: 'Software Development' },
    { key: 'data', label: 'Data' },
    { key: 'design', label: 'Design' },
    { key: 'product-management', label: 'Product Management' },
    { key: 'qa-testing', label: 'QA & Testing' },
    { key: 'cloud-devops', label: 'Cloud/DevOps' },
    { key: 'security', label: 'Security' }
  ];

  levels = [
    { key: 'entry-level', label: 'Entry Level' },
    { key: 'mid-level', label: 'Mid Level' },
    { key: 'advanced', label: 'Advanced' }
  ];

  // Track selections
  selectedCategory: string = this.categories[0].key;
  selectedLevel: string | null = null;
  selectedRole: Role | null = null;
  roleHtml: string | null = null;

  // Data as before
  roleMap: { [category: string]: { [level: string]: Role[] } } = {
    'software-development': {
      'entry-level': [
        { name: 'Software Developer', file: 'software-developer.html' },
        { name: 'Frontend Developer', file: 'frontend-developer.html' },
        { name: 'Backend Developer', file: 'backend-developer.html' },
        { name: 'Full Stack Developer', file: 'full-stack-developer.html' }
      ],
      'mid-level': [
        { name: 'Senior Software Engineer', file: 'senior-software-engineer.html' },
        { name: 'Tech Lead', file: 'tech-lead.html' },
        { name: 'DevOps Engineer', file: 'devops-engineer.html' }
      ],
      'advanced': [
        { name: 'Principal Engineer', file: 'principal-engineer.html' },
        { name: 'Solutions Architect', file: 'solutions-architect.html' },
        { name: 'CTO', file: 'cto.html' }
      ]
    },
    'data': {
      'entry-level': [
        { name: 'Data Analyst', file: 'data-analyst.html' },
        { name: 'BI Developer', file: 'bi-developer.html' },
        { name: 'ETL Developer', file: 'etl-developer.html' }
      ],
      'mid-level': [
        { name: 'Data Scientist', file: 'data-scientist.html' },
        { name: 'ML Engineer', file: 'ml-engineer.html' },
        { name: 'Data Engineer', file: 'data-engineer.html' }
      ],
      'advanced': [
        { name: 'Lead Data Scientist', file: 'lead-data-scientist.html' },
        { name: 'AI Architect', file: 'ai-architect.html' },
        { name: 'Head of Data', file: 'head-of-data.html' }
      ]
    },
    'design': {
      'entry-level': [
        { name: 'UI/UX Designer', file: 'ui-ux-designer.html' },
        { name: 'Frontend Developer (Design)', file: 'frontend-developer-design.html' }
      ],
      'mid-level': [
        { name: 'Product Designer', file: 'product-designer.html' },
        { name: 'UX Researcher', file: 'ux-researcher.html' }
      ],
      'advanced': [
        { name: 'Design Lead', file: 'design-lead.html' },
        { name: 'Head of Design', file: 'head-of-design.html' },
        { name: 'CXO', file: 'cxo.html' }
      ]
    },
    'product-management': {
      'entry-level': [
        { name: 'Product Analyst', file: 'product-analyst.html' },
        { name: 'Project Coordinator', file: 'project-coordinator.html' }
      ],
      'mid-level': [
        { name: 'Product Manager', file: 'product-manager.html' },
        { name: 'Scrum Master', file: 'scrum-master.html' },
        { name: 'Technical Program Manager (TPM)', file: 'tpm.html' }
      ],
      'advanced': [
        { name: 'Senior Product Manager', file: 'senior-pm.html' },
        { name: 'Director of Product', file: 'director-of-product.html' },
        { name: 'Chief Product Officer (CPO)', file: 'cpo.html' }
      ]
    },
    'qa-testing': {
      'entry-level': [
        { name: 'QA Tester', file: 'qa-tester.html' },
        { name: 'Manual Tester', file: 'manual-tester.html' },
        { name: 'Automation Tester', file: 'automation-tester.html' }
      ],
      'mid-level': [
        { name: 'SDET', file: 'sdet.html' },
        { name: 'Performance Tester', file: 'performance-tester.html' },
        { name: 'QA Lead', file: 'qa-lead.html' }
      ],
      'advanced': [
        { name: 'QA Architect', file: 'qa-architect.html' },
        { name: 'Head of QA', file: 'head-of-qa.html' }
      ]
    },
    'cloud-devops': {
      'entry-level': [
        { name: 'System Admin', file: 'system-admin.html' },
        { name: 'Support Engineer', file: 'support-engineer.html' }
      ],
      'mid-level': [
        { name: 'Cloud Engineer', file: 'cloud-engineer.html' },
        { name: 'Site Reliability Engineer (SRE)', file: 'sre.html' }
      ],
      'advanced': [
        { name: 'DevOps Architect', file: 'devops-architect.html' },
        { name: 'Infrastructure Manager', file: 'infrastructure-manager.html' },
        { name: 'Cloud Architect', file: 'cloud-architect.html' }
      ]
    },
    'security': {
      'entry-level': [
        { name: 'Security Analyst', file: 'security-analyst.html' },
        { name: 'Compliance Analyst', file: 'compliance-analyst.html' }
      ],
      'mid-level': [
        { name: 'Security Engineer', file: 'security-engineer.html' },
        { name: 'Cybersecurity Engineer', file: 'cybersecurity-engineer.html' }
      ],
      'advanced': [
        { name: 'Security Architect', file: 'security-architect.html' },
        { name: 'Chief Information Security Officer (CISO)', file: 'ciso.html' }
      ]
    }
  };

  constructor(private http: HttpClient) {}

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.selectedLevel = null;
    this.selectedRole = null;
    this.roleHtml = null;
  }

  selectLevel(level: string) {
    this.selectedLevel = level;
    this.selectedRole = null;
    this.roleHtml = null;
  }

  getRolesForSelected(): Role[] {
    if (this.selectedCategory && this.selectedLevel) {
      return this.roleMap[this.selectedCategory][this.selectedLevel] || [];
    }
    return [];
  }

  loadRole(role: Role, event: Event) {
    event.preventDefault();
    this.selectedRole = role;
    const url = `assets/${this.selectedCategory}/${this.selectedLevel}/${role.file}`;
    this.http.get(url, { responseType: 'text' }).subscribe(html => {
      this.roleHtml = html;
      setTimeout(() => {
        const el = document.querySelector('.role-content');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  closeRole() {
    this.roleHtml = null;
    this.selectedRole = null;
  }
}