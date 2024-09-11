Certainly! Here are 5 coding exercises that focus on CRUD (Create, Read, Update, Delete) operations with objects in arrays, along with sorting and filtering tasks:

1. **Employee Management**:

   - Write a function that manages a list of employees. The function should be able to:
     - Add a new employee object to the array
     - Update an existing employee's information
     - Delete an employee from the array
     - Sort the array of employees by their name (in ascending order)
     - Filter the array of employees by their position (e.g., only show employees with the position of "Manager")
   - Example:

     ```javascript
     const employees = [
       { id: 1, name: "John Doe", position: "Developer", salary: 50000 },
       { id: 2, name: "Jane Smith", position: "Manager", salary: 80000 },
       { id: 3, name: "Bob Johnson", position: "Developer", salary: 55000 },
     ];

     function employeeManagement(employees, operation, employee) {
       // Your code here
     }

     // Example usage:
     employeeManagement(employees, "create", {
       id: 4,
       name: "Alice Williams",
       position: "Designer",
       salary: 60000,
     });
     employeeManagement(employees, "update", {
       id: 2,
       name: "Jane Doe",
       position: "Senior Manager",
       salary: 90000,
     });
     employeeManagement(employees, "delete", { id: 3 });
     employeeManagement(employees, "sort");
     employeeManagement(employees, "filter", { position: "Manager" });
     ```

2. **Book Catalog**:

   - Write a function that manages a catalog of books. The function should be able to:
     - Add a new book object to the array
     - Update an existing book's information
     - Delete a book from the array
     - Sort the array of books by their title (in ascending order)
     - Filter the array of books by their genre (e.g., only show books with the genre of "Fiction")
   - Example:

     ```javascript
     const books = [
       {
         id: 1,
         title: "The Great Gatsby",
         author: "F. Scott Fitzgerald",
         genre: "Fiction",
         published: 1925,
       },
       {
         id: 2,
         title: "To Kill a Mockingbird",
         author: "Harper Lee",
         genre: "Fiction",
         published: 1960,
       },
       {
         id: 3,
         title: "1984",
         author: "George Orwell",
         genre: "Science Fiction",
         published: 1949,
       },
     ];

     function bookCatalog(books, operation, book) {
       // Your code here
     }

     // Example usage:
     bookCatalog(books, "create", {
       id: 4,
       title: "The Kite Runner",
       author: "Khaled Hosseini",
       genre: "Fiction",
       published: 2003,
     });
     bookCatalog(books, "update", {
       id: 3,
       title: "Nineteen Eighty-Four",
       author: "George Orwell",
       genre: "Dystopian",
       published: 1949,
     });
     bookCatalog(books, "delete", { id: 2 });
     bookCatalog(books, "sort");
     bookCatalog(books, "filter", { genre: "Fiction" });
     ```

3. **Todo List**:

   - Write a function that manages a todo list. The function should be able to:
     - Add a new todo item object to the array
     - Mark a todo item as completed or incomplete
     - Delete a todo item from the array
     - Sort the array of todo items by their priority (in descending order)
     - Filter the array of todo items by their completion status (e.g., only show completed or incomplete tasks)
   - Example:

     ```javascript
     const todos = [
       { id: 1, task: "Finish homework", priority: 1, completed: false },
       { id: 2, task: "Grocery shopping", priority: 3, completed: false },
       { id: 3, task: "Clean the house", priority: 2, completed: true },
     ];

     function todoList(todos, operation, todo) {
       // Your code here
     }

     // Example usage:
     todoList(todos, "create", {
       id: 4,
       task: "Call mom",
       priority: 4,
       completed: false,
     });
     todoList(todos, "update", { id: 3, completed: false });
     todoList(todos, "delete", { id: 2 });
     todoList(todos, "sort");
     todoList(todos, "filter", { completed: true });
     ```

4. **Inventory Management**:

   - Write a function that manages an inventory of products. The function should be able to:
     - Add a new product object to the array
     - Update an existing product's information
     - Delete a product from the array
     - Sort the array of products by their price (in ascending order)
     - Filter the array of products by their category (e.g., only show products in the "Electronics" category)
   - Example:

     ```javascript
     const inventory = [
       {
         id: 1,
         name: "Laptop",
         category: "Electronics",
         price: 899.99,
         inStock: 15,
       },
       {
         id: 2,
         name: "T-shirt",
         category: "Clothing",
         price: 19.99,
         inStock: 50,
       },
       {
         id: 3,
         name: "Headphones",
         category: "Electronics",
         price: 79.99,
         inStock: 25,
       },
     ];

     function inventoryManagement(inventory, operation, product) {
       // Your code here
     }

     // Example usage:
     inventoryManagement(inventory, "create", {
       id: 4,
       name: "Smartphone",
       category: "Electronics",
       price: 599.99,
       inStock: 30,
     });
     inventoryManagement(inventory, "update", {
       id: 3,
       name: "Wireless Headphones",
       price: 99.99,
     });
     inventoryManagement(inventory, "delete", { id: 2 });
     inventoryManagement(inventory, "sort");
     inventoryManagement(inventory, "filter", { category: "Electronics" });
     ```

5. **Student Records**:

   - Write a function that manages a database of student records. The function should be able to:
     - Add a new student object to the array
     - Update an existing student's information
     - Delete a student from the array
     - Sort the array of students by their grade (in descending order)
     - Filter the array of students by their year (e.g., only show students in their senior year)
   - Example:

     ```javascript
     const students = [
       { id: 1, name: "John Doe", grade: 90, year: 12 },
       { id: 2, name: "Jane Smith", grade: 85, year: 11 },
       { id: 3, name: "Bob Johnson", grade: 92, year: 12 },
     ];

     function studentRecords(students, operation, student) {
       // Your code here
     }

     // Example usage:
     studentRecords(students, "create", {
       id: 4,
       name: "Alice Williams",
       grade: 88,
       year: 10,
     });
     studentRecords(students, "update", { id: 2, grade: 88 });
     studentRecords(students, "delete", { id: 3 });
     studentRecords(students, "sort");
     studentRecords(students, "filter", { year: 12 });
     ```

These exercises cover a range of CRUD operations with objects in arrays, including sorting and filtering tasks. They are designed to help students practice working with arrays of objects and implementing various functionalities related to data management.
