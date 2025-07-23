## ✅ Java & Spring Boot – Interview Q\&A

### Beginner Level

* **Q: What is Spring Boot and why is it used?**
  A: Spring Boot simplifies Spring applications by providing auto-configuration, embedded servers, and minimal setup for fast development.

* **Q: What is the difference between @Component, @Service, and @Repository?**
  A: All are Spring-managed beans. `@Service` and `@Repository` are specializations of `@Component` for business logic and persistence layers, respectively.

* **Q: How do you create a REST API in Spring Boot?**
  A: Using `@RestController`, `@RequestMapping`, and `@GetMapping/@PostMapping` annotations with services and repositories underneath.

* **Q: What is dependency injection?**
  A: It's a design pattern where dependencies are injected rather than created manually, promoting loose coupling.

### Mid-Level

* **Q: How do you implement JWT authentication in Spring Boot?**
  A: Use filters to intercept requests, validate JWT tokens, and attach user details to Spring Security’s context.

* **Q: How is Spring Boot configured for microservices?**
  A: Use Spring Cloud, Eureka for service discovery, Config Server for centralized config, and Feign clients for communication.

* **Q: What is the Repository pattern?**
  A: It abstracts data access, allowing service layers to use interfaces rather than specific persistence logic.

* **Q: How do you handle transactions in Spring Boot?**
  A: Use `@Transactional` to manage commit/rollback behavior.

---

## ✅ Python (Flask / Django / FastAPI) – Interview Q\&A

### Beginner Level

* **Q: What is Flask? How is it different from Django?**
  A: Flask is a lightweight, unopinionated micro-framework. Django is a full-stack, batteries-included framework.

* **Q: How do you define a REST API in Flask?**
  A: Use Flask’s `@app.route` with HTTP methods like `GET`, `POST`, etc., and return JSON responses.

* **Q: What is an ORM?**
  A: An Object Relational Mapper maps Python objects to database tables. SQLAlchemy is common with Flask; Django has its own ORM.

* **Q: How do you handle sessions in Flask?**
  A: Flask provides `session` to store user data, usually backed by cookies and secret keys.

### Mid-Level

* **Q: What is the role of serializers in Django REST Framework?**
  A: Serializers convert complex types like model instances to JSON and validate incoming JSON data.

* **Q: How do you secure APIs in Flask or Django?**
  A: Use JWT for stateless auth, enable CORS, hash passwords, and use CSRF tokens for session-based auth.

* **Q: What is FastAPI and why is it gaining popularity?**
  A: It is an async web framework that supports modern Python types, provides fast performance, and generates auto docs.

* **Q: How do you test Flask apps?**
  A: Use `pytest` or `unittest` with test clients to simulate requests and check responses.

---

## ✅ Angular (Frontend) – Interview Q\&A

### Beginner Level

* **Q: What is a component in Angular?**
  A: A component is a building block of the UI containing HTML, CSS, and TS logic.

* **Q: What are Angular services?**
  A: Services are classes used to share data or logic across components, typically injected via dependency injection.

* **Q: How do you handle forms in Angular?**
  A: Use Template-driven or Reactive Forms with built-in validators for user input.

* **Q: How do you make HTTP calls in Angular?**
  A: Use Angular’s `HttpClient` service to make GET, POST, etc., requests to REST APIs.

### Mid-Level

* **Q: What is RxJS and why is it used in Angular?**
  A: RxJS is a reactive library for handling async data via Observables, used with HTTP, forms, events, etc.

* **Q: What is NgRx?**
  A: NgRx is a state management library for Angular using Redux-style architecture (Actions, Reducers, Store, Effects).

* **Q: What is a module in Angular?**
  A: An Angular module organizes components and services into cohesive blocks and supports lazy loading.

* **Q: How do you build a responsive UI in Angular?**
  A: Use Angular Material components and CSS techniques (Flexbox/Grid, media queries).

---

## ✅ DevOps & CI/CD – Interview Q\&A

### Beginner Level

* **Q: What is CI/CD?**
  A: CI (Continuous Integration) automates code builds and tests. CD (Continuous Delivery/Deployment) automates deployment to staging or prod.

* **Q: What is Jenkins?**
  A: Jenkins is an open-source automation server used to build, test, and deploy applications.

* **Q: What is Docker?**
  A: Docker is a containerization tool to run applications in isolated environments.

* **Q: What is a Dockerfile?**
  A: A Dockerfile is a script containing instructions to build a Docker image.

### Mid-Level

* **Q: What is the difference between declarative and scripted pipelines in Jenkins?**
  A: Declarative uses structured syntax (`pipeline {}`), easier for most use-cases. Scripted uses Groovy, offers more flexibility.

* **Q: How does GitHub Actions work for CI/CD?**
  A: Workflows are triggered by git events (push, PR), and steps can run tests, build, or deploy using YAML configs.

* **Q: What is docker-compose?**
  A: It defines and runs multi-container Docker applications using a YAML file.

* **Q: How do you set up automated testing in a pipeline?**
  A: Integrate testing commands (JUnit, pytest, etc.) in CI pipeline to run before build/deploy.

---

## ✅ Cloud (AWS / GCP) – Interview Q\&A

### Beginner Level

* **Q: What is EC2?**
  A: EC2 is AWS's virtual server for running applications.

* **Q: What is S3?**
  A: S3 is AWS's object storage service used for static files, backups, and logs.

* **Q: What is IAM in AWS?**
  A: IAM controls access to AWS services/resources via users, roles, and policies.

* **Q: What is Elastic Beanstalk?**
  A: It’s a PaaS that deploys and manages applications automatically.

### Mid-Level

* **Q: What is Cloud Run in GCP?**
  A: Cloud Run runs containers in a fully managed, scalable environment.

* **Q: How do you store secrets securely in AWS?**
  A: Use AWS Secrets Manager or Systems Manager Parameter Store.

* **Q: What are some ways to reduce cloud costs?**
  A: Use right-sized instances, reserved instances, turn off unused resources, and use lifecycle rules in S3.

* **Q: What are environment variables and how are they used?**
  A: Key-value pairs used to store config like DB URLs, tokens, etc., without hardcoding in source.
