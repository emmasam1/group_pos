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