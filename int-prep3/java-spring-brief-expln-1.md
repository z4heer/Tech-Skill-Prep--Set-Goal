Here's a **brief and precise explanation** of each technical concept related to **Java & Spring Boot**:

---

### **1. Java & Spring Boot**

* **Java**: Object-oriented, platform-independent programming language used to build scalable and secure applications.
* **Spring Boot**: An opinionated framework built on top of Spring that simplifies microservice and web application development by auto-configuring components and eliminating boilerplate code.

---

### **2. REST API Creation, Authentication (JWT/OAuth), Error Handling**

* **REST API**: Follows stateless client-server architecture, using HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`) to interact with resources represented as JSON/XML.
* **JWT (JSON Web Token)**: Token-based stateless authentication; tokens are signed and sent via headers to validate user identity.
* **OAuth2**: Authorization framework allowing third-party access without exposing credentials. Supports flows like Authorization Code, Client Credentials, etc.
* **Error Handling**:

  * Use `@ControllerAdvice` with `@ExceptionHandler` for global error management.
  * Return standard HTTP status codes (e.g., `400`, `401`, `404`, `500`) with meaningful messages.

---

### **3. Microservices Architecture, Service Discovery, Configuration**

* **Microservices**: Breaks application into small, independently deployable services. Each service owns its data and business logic.
* **Service Discovery**:

  * Tools: **Eureka**, **Consul**.
  * Automatically register services and allow others to locate them via service registry.
* **Configuration Management**:

  * Externalize config using **Spring Cloud Config Server**.
  * Supports dynamic refresh using `@RefreshScope`.

---

### **4. Hibernate/JPA Data Access, Transactions, Repository Pattern**

* **JPA (Java Persistence API)**: Standard ORM spec for managing relational data in Java.
* **Hibernate**: Popular JPA implementation providing lazy loading, caching, and dirty checking.
* **Transactions**:

  * Ensures data consistency with `@Transactional`.
  * Rollback occurs on `RuntimeException` by default.
* **Repository Pattern**:

  * Abstraction for data access; Spring Data JPA offers `CrudRepository`, `JpaRepository` with ready-to-use methods (`findAll`, `save`, `deleteById`, etc.).

---

### **5. Unit and Integration Testing (JUnit, Mockito)**

* **JUnit**: Framework for writing and running unit tests in Java.

  * Use annotations like `@Test`, `@BeforeEach`, `@AfterEach`.
* **Mockito**: Mocking framework to simulate dependencies in unit tests.

  * Use `@Mock`, `@InjectMocks`, `when(...).thenReturn(...)`.
* **Integration Testing**:

  * Involves real DBs or services.
  * Use `@SpringBootTest`, `@Testcontainers`, and embedded DBs (e.g., H2).

---

### **6. Maven/Gradle Build Management**

* **Maven**:

  * XML-based build tool.
  * Uses `pom.xml` for dependency and plugin management.
* **Gradle**:

  * Groovy/Kotlin DSL-based build tool.
  * Faster builds via incremental compilation and build caching.
* Both manage **project lifecycle** (compile, test, package, deploy), **dependencies**, and **multi-module** setups.

---

Let me know if you want **code examples**, **mind maps**, or **interview Q\&A format** for these.
