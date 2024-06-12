let todos = [];

        // Function to render the to-do list
        function renderTodoList() {
            const todoListElement = document.getElementById('todo-list');
            todoListElement.innerHTML = ''; // Clear existing list

            // Loop through each to-do item and create HTML elements to display them
            todos.forEach((todo, index) => {
                const todoItemElement = document.createElement('div');
                todoItemElement.className = 'todo-item';
                todoItemElement.innerHTML = `
                    <strong>${todo.title}</strong>
                    <p>${todo.description ? todo.description : ''}</p>
                    <p>${todo.due_date ? new Date(todo.due_date).toLocaleString() : 'No due date'}</p> 
                    <p>${todo.completed ? "Completed" : ''}</p>
                    <button onclick="completeTodoItem(${index})" >Complete</button>
                    <button onclick="editTodoItem(${index})">Edit</button>
                    <button onclick="deleteTodoItem(${index})">Delete</button>
                `;

          


                todoListElement.appendChild(todoItemElement);

            

           
            });
        }


        // Function to add a new to-do item
        function addTodoItem(event) {
            event.preventDefault(); // Prevent form submission

            // Get form input values
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            const dueDate = document.getElementById('due-date').value;

            // Add the new to-do item to the array
            todos.push({
                title,
                description,
                due_date: dueDate

            });

            // Clear form inputs
            document.getElementById('title').value = '';
            document.getElementById('description').value = '';
            document.getElementById('due-date').value = '';

            // Render the updated to-do list
            renderTodoList();
        }

        // Function to edit an existing to-do item
        function editTodoItem(index) {
            // Prompt the user for new values
            const newTitle = prompt('Enter new title:');
            const newDescription = prompt('Enter new description:');
            const newDueDate = prompt('Enter new due date (YYYY-MM-DD HH:MM):');

            // Update the to-do item
            todos[index].title = newTitle;
            todos[index].description = newDescription;
            todos[index].due_date = newDueDate;


            // Render the updated to-do list
            renderTodoList();
        }

        // Function to delete a to-do item
        function deleteTodoItem(index) {
            // Remove the to-do item from the array
            todos.splice(index, 1);

            // Render the updated to-do list
            renderTodoList();
        }

        // Function to mark a to-do item as complete
        function completeTodoItem(index) {
            // Toggle the completed status
            todos[index].completed = true;
          
          

            // Render the updated to-do list
            renderTodoList();
        }

        // Attach event listener to the form for adding new to-do items
        document.getElementById('todo-form').addEventListener('submit', addTodoItem);

        // Initial rendering of the to-do list
        renderTodoList();