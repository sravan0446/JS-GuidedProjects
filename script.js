const li=document.querySelector("#book-list ul")

//Delete Books
li.addEventListener('click',function(e)
{
    if(e.target.className=='delete'){
        const lis=e.target.parentElement
        li.removeChild(lis)
    }
})

//Add Books
const form=document.forms['add-book']
form.addEventListener('submit',function(e){
  e.preventDefault();
  const value=form.querySelector('input[type="text"]').value
  
  //create elements

  const lis1=document.createElement('li')
  const book1=document.createElement('span')
  const delete1=document.createElement('span')
 
  //add content
  delete1.textContent='delete'
  book1.textContent=value

  book1.className='name'
  delete1.className='delete'

  
  //append to dom
  lis1.appendChild(book1)
  lis1.appendChild(delete1)
  li.appendChild(lis1)


})