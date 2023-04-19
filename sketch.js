const MainDiv = document.createElement('div');
MainDiv.setAttribute('class', 'mainDiv')
function divs(){
    
    const body = document.body
    body.appendChild(MainDiv)
    for(let i = 0; i < 64**2; i++){
        
        const div = document.createElement('div');
        div.setAttribute('class', 'innerDiv')
        div.setAttribute('oncontextmenu', 'return false;')
        div.addEventListener('click', () => {div.style.backgroundColor = 'purple'})
        MainDiv.appendChild(div)
    }
}
divs()

