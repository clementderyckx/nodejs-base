const paragraph = document.getElementById('message')

if(localStorage.getItem('token')){
    paragraph.innerHTML = 'Welcome to the private area'
} else {
    paragraph.innerHTML = "you are not connected"
}