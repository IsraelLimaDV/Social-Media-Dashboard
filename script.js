function changeColor(){

    changeButton()

    if(toggle == true){
    document.documentElement.style.setProperty('--bg-color', 'hsl(230, 17%, 14%)')
    document.documentElement.style.setProperty('--bg-top-color', 'hsl(232, 19%, 15%)')
    document.documentElement.style.setProperty('--box-bg', 'hsl(228, 28%, 20%)')
    document.documentElement.style.setProperty('--text-secondary', 'hsl(228, 34%, 66%)')
    document.documentElement.style.setProperty('--text-main', 'hsl(0, 0%, 100%)')
    document.documentElement.style.setProperty('--text-tittle-two', 'hsl(0, 0%, 100%)')
    document.documentElement.style.setProperty('--hover-bg-light', 'hsl(227, 23%, 28%)')
    } else if (toggle == false){
    document.documentElement.style.setProperty('--bg-color', 'hsl(0, 0%, 100%)')
    document.documentElement.style.setProperty('--bg-top-color', 'hsl(225, 100%, 98%)')
    document.documentElement.style.setProperty('--box-bg', 'hsl(227, 47%, 96%)')
    document.documentElement.style.setProperty('--text-secondary', 'hsl(228, 12%, 44%)')
    document.documentElement.style.setProperty('--text-main', 'hsl(230, 17%, 14%)')
    document.documentElement.style.setProperty('--text-tittle-two', 'hsl(228, 12%, 44%)')
    document.documentElement.style.setProperty('--hover-bg-light', 'hsl(228, 50%, 92%)')
        }
    }
   

function changeButton(){
    
    toggle = document.getElementsByClassName('toggle')[0].classList.toggle('active-dark')

    return toggle
}