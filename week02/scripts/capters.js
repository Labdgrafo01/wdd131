const input = document.querySelector('#favchap');
const button = document.querySelector('#addButton');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        
        li.textContent = input.value.trim();
        li.append(deleteButton);
        
        list.appendChild(li);
        
        // Limpiar el campo de entrada después de agregar el elemento a la lista
        input.value = '';

        // Agregar un event listener al botón de eliminación para eliminar el elemento li cuando se hace clic
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus(); // Enviar el foco de vuelta al campo de entrada
        });
    } else {
        // Si la entrada está en blanco, devolver el foco al campo de entrada
        input.focus();
    }
});