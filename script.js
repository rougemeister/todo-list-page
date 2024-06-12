let todos = [];

        
        function renderTodoList() {
            const todoListElement = document.getElementById('todo-list');
            todoListElement.innerHTML = ''; 

            // Loop through each to-do item and create HTML elements to display them
            todos.forEach((todo, index) => {
                const todoItemElement = document.createElement('div');
                todoItemElement.className = 'todo-item';
                todoItemElement.innerHTML = `
                    <strong>${todo.title}</strong>
                    <p>${todo.description ? todo.description : ''}</p>
                    <p>${todo.due_date ? new Date(todo.due_date).toLocaleString() : 'No due date'}</p>
                    <div class="buttons-container"> 
                        <button id="complete">Complete</button>
                        <button id="edit">Edit</button>
                        <button id="delete">Delete</button>
                    <div>
                `;

               
                todoListElement.appendChild(todoItemElement);

                const buttonsContainer = document.querySelector('.buttons-container')


                buttonsContainer.addEventListener('click', (event)=>{

                    if(event.target.id === 'complete'){
                        console.log('complete')
                        if(completeTodoItem(index))
                        event.target.parentNode.parentNode.style.backgroundColor = 'green' 
                        // completeTodoItem(index)

                    } else if (event.target.id === 'edit'){
                        editTodoItem(index)
                    }else if(event.target.id === 'delete'){
                        deleteTodoItem(index)
                    }
                })

            });
        }
