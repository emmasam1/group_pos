// function handleRegister(event){
//     event.preventDefault()

//     let name =document.getElementById('name').value
//     let name_err = document.getElementById('name_err')
//     let username =document.getElementById('username').value
//     let user_err = document.getElementById('user_err')
//     let storename =document.getElementById('storename').value
//     let store_err = document.getElementById('store_err')
//     let storeaddress =document.getElementById('storeaddress').value
//     let address_err = document.getElementById('address_err')
//     let email =document.getElementById('email').value
//     let email_err = document.getElementById('email_err')
//     let number =document.getElementById('number').value
//     let number_err = document.getElementById('number_err')
//     let birth =document.getElementById('birth').value
//     let birth_err = document.getElementById('birth_err')
//     let upload =document.getElementById('upload').value
//     let upload_err = document.getElementById('upload_err')

//     if(name === ''){
//         name_err.innerHTML ='**this field is required**'
//     }else{
//         name_err.innerHTML= ''
//     }

//     if(username === ''){
//         user_err.innerHTML ='*this field is required*'
//     }else{
//         user_err.innerHTML= ''
//     }

//     if(storename === ''){
//         store_err.innerHTML ='*this field is required*'
//     }else{
//         store_err.innerHTML= ''
//     }

//     if(storeaddress === ''){
//         address_err.innerHTML ='*this field is required*'
//     }else{
//         address_err.innerHTML= ''
//     }

//     if(email === ''){
//         email_err.innerHTML ='*this field is required*'
//     }else{
//         email_err.innerHTML= ''
//     }

//     if(number === ''){
//         number_err.innerHTML ='*this field is required*'
//     }else{
//         number_err.innerHTML= ''
//     }

//     if(birth === ''){
//         birth_err.innerHTML ='*this field is required*'
//     }else{
//         birth_err.innerHTML= ''
//     }

//     // if(upload === ''){
    //     upload_err.innerHTML ='*this field is required*'
    // }else{
    //     upload_err.innerHTML= ''
    // }
// }

$(document).ready(function(){

    $('#register').submit(function(e){
        e.preventDefault()
        let name =$('#name').val()
        let name_err = $('#name_err')
        if(name === ''){
            name_err.text('**This field is required**')
        }else{
            name_err.text('')
        }

        let username =$('#username').val()
        let user_err = $('#user_err')
        if(username === ''){
            user_err.text('**This field is required**')
        }else{
            user_err.text('')
        }

        let password =$('#password').val()
        let pass_err = $('#pass_err')
        if(password === ''){
            pass_err.text('**This field is required**')
        }else{
            pass_err.text('')
        }

        let confirm =$('#confirm').val()
        let confirm_err = $('#confirm_err')
        if(confirm === ''){
            confirm_err.text('**This field is required**')
        }else{
            confirm_err.text('')
        }

        let storename =$('#storename').val()
        let store_err = $('#store_err')
        if(storename === ''){
            store_err.text('**This field is required**')
        }else{
            store_err.text('')
        }

        let storeaddress =$('#storeaddress').val()
        let address_err = $('#address_err')
        if(storeaddress === ''){
            address_err.text('**This field is required**')
        }else{
            address_err.text('')
        }

        let email =$('#email').val()
        let email_err = $('#email_err')
        if(email === ''){
            email_err.text('**This field is required**')
        }else{
            email_err.text('')
        }

        let number =$('#number').val()
        let number_err = $('#number_err')
        if(number === ''){
            number_err.text('**This field is required**')
        }else{
            number_err.text('')
        }

        let birth =$('#birth').val()
        let birth_err = $('#birth_err')
        if(birth === ''){
            birth_err.text('**This field is required**')
        }else{
            birth_err.text('')
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


    // let looked_eye=$('.fa-eye')
    // let blind_eye = $('.fa-eye-slash')
    // blind_eye.hide()
    // $('.look').click(function(){
    //     let confirm = $('#confirm')
    //     confirm.attr('type', 'text')
        
    //    looked_eye.hide()
    //     blind_eye.show()
    // })

    // $('.blind').click(function(){
    //     let confirm = $('#confirm')
    //     confirm.attr('type', 'password')
        
    //     looked_eye.show()
    //     blind_eye.hide()
    // })

    
});
   
