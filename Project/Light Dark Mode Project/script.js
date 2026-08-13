 const toggleSwitch = document.querySelector('input[type="checkbox"]')
//  Event Listener
function switchTheme(event){
   if(event.target.checked){
    document.documentElement.setAttribute('data-theme','dark');
   }
   else{
    document.documentElement.setAttribute('data-theme','light')
   }
}
toggleSwitch.addEventListener('change',switchTheme)