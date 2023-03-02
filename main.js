const form = document.querySelector('.form')
const input = document.querySelector('.form__input')

input.addEventListener('focus', function () {
    form.classList.add('form--active');
})


input.addEventListener('blur', function () {
    form.classList.remove('form--active');
})


document.querySelector('.menu-btn').addEventListener('click', function(

    ){
        document.querySelector('.menu-btn .first').classList.toggle('active')
        document.querySelector('.menu-btn .second').classList.toggle('active')
        document.querySelector('.menu-btn .third').classList.toggle('active')
        document.querySelector('.navigation__list-burger').classList.toggle('active')
        
        
    })
    
    
    document.querySelector('.navigation__list-burger').addEventListener('click', function(
    
        ){
            document.querySelector('.menu-btn .first').classList.toggle('active')
            document.querySelector('.menu-btn .second').classList.toggle('active')
            document.querySelector('.menu-btn .third').classList.toggle('active')
            document.querySelector('nav').classList.toggle('active')
            
            
        })