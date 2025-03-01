// <<<<<<< HEAD
// function addprod(){
//     let visible = document.querySelector('.t-forms')
//     visible.style.display = 'block'
//     let overlay = document.querySelector('.t-overlay')
//     overlay.style.backgroundColor = '#00000033'
// }
$(document).ready(function(){
    $('.t-btn').click(function(){
        console.log('cl')
        let overlay = $('.t-overlay')
        overlay.stop(true,true).fadeIn(500)
    })
    $('#close_form').click(function(event){
        event.preventDefault()
        let overlay = $('.t-overlay')
        overlay.stop(true,true).fadeOut(500)
    })
    $('#create_prod').click(function(event){
       event.preventDefault()
       console.log('vb')

       let name = $('#name').val()
       let name_err = $('#name_err')
       let bulk = $('#bulk').val()
       let bulk_err = $('#bulk_err')
       let unit = $('#unit').val()
       let unit_err= $('#unit_err')
       let quantity = $('#quantity').val()
       let quantity_err= $('#quantity_err')
       let manDate = $('#man_date').val()
       let manDate_err = $('#man_date_err')
       let ex_date = $('#ex_date').val()
       let ex_date_err = $('#ex_date_err')
    
       
       if(name === ''){
          name_err.text('*This Field is Required')
       }else{
        name_err.text('')
       }

       if(bulk === ''){
        bulk_err.text('*This Field is Required')
       }else{
       bulk_err.text('')
       }

     if(unit === ''){
        unit_err.text('*This Field is Required')
     }else{
      unit_err.text('')
     }

     if(quantity === ''){
        quantity_err.text('*This Field is Required')
     }else{
      quantity_err.text('')
     }

     if(manDate === ''){
        manDate_err.text('*This Field is Required')
     }else{
      manDate_err.text('')
     }

     if(ex_date === ''){
        ex_date_err.text('*This Field is Required')
     }else{
      ex_date_err.text('')
     }


       
       
    })
})

$(document).ready(function(){
    $('.D-btn').click(function(){
        console.log('cl')
        let overlay = $('.D-overlay')
        overlay.stop(true,true).fadeIn(500)
    })
    $('#close_form').click(function(event){
        event.preventDefault()
        let overlay = $('.D-overlay')
        overlay.stop(true,true).fadeOut(500)
    })
    $('#addStaff').click(function(event){
       event.preventDefault()
       console.log('vb')

       let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
       let fullname = $('#fullname').val()
       let nameErr = $('#nameErr')
       let email = $('#email').val()
       let emailErr = $('#emailErr')
       let Gname = $('#Gname').val()
       let GErr = $('#GErr')
       let address = $('#address').val()
       let addrErr = $('#addrErr')
       let phoneNo = $('#phoneNo').val()
       let NumErr = $('#NumErr')
       let GPhoneNo = $('#GPhoneNo').val()
       let gpErr = $('#gpErr')

       if(fullname === ''){
        nameErr.text("*required field*") 
     }else{
        nameErr.text('')
     }

     if(email == ''){
        emailErr.text("*required field*")  
    }else if(!regex.test(email)){
        emailErr.text("*enter a valid email address*")
    }else{
        emailErr.text("")
    }

   if(Gname === ''){
    GErr.text("*required field*") 
   }else{
    GErr.text('')
   }

   if(address === ''){
    addrErr.text("*required field*") 
   }else{
    addrErr.text('')
   }

   if(phoneNo === ''){
    NumErr.text("*required field*") 
   }else if(phoneNo.length < 11 || phoneNo.length !== 11){
    NumErr.text('*11 digits number required')
   }else{
    NumErr.text('')
   }

   if(GPhoneNo == ''){
    gpErr.text("*required field*") 
   }else if(GPhoneNo.length < 11 || GPhoneNo.length !== 11){
    gpErr.text('*11 digits number required')
   }else{
    gpErr.text('')
   }
})
})

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