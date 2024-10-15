const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
const skills =  document.getElementById('skills') as HTMLAnchorElement


// add event listener

toggleButton.addEventListener('click', ()=> {
    if(skills.style.display === 'none') {
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
});