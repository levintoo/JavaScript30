const checkboxes = document.querySelectorAll('.item input[type="checkbox"]');

let lastCheked;

function handleCheck(e) {

    let inBetween = false;
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
        console.log(checkbox)
           if (checkbox === this || checkbox === lastCheked) {
            inBetween = !inBetween;   
           }

           if(inBetween){
            checkbox.checked = true;
           }
        });
    }

    // if(e.shiftKey && !this.checked) {
    //     console.log('unchecking now');
    // }
    lastCheked =  this;
    // console.log(lastCheked);
}

checkboxes.forEach(checkbox => (checkbox.addEventListener('click',handleCheck)));