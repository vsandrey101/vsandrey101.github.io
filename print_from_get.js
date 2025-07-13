window.onload = function(){
    const urlParams = new URLSearchParams(window.location.search);
    name = urlParams.get('name');
    msg = urlParams.get('message');
    const holder = document.getElementById('to_change');
    if (name !== 'null' && msg !== 'null'){
        holder.innerText = `Hello ${name}! ${msg}!`;
    } else {
        holder.innerText = "Не были переданы значения!"
    }

}
