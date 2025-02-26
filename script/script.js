// <<<<<<< HEAD
function addprod(){
    let visible = document.querySelector('.t-forms')
    visible.style.display = 'block'
    let overlay = document.querySelector('.t-overlay')
    overlay.style.backgroundColor = '#00000033'
}
// =======
// function handleSubmit(event){
//     event.preventDefault()

//     let username = document.getElementById('username').value
//     let user_err = document.getElementById('user_err')
//     let password = document.getElementById('password').value
//     let pass_err = document.getElementById('pass_err')

//     if(username === ''){
//         user_err.innerHTML = '**Input username**'
//     }else{
//         user_err.innerHTML = ''
//     }

//     if(password === ''){
//         pass_err.innerHTML = '**Input your password**'
//     }else if(password < 8){
//         pass_err.innerHTML = '**Password must be atleast 8**'
//     }
// }
$(document).ready(function(){


    $('#form').submit(function(e){
        e.preventDefault()
        let username = $('#username').val()
        let user_err =$('#user_err')
        if(username === ''){
            user_err.text('**Input username**')
        }else{
            user_err.text = ''
        }

        let password =$('#password').val()
        let pass_err =$('#pass_err')
        if(password === ''){
            pass_err.text('**Input password**')
        }else{
            pass_err.text = ''
        }

      
    })

    let open_eye=$('.fa-eye')
    let closed_eye = $('.fa-eye-slash')
    open_eye.hide()
    $('.open').click(function(){
        let password = $('#password')
        password.attr('type', 'text')
        
        closed_eye.hide()
        open_eye.show()
    })

    $('.close').click(function(){
        let password = $('#password')
        password.attr('type', 'password')
        
        closed_eye.show()
        open_eye.hide()
    })



});



// d staff

function addStaff(){
    let addStaffs = document.querySelector('.D-overlay')
    addStaffs.style.display = 'block'
}