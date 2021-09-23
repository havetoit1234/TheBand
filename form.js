var byBtns = document.querySelectorAll('.js-btn-bytickes');
var byModel = document.querySelector('.model');
var closeIcon = document.querySelector('.modal-close');
var modelContent =document.querySelector('.modal-content')
var modalCancel = document.querySelector('.modal-cancel');
var header = document.querySelector('.header');
var mobieMenu = document.querySelector('.mobie-menu');
var headerHeight = header.clientHeight;/* lấy giá trị CSS Height của thẻ header */
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
var showForm = function(){
    byModel.classList.add('open');
}
var closeForm = function(){
    byModel.classList.remove('open');
}

for (byBtn of byBtns){
    byBtn.addEventListener('click',showForm);
}

closeIcon.addEventListener('click',closeForm);
byModel.addEventListener('click',closeForm);
modelContent.addEventListener('click',function(event){
    event.stopPropagation(); /* dừng hành động nổi bọt */
})

modalCancel.addEventListener('click',closeForm);

/* Đóng mở menu */
mobieMenu.addEventListener('click',function(){
    var isClose = header.clientHeight === headerHeight;
   /*  if(isClose){
        header.style.height = 'auto';
    }else{
        header.style.height= '46px';
    } */
     
    isClose ? header.style.height = 'auto' :header.style.height= null;
    
})
console.log(menuItems);
/* Tự động đóng menu */
for (var i = 0 ; i < menuItems.length ; i++){
    var menuItem = menuItems[i];
    
    menuItem.addEventListener('click',function(event){
        var isParenrMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('supnav');
        /* this ở đây được hiểu là khi click vào phần tử nào thì nó trả về phần tử đó */ 
        if(isParenrMenu){
            event.preventDefault();
        }else{
            header.style.height= null;
        }
    });

    
}