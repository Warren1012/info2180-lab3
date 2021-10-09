window.onload = function(){start()}
function start()
{
    var game= document.getElementById("board").childNodes;
    game.forEach(element => {element.className= "square";});  
}
