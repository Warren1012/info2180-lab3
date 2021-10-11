window.onload = function newgame()
{
    activep = " ";
    var pmove = ["i","a","m","s","a","d","h","e","l"];
    var  turn= 10;
    var status = document.getElementById("status");
    var game = document.getElementById("board").children;
       
    for (let i = 0; i < game.length; i++) 
    {
        var brdgame = game[i];
        brdgame.classList.add("square");
        console.log(brdgame.classList);
    }
    
    var winner = false;
    
    for (let i = 0; i < game.length; i++) 
    {
        game.item(i).addEventListener("click", function () 
        {
            if(winner == false)
            {
                if (turn % 2 == 0) 
                {
                    game.item(i).innerHTML = "X";
                    game.item(i).classList.add("X");
                    pmove[i]="X";
                    activep=i;
                    winner = checkwinnerfunc(pmove, status, "X")
            
                } 
                else  
                {
                    game.item(i).innerHTML = "O";
                    game.item(i).classList.add("O");
                    pmove[i]="O";
                    activep=i;
                    winner= checkwinnerfunc(pmove, status, "O")
            }
            turn--;
        
            console.log("you clicked box number" + i);
            console.log(pmove);
            console.log(activep);
        }
        
        });

        game.item(i).onmouseenter = function () {
        mouseEnter();
        };
        function mouseEnter() {
        game.item(i).classList.add("hover");
        }
        game.item(i).onmouseleave = function () {
        mouseLeave();
        };
        function mouseLeave() {
        game.item(i).classList.remove("hover");
        }
    
    }

    const checkwinner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    function checkwinnerfunc(pmove, status, activep)
    {
    
        for (var j = 0; j < checkwinner.length; j++)
        {
            checkpos = checkwinner[j][0];
            checkpos1 = checkwinner [j][1];
            checkpos2 = checkwinner [j][2];
            console.log(checkpos);
            if (pmove[checkpos] == activep && pmove[checkpos1] == activep && pmove[checkpos2]==activep)
            {
                status.textContent = "Congratulation!" +"" + activep +" "+ "is the Winner!";
                status.classList.add("you-won");s
                return true;
            
            }
            else
            {
                return false;
            }
        
        }
    } 
    var newgame = document.querySelector(".btn");
    document.addEventListener('click', function(event)
    {
        if (event.target.matches('.btn'))
        {
            status.classList.remove("you-won");
            status.innerHTML =  'Move your mouse over a square and click to play an X or an O.'
            for (let y= 0; y<=game.length; y++)
            {
                game[y].classList.remove("X");
                game[y].classList.remove("O");
                game[y].innerHTML = "";
                newgame();
            }
        }
    });

   
    
}; 
