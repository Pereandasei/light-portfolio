const menuIcon = document.querySelector('.menu-icon');
const xIcon = document.querySelector('.x-icon');

menuIcon.addEventListener('click', () =>{
    document.querySelector('.side-bar').style = 'display: flex';
});

xIcon.addEventListener('click', () =>{
    document.querySelector('.side-bar').style = 'display: none';
})

