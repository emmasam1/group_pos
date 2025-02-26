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

// =======
function handleSubmit(event){
    event.preventDefault()

    let username = document.getElementById('username').value
    let user_err = document.getElementById('user_err')
    let password = document.getElementById('password').value
    let pass_err = document.getElementById('pass_err')

    if(username === ''){
        user_err.innerHTML = '**Input username**'
    }else{
        user_err.innerHTML = ''
    }

    if(password === ''){
        pass_err.innerHTML = '**Input your password**'
    }else if(password < 8){
        pass_err.innerHTML = '**Password must be atleast 8**'
    }

}


// d staff

function addStaff(){
    let addStaffs = document.querySelector('.D-overlay')
    addStaffs.style.display = 'block'
}