var visibleMenu = false;

function showmenu(){
    if(!visibleMenu){
        document.getElementById('toolbar').style.visibility = "visible";
    }
    else{
        document.getElementById('toolbar').style.visibility = "hidden";
    }
    visibleMenu = !visibleMenu;
}