// :octagonal_sign: ERROR 1: The id property is missing.
// Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
// Fix: Add the id of "submitBtn" on the button element.

// :octagonal_sign: ERROR 2: Getting value from input field.
// Uncaught TypeError: Cannot read properties of null (reading 'text')
// Fix: First change inputField to "taskInput" and not "userInput"
// then log inputField.text and show that it is null. Then change .text to .value

// :octagonal_sign: ERROR 3: The text in the input is remaining behind and not cleared out.
// Fix: Set the value back to a blank string. inputField.value = ""

// :octagonal_sign: ERROR 4: The todo is being added but it shows up "blank". Show the tasks array console.log and point out the differnce between the objects and the strings.
// Fix: Change the taskInput in the .push to be an object instead of a string.
// { text: taskInput, completed: false }

// :octagonal_sign: ERROR 5: The todo lists doubles each time now. Show that the task array still only goes up by one. Ask why would the list double.
// REASON: Explain that that the list is being appended but never cleared. So the for loop appends on to the old list endlessly.
// Fix: set the list to a blank string just like the input.
// list.innerHTML = "";

// :octagonal_sign: ERROR 6: The todos are loaded in opposite order. Show in the console log for tasks what the completed value is.
// Fix: Remove the bang from the conditional.
// if (task.completed)

// :octagonal_sign: ERROR 7: Passing down task instead of index of the task. Console.log
// Fix: add index to forEach and pass it down to toggleTodo instead
