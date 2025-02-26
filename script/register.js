function handleRegister(event){
    event.preventDefault()

    let name =document.getElementById('name').value
    let name_err = document.getElementById('name_err')
    let username =document.getElementById('username').value
    let user_err = document.getElementById('user_err')
    let storename =document.getElementById('storename').value
    let store_err = document.getElementById('store_err')
    let storeaddress =document.getElementById('storeaddress').value
    let address_err = document.getElementById('address_err')
    let email =document.getElementById('email').value
    let email_err = document.getElementById('email_err')
    let number =document.getElementById('number').value
    let number_err = document.getElementById('number_err')
    let birth =document.getElementById('birth').value
    let birth_err = document.getElementById('birth_err')
    let upload =document.getElementById('upload').value
    let upload_err = document.getElementById('upload_err')

    if(name === ''){
        name_err.innerHTML ='**this field is required**'
    }else{
        name_err.innerHTML= ''
    }

    if(username === ''){
        user_err.innerHTML ='*this field is required*'
    }else{
        user_err.innerHTML= ''
    }

    if(storename === ''){
        store_err.innerHTML ='*this field is required*'
    }else{
        store_err.innerHTML= ''
    }

    if(storeaddress === ''){
        address_err.innerHTML ='*this field is required*'
    }else{
        address_err.innerHTML= ''
    }

    if(email === ''){
        email_err.innerHTML ='*this field is required*'
    }else{
        email_err.innerHTML= ''
    }

    if(number === ''){
        number_err.innerHTML ='*this field is required*'
    }else{
        number_err.innerHTML= ''
    }

    if(birth === ''){
        birth_err.innerHTML ='*this field is required*'
    }else{
        birth_err.innerHTML= ''
    }

    if(upload === ''){
        upload_err.innerHTML ='*this field is required*'
    }else{
        upload_err.innerHTML= ''
    }
}