const li=document.querySelector("#book-list ul")
li.addEventListener('click',function(e)
{
    if(e.target.className=='delete'){
        const lis=e.target.parentElement
        li.removeChild(lis)
    }
})