let notification = document.createElement('span');
document.onkeypress = function(event) {
    let selected = document.querySelectorAll('.active');

    for (let elem of selected) {
        elem.classList.remove('active');
    }
    if (event.charCode == "13" || event.charCode == "115" || event.charCode == "101" || event.charCode == "111" || event.charCode == "110" || event.charCode == "108" || event.charCode == "122") {
        let activeBtn = document.getElementById(`${event.charCode}`);
        activeBtn.classList.add('active')
        activeBtn.innerHTML = `${event.key}`
    }
    if (event.charCode == "83" || event.charCode == "69" || event.charCode == "79" || event.charCode == "78" || event.charCode == "76" || event.charCode == "90") {
        let activeBtn = document.getElementById(`${(event.charCode + 32)}`);
        activeBtn.classList.add('active')
        activeBtn.innerHTML = `${event.key}`
    }


}