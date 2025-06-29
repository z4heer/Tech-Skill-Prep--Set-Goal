import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  imports: [CommonModule, RouterModule ],
  selector: 'app-home',
  template: `
  <section>
    <ul class="categories">
      <li *ngFor="let c of categories">
        <a [routerLink]="['/roles', c.slug]">{{ c.name }}</a>
      </li>
    </ul>
  </section>
  `,
  styles: [`
    section { text-align: center; }
    .categories { list-style: none; padding: 0; margin: 40px 0 0 0; }
    .categories li { display: inline-block; margin: 0 16px; }
    .categories a {
      display: inline-block;
      padding: 14px 28px;
      border-radius: 6px;
      background: #2b3a55;
      color: #fff;
      text-decoration: none;
      margin-bottom: 10px;
      font-size: 1.1rem;
      box-shadow: 0 1px 4px #d7dbe2;
      transition: background 0.2s;
    }
    .categories a:hover { background: #ffb700; color: #1d2330; }
  `]
})
export class HomeComponent {
  categories = [
    { name: 'Software Development', slug: 'software-development' },
    { name: 'Data', slug: 'data' },
    { name: 'Design', slug: 'design' },
    { name: 'Product Management', slug: 'product-management' },
    { name: 'QA & Testing', slug: 'qa-testing' },
    { name: 'Cloud/DevOps', slug: 'cloud-devops' },
    { name: 'Security', slug: 'security' },
  ];
}