var modal = document.querySelector('.modal');
var btn = document.querySelector('#pop-button');
var span = document.querySelector('.close');


btn.onclick = function(){
  modal.style.display = "flex";
}

span.onclick = function(){
  modal.onclick = function(){
    modal.style.display="none";
  }
}

const addBtn = document.querySelector('.submit');
addBtn.addEventListener('click',addBookToLibrary);


function Book(title,author,pages,read) {
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
}
let myLibrary = [];

function addBookToLibrary(){
  event.preventDefault();
  modal.style.display='none';
  let title = form.title.value; 
  let author = form.author.value; 
  let pages = form.pages.value + 'pg'; 
  let read = form.read.checked; 
  let newBook = new Book(title,author,pages,read);
  myLibrary.push(newBook);
  render();
  form.reset();
}

function render(){
  const display = document.querySelector('#lib-cont');
  const books = document.querySelectorAll('.book');
  books.forEach(book => display.removeChild(book));

  for (let index = 0; index < myLibrary.length; index++) {
    createBook(myLibrary[index]);
  }
}

function createBook(item){
  const library = document.querySelector('#lib-cont');
  const bookDiv = document.createElement('div');
  const titleDiv = document.createElement('div');
  const authDiv = document.createElement('div');
  const pageDiv = document.createElement('div');
  const removeBtn = document.createElement('button');
  const readBtn = document.createElement('button');
  

  bookDiv.classList.add('book');
  bookDiv.setAttribute('id' , myLibrary.indexOf(item));

  titleDiv.textContent = item.title;
  titleDiv.classList.add('title');
  bookDiv.appendChild(titleDiv);

  authDiv.textContent = item.author;
  authDiv.classList.add('author');
  bookDiv.appendChild(authDiv);

  pageDiv.textContent = item.pages;
  pageDiv.classList.add('pages');
  bookDiv.appendChild(pageDiv);

  
  readBtn.classList.add('readBtn');
  bookDiv.appendChild(readBtn);
  if(item.read===false) {
    readBtn.textContent = 'Not Read';
    readBtn.style.backgroundColor = '#e04f63';
  }else {
    readBtn.textContent = 'Read';
    readBtn.style.backgroundColor = '#63da63'
  }
  removeBtn.textContent = 'Remove'; 
  removeBtn.setAttribute('id', 'removeBtn');
  bookDiv.appendChild(removeBtn);    

  library.appendChild(bookDiv);

  removeBtn.addEventListener('click',()=>{
    myLibrary.splice(myLibrary.indexOf(item),1);
    render();
  });

  readBtn.addEventListener('click',()=>{
    item.read = !item.read;
    render();
  })
}