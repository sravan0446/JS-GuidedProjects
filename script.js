var dbutton=document.querySelectorAll("#adding-book .delete")
Array.from(dbutton).forEach(function(btn){
btn.addEventListener('click',function(e){
    const li=e.target.parentElement;

    li.parentNode.removeChild(li)


})
})