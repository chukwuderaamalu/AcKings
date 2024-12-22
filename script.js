

function myFunction () {

    let computerMove = Math.random()
            if (computerMove > 0 &&  computerMove <= 1/3){
               computerMove =`rock`
            }
             else if (computerMove > 1/3  && computerMove < 2/3){
                computerMove =`paper`
            }
            else if (computerMove > 2/3 && computerMove < 1){
                computerMove =`scissors`
            }
            
    
            if(computerMove === `rock`) {
           result = `Computer chose rock`
           display =  `You chose rock, ${result}.
           The result is a Tie`

        }
        else if(computerMove === `paper`){
             result = `Computer chose paper`
             display =  `You chose rock, ${result}.
           The result is a Win`

        }
        else if (computerMove === `scissors`){
            result = `Computer chose scissors`
            display =  `You chose rock, ${result}.
           The result is a Loss`

        }
    
       

         document.querySelector(`.myDiv`).innerHTML = display
        }
function myFunction2 () {

    let computerMove = Math.random()
            if (computerMove > 0 &&  computerMove <= 1/3){
               computerMove =`rock`
            }
             else if (computerMove > 1/3  && computerMove < 2/3){
                computerMove =`paper`
            }
            else if (computerMove > 2/3 && computerMove < 1){
                computerMove =`scissors`
            }
            
    
            if(computerMove === `rock`) {
           result = `Computer chose rock`
           display =  `You chose paper, ${result}.
           The result is a Loss`

        }
        else if(computerMove === `paper`){
             result = `Computer chose paper`
             display =  `You chose paper, ${result}.
           The result is a Tie`

        }
        else if (computerMove === `scissors`){
            result = `Computer chose scissors`
            display =  `You chose paper, ${result}.
           The result is a Win `

        }
    
       

         document.querySelector(`.myDiv`).innerHTML = display
        }




function myFunction3 () {

    let computerMove = Math.random()
            if (computerMove > 0 &&  computerMove <= 1/3){
               computerMove =`rock`
            }
             else if (computerMove > 1/3  && computerMove < 2/3){
                computerMove =`paper`
            }
            else if (computerMove > 2/3 && computerMove < 1){
                computerMove =`scissors`
            }
            
    
            if(computerMove === `rock`) {
           result = `Computer chose rock`
           display =  `You chose scissors, ${result}.
           The result is a Loss`

        }
        else if(computerMove === `paper`){
             result = `Computer chose paper`
             display =  `You chose scissors, ${result}.
           The result is a Win`

        }
        else if (computerMove === `scissors`){
            result = `Computer chose scissors`
            display =  `You chose scissors, ${result}.
           The result is a Tie`

        }
    
       


         document.querySelector(`.myDiv`).innerHTML = display
        }






