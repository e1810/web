(function(){
    "use strict";
    const userNameInput = document.getElementById("user-name");
    const generateButton = document.getElementById("generate");
    const result = document.getElementById("result");
    const tweet = document.getElementById("tweet");

    const generated = [
        "{userName}? there's no such human in this world",
        "{userName} fell from a high place",
        "{userName} drowned",
        "{userName} tried tor swim in lava",
        "{userName} was pricked to death",
        "{userName} fell out of the world",
        "{userName} suffocated in a wall",
        "{userName} blew up",
        "{userName} experienced kinetic energy",
        "{userName} got peaceful life"
    ];

    function generate(userName){
        let charCodeSum = 0;
        for(let i=0; i<userName.length; i++) charCodeSum += userName.charCodeAt(i);
        return generated[charCodeSum%answers.length].replace(/\{userName\}/g, userName);
    }

    generateButton.onclick = ()=>{
        while(result.firstChild) result.removeChild(result.firstChild);
        const userName = userNameInput.value;
        if(userName.length){
            const p = document.createElement("p");
            p.innerText = generate(userName);
            result.appendChild(p);
        }
    }

})();