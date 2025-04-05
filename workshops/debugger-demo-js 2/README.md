# VS Code Debugging Guide for ToDo Application

This guide will help you debug the intentional bugs in our ToDo application using VS Code's debugging tools. Follow these steps to identify and fix each issue.

## Setting Up the Debugger

1. **Create a launch.json file**:

   - Open the todo application in VS Code
   - Click the Run and Debug icon in the sidebar (or press Ctrl+Shift+D)
   - Click "create a launch.json file"
   - Select "Chrome" as the environment

2. **Add this configuration to launch.json**:

   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "type": "chrome",
         "request": "launch",
         "name": "Launch Chrome against localhost",
         "url": "http://localhost:5500",
         "webRoot": "${workspaceFolder}"
       }
     ]
   }
   ```

3. **Start a local server**:
   - If you have the VS Code "Live Server" extension, right-click on the HTML file and select "Open with Live Server"
   - Otherwise, use any local development server you prefer

## Debugging the Bugs

### Bug 1: Scope Issue in the Loop

1. Set a breakpoint at line 148 (inside the event listener for the checkbox)
2. Add a watch expression for `i` and `todos.length`
3. Run the debugger and add a few tasks
4. Check a task's checkbox
5. When the debugger pauses, observe the value of `i` (it will be equal to `todos.length`)

**Fix:**

- Change `var i` to `let i` in the loop
- Use a closure or store the index in a data attribute

### Bug 2: Event Handler Memory Leak

1. Add a breakpoint inside the `initialize` function at line 58
2. Add another breakpoint inside the `addTodo` function at line 65
3. Start debugging and observe how many times the breakpoint in `initialize` gets hit
4. Try adding a task and notice how the breakpoint in `addTodo` might be hit multiple times

**Fix:**

- Remove the `setTimeout(initialize, 5000)` line
- Or use event handler cleanup/removal before reattaching

### Bug 3: Type Coercion Issue

1. Set a breakpoint at line 68 (the if statement)
2. Add a watch expression for `text` and `text == 0`
3. Try submitting the form with just a "0" as input
4. Observe in the debugger how `"0" == 0` evaluates to true

**Fix:**

- Change `==` to `===` in the comparison
- Or explicitly check for empty string: `if (!text)`

### Bug 4: Reference/Deep Copy Issue

1. Set a breakpoint at line 128 (inside toggleTodo)
2. Add watch expressions for `todos[index]` and `updatedTodo`
3. Check and uncheck a task multiple times
4. Observe that the objects are being referenced properly (this is a simulated issue in this simple case)

**Fix:**

- This issue would be more apparent with nested objects
- Use deep copy methods for nested objects

### Bug 5: Asynchronous Code Issue

1. Set a breakpoint at line 175 (showError function call)
2. Set another breakpoint inside the Promise resolution at line 169
3. Add a watch expression for `message`
4. Click "Save Tasks" button
5. Observe that `message` is a Promise object, not a string

**Fix:**

- Use `.then()` with a callback to handle the resolved promise
- Or use async/await syntax
- Update the UI only after the promise resolves

### Bug 6: Not Checking if Data Exists

1. Set a breakpoint at line 183 (inside loadTodos)
2. Clear localStorage by running `localStorage.clear()` in the console
3. Add a watch expression for `localStorage.getItem('todos')`
4. Click "Load Tasks"
5. Observe that `localStorage.getItem('todos')` returns null

**Fix:**

- Check if the return value is null before parsing:
  ```javascript
  const stored = localStorage.getItem("todos");
  if (stored) {
    todos = JSON.parse(stored);
  }
  ```

## Using Console for Debugging

Besides the VS Code debugger, you can also use `console` methods to debug:

1. Add `console.log()` statements to track values:

   ```javascript
   console.log("Todo being toggled:", todos[index], "at index", index);
   ```

2. Use `console.trace()` to see the call stack:

   ```javascript
   console.trace("Function call history:");
   ```

3. Add performance timing:

   ```javascript
   console.time("Rendering todos");
   renderTodos();
   console.timeEnd("Rendering todos");
   ```

4. Use `console.table(todos)` in the renderTodos function to see a structured view of your data

## Debugging Exercise

1. Fix each bug one by one
2. After each fix, test the application to make sure it works correctly
3. Document what caused each bug and how you fixed it
4. Compare your solutions with classmates
