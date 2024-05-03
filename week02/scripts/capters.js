const input = document.querySelector('#favchap');
const button = document.querySelector('#addButton'); 
const list = document.querySelector('#list'); 

button.addEventListener('click', function() {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    
    list.append(li);
    
 
});