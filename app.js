var imgFeature = document.querySelector('.img-feature')
var listImg =document.querySelectorAll('.list-image img')
var prevBtn=document.querySelector('.prev')
var nextBtn=document.querySelector('.next')

var currentIndex=0;
var currentIndex1=0;
var dots = document.querySelector('.slider-dot-item')
var dotsItem =document.querySelectorAll('.slider-dots li')
function updateBydotIndex(index){
    // remove active class
    document.querySelectorAll('.slider-dot-item').forEach(item=>{
        item.classList.remove('active2')
    })
    currentIndex1=index
    dotsItem[index].classList.add('active2')
}
dotsItem.forEach((dotElement,index)=>{
    dotElement.addEventListener('click',e=>{
        
        updateBydotIndex(index)
       
        updateImageByIndex(index)
          
    
    })
})
function updateImageByIndex(index){
    // remove active class
    document.querySelectorAll('.list-image div').forEach(item=>{
        item.classList.remove('active')
    })
    currentIndex=index
    imgFeature.src=listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}

    listImg.forEach((imgElement,index)=>{
    imgElement.addEventListener('click',e=>{
        imgFeature.style.opacity = '0'
        setTimeout(()=>{
        updateImageByIndex(index)
        updateBydotIndex(index)
        imgFeature.style.opacity = '1'
    },200)
    })
})
prevBtn.addEventListener('click',e =>{
   if(currentIndex == 0){
        currentIndex=(listImg.length-1)
   }else{
       currentIndex--
   }
    imgFeature.style.animation=''
    setTimeout(()=>{
       updateImageByIndex(currentIndex)
       updateBydotIndex(currentIndex)
        imgFeature.style.animation = 'slideLeft 1s ease-in-out forwards'
   },200)
})
   
nextBtn.addEventListener('click',e =>{
    if(currentIndex == listImg.length-1){
        currentIndex=0
   }else{
        currentIndex++
        
   }
   imgFeature.style.animation=''
   setTimeout(() =>{
        updateImageByIndex(currentIndex)
        updateBydotIndex(currentIndex)
        imgFeature.style.animation='slideRight 1s ease-in-out forwards'
   },200)
})
//TỰ chuyển ảnh   
setInterval(function(){
    if(currentIndex == listImg.length-1){
        currentIndex=0
   }else{
        currentIndex++
   }
   imgFeature.style.animation=''
   setTimeout(() =>{
        updateImageByIndex(currentIndex)
        updateBydotIndex(currentIndex)
        imgFeature.style.animation='slideRight 1s ease-in-out forwards'
   },1000)
},8500)

var btnopen = Array.from(document.getElementsByClassName('open-modal-btn'))
var modal = document.querySelector('.modal')
var iconClose=document.querySelector('.modal_header i')
var btnLogin=document.querySelector('.modal_footer button')

var account = document.querySelector('.account')
var password = document.querySelector('.password')
var sldots = document.querySelector('.slider-dots')

function toggleModal(e){
    // console.log(e.target);
   modal.classList.toggle("hide")

   sldots.classList.toggle("hide2")
   
}
btnLogin.addEventListener("click",()=>{
    if(account.value=='admin'&&password.value=='12345678'){
        alert('Đăng nhập thành công')
    }else{
        alert('Đăng nhập thất bại')
    }
})
iconClose.addEventListener("click",toggleModal)
modal.addEventListener('click',function(e){
   if(e.target==e.currentTarget){
       toggleModal()
   }
})


btnopen.forEach( ( button, index ) => {
    button.addEventListener("click",toggleModal)
})
