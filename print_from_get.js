window.onload = function(){
    const urlParams = new URLSearchParams(window.location.search);
    in_name = urlParams.get('name');
    msg = urlParams.get('message');
    const holder = document.getElementById('to_change');
    console.log(in_name);
    console.log(msg);
    if (in_name != null && msg != null){
        holder.innerText = `Hello ${in_name}! ${msg}!`;
    } else {
        holder.innerText = "Не были переданы значения!"
    }

}
