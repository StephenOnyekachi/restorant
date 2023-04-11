
function more(){
    var menues = document.getElementById("menues")

    if(menues.style.display === "none"){
        menues.style.display = "block";
    }
    else{
        menues.style.display = "none";
    }
}

function menu(){
    var menues = document.getElementById("menues")

    if(menues.style.display === "block"){
        menues.style.display = "none";
    }
}