
# NationDev Task Manager

## Project: Reverse Engineer a Result

### 1. Project Introduction

During my APL internship, I worked on a Task Management application.

The goal of this project was to study how an existing task management application works and build my own version using HTML, CSS, and JavaScript.

### 2. Research and Planning

I used TodoMVC as a reference for understanding how task management applications work.

I studied the main features, including adding tasks, completing tasks, editing tasks, deleting tasks, and filtering tasks.

I planned to build a simple and user-friendly application.

### 3. Inputs and Processes

The user can enter a task name and select a priority level: Low, Medium, or High.

JavaScript processes the information and adds the task to the list.

Users can also edit, complete, or delete tasks.

The application uses LocalStorage to save tasks in the browser.

### 4. Implementation

I created three main files:

- index.html: The structure of the application.
- style.css: The design, colors, and layout.
- script.js: The application logic and functions.

I used JavaScript to manage the task list and update the page when the user interacts with it.

### 5. Testing

I tested the application by:

- Adding new tasks.
- Selecting different priority levels.
- Marking tasks as completed.
- Using the All, Active, and Completed filters.
- Editing existing tasks.
- Deleting tasks.
- Refreshing the browser to check LocalStorage.

All these tests worked successfully.

### 6. Problems and Solutions

I noticed that tasks created in Google Chrome did not automatically appear in Firefox.

I learned that LocalStorage stores data separately for each browser.

For the presentation, I decided to use Google Chrome, where my original tasks were saved.

### 7. Conclusion

I successfully created a working Task Management application.

This project helped me understand HTML, CSS, JavaScript, LocalStorage, and how to test a web application.

I also learned how to analyze an existing application and develop a similar solution.

### 8. Reverse Engineering Process

I analyzed the main functions of a task management
application before building my own version.

The application receives a task name and a priority
level as input.

JavaScript processes the task and displays it
on the webpage.

The user can complete, edit, delete, and filter tasks.

The application also saves tasks in LocalStorage.

### 9. Pseudocode

START

LOAD saved tasks from LocalStorage

DISPLAY all tasks

WHEN the user adds a task:
    READ task name
    READ priority level
    IF task name is not empty:
        CREATE a new task
        SAVE task in LocalStorage
        UPDATE the task list

WHEN the user completes a task:
    CHANGE completed status
    SAVE changes
    UPDATE the task list

WHEN the user edits a task:
    READ the new task name
    UPDATE the task
    SAVE changes

WHEN the user deletes a task:
    REMOVE the selected task
    SAVE changes
    UPDATE the task list

WHEN the user selects a filter:
    SHOW all, active, or completed tasks

END

### 10. Comparison With the Reference Application

Reference application: TodoMVC

Similar features:
- Adding tasks
- Completing tasks
- Editing tasks
- Deleting tasks
- Filtering tasks
- Saving tasks locally

Additional feature in my application:
- Priority levels: Low, Medium, and High

My application has a different design and layout.

I used the reference application to understand
the expected behavior and then implemented
my own solution using HTML, CSS, and JavaScript.
