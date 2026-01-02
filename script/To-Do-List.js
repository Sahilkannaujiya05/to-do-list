const addToDoList = [];
          function renderToDo(){
          let addList = '';
          for(let i = 0; i < addToDoList.length; i++){
            const valueObject = addToDoList[i];
            //name = valueObjec.name;
            //dueDate = valuObjec.duedate;
            const{value,dueDate} = valueObject;
            const html = `
              <div>${value}</div> 
              <div> ${dueDate}</div> 
              <button onclick = "
              addToDoList.splice(${i}, 1);
              renderToDo();
                
              "class = "delete-button"
              >Delete</button>
              `;
            addList += html;
          }

          document.querySelector('.js-todo-score')
          .innerHTML = addList;
        }
        document.querySelector('.js-add-button')
        .addEventListener('click', () => {
           addToDo();
        });
        /*document.body.addEventListener
        ('keydown',(event)=>{
          if(event.key === 'enter'){
            addToDo()
          }
          });*/
          function addToDo(){
            const inputElem = document.querySelector('.js-input');
            const value = inputElem.value;
            const dueDateInputElem = document.querySelector('.js-dueDate');
            const dueDate = dueDateInputElem.value;
            
            addToDoList.push({
              //value: value,<...shorthand proerty
              //dueDate: dueDate
              value,
              dueDate });
            inputElem.value = '';
            document.querySelector('.js-result');
            renderToDo();

          }
