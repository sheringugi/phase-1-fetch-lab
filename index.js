function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => renderBooks(json));
  
  
}
function renderBooks(books) {
  const main = document.querySelector('main'); 
  let array= books
  array.forEach(book => {
    array.push(book)
    const h2 = document.createElement('h2');
    h2.innerHTML = `<h2>${book.name}<h2>`;
    main.appendChild(h2);

  });
  return books
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});




