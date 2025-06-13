# 📘 Cheat Sheets for Java, Python, Angular, and System Design

---

## 🔹 Spring Boot Cheat Sheet

### 🔧 Core Annotations
- `@SpringBootApplication`: Combines `@Configuration`, `@EnableAutoConfiguration`, and `@ComponentScan`
- `@RestController`: Marks class for REST endpoints
- `@GetMapping`, `@PostMapping`, etc.: Map HTTP methods
- `@Autowired`: Injects dependencies

### 📁 Project Structure
- `Controller`
- `Service`
- `Repository`
- `Model`
- `Config`

### 🧪 Testing
- `@SpringBootTest`
- `MockMvc`
- `@WebMvcTest`

---

## 🔹 Python Backend (Django/Flask) Cheat Sheet

### 🛠️ Flask Basics
```python
from flask import Flask, request
app = Flask(__name__)
@app.route('/')
def hello():
    return 'Hello World'
```

### 🛠️ Django Basics
- `models.Model`: ORM Mapping
- `views.py`: Controller logic
- `urls.py`: Route management
- `serializers.py`: DRF data transformation
- `@api_view`, `@permission_classes`

### 📦 Environment
- Virtualenv / Pipenv
- Django ORM: `objects.filter()`, `objects.get()`

---

## 🔹 Angular Cheat Sheet

### 🔧 CLI Commands
```bash
ng new app-name
ng generate component name
ng generate service name
```

### 🧩 Core Concepts
- Modules, Components, Services
- `@Input()` and `@Output()` decorators
- Two-way binding: `[(ngModel)]`
- Routing: `RouterModule.forRoot()`

### 🔌 API Call Example
```ts
this.http.get<type>('url').subscribe(data => this.data = data);
```

---

## 🔹 System Design Cheat Sheet

### 🔷 Key Principles
- Scalability, Availability, Reliability, Maintainability

### 📊 Architecture Patterns
- Monolith vs Microservices
- Event-Driven Architecture
- Serverless Architecture

### ⚙️ Tools & Components
- Load Balancer, CDN, Caching
- Message Queues (Kafka, RabbitMQ)
- Database (SQL vs NoSQL)

### 🧠 Design Questions to Practice
- URL Shortener
- Real-time Chat App
- E-commerce Backend
- Notification System

---
