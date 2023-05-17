/*function changeColor(color){
    const button = document.getElementById("example");
    button.style.backgroundColor = color;
    //const element = document.getElementById("elementToChange");
    //element.style.backgroundColor = 'red';
    //element.style.textAlign = 'center';

    //document.body.style.backgroundColor = 'green'
}

// EJERCICIO 2
const form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const email = document.getElementById("email");

    if (name.value.trim() == '' || surname.value.trim() == '' || email.value.trim() == '') {
        alert("Completa todos los datos");
    } else if (!isValidEmail(email.value)) {
        alert('Ingrese un correo electrónico válido');
    } else {
        form.submit();
    }

});


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }*/

  // Ejercicio 3
  /*
   Crea un elemento de lista y permite que los usuarios añadan elementos
   a la lista haciendo clic en un botón.
   Los nuevos elementos deben agregarse al final de la lista existente.
   */


   const itemList = document.getElementById('itemList');
   const newItemInput = document.getElementById('newItem');
   const addItemButton = document.getElementById('addNewItem');

   addItemButton.addEventListener('click', () => {
        const newItemText = newItemInput.value.trim();

        if (newItemText !== '') {
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;
            itemList.appendChild(newItem);
            newItemInput.value = '';
        }
   });