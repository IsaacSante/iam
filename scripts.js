//setup before functions
let typingTimer;                //timer identifier
let doneTypingInterval = 3000;  //time in ms (5 seconds)
let myInput = document.getElementById('edit');

//on keyup, start the countdown
myInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (myInput.innerText ) {
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
});

//user is "finished typing," do something
function doneTyping () {
var content = document.getElementById("first");
content.textContent += "and I am from";
content.innerHTML += "&nbsp;"



console.log("im typinggggg");
var newSpan = document.createElement('span');
document.getElementById('first').appendChild(newSpan);
newSpan.contentEditable ="true";
newSpan.setAttribute("contenteditable" , "true");
newSpan.setAttribute("id", "edit2");
newSpan.onkeyup = myListener;
}



function myListener(e) {
    let from = document.getElementById('edit2');
    from.addEventListener('keyup', () => {
        clearTimeout(typingTimer);
        if (from.innerText ) {
            typingTimer = setTimeout(doneTyping2, doneTypingInterval);
        }
    });




function doneTyping2 () {
    var content = document.getElementById("first");
    content.innerHTML += "&nbsp;"
    content.textContent += "and I majored";
    content.innerHTML += "&nbsp;"
    var newSpan2 = document.createElement('span');
    document.getElementById('first').appendChild(newSpan2);
    newSpan2.contentEditable ="true";
    newSpan2.setAttribute("contenteditable" , "true");
    newSpan2.setAttribute("id", "edit3");
    newSpan2.onkeyup = mySecondListner;
    }
}



function mySecondListner(e) {
    let from2 = document.getElementById('edit2');
    let work = document.getElementById('edit3');
    // console.log(from2)
    work.addEventListener('keyup', () => {
        console.log('IM LISTENING');
        clearTimeout(typingTimer);
        if (work.innerText ) {
            typingTimer = setTimeout(doneTyping3, doneTypingInterval);
        }
    });
};


function doneTyping3 () {
    var content = document.getElementById("first");
    content.textContent += ".";
    content.innerHTML += "&nbsp;"
    content.textContent += "You really don't have to try and impress me.";
    content.innerHTML += "&nbsp;"
    content.textContent += "If you could be anyone who would you rather be?";
    content.innerHTML += "&nbsp;"
    var newSpan3 = document.createElement('span');
    document.getElementById('first').appendChild(newSpan3);
    newSpan3.contentEditable ="true";
    newSpan3.setAttribute("contenteditable" , "true");
    newSpan3.setAttribute("id", "edit4");
    newSpan3.onkeyup = myThirdListner;

}

function myThirdListner(e) {
    let work = document.getElementById('edit4');
    work.addEventListener('keyup', () => {
        console.log('IM LISTENING');
        clearTimeout(typingTimer);
        if (work.innerText ) {
            typingTimer = setTimeout(doneTyping4, doneTypingInterval);
        }
    });
};

function doneTyping4 () {
    var content = document.getElementById("first");
    content.innerHTML += "&nbsp;"
    content.textContent += "That's quite interesting.";
    content.innerHTML += "&nbsp;"
    content.textContent += "Id be a musician…";
    content.innerHTML += "&nbsp;"
    content.textContent += "♩ be boop bla ♩♩ bla beep beep.♩♩♩";
    content.innerHTML += "&nbsp;"
    content.textContent += "Your turn, give me a rhyme.";
    content.innerHTML += "&nbsp;"
    var newSpan4 = document.createElement('span');
    document.getElementById('first').appendChild(newSpan4);
    newSpan4.contentEditable ="true";
    newSpan4.setAttribute("id", "edit5");
    newSpan4.onkeyup = myFourthListner;
}

function myFourthListner(e) {
    let work = document.getElementById('edit5');
    work.addEventListener('keyup', () => {
        console.log('IM LISTENING');
        clearTimeout(typingTimer);
        if (work.innerText ) {
            typingTimer = setTimeout(doneTyping5, doneTypingInterval);
        }
    });
};

function doneTyping5 () {
    var content = document.getElementById("first");
    content.innerHTML += ".&nbsp;"
    content.textContent += "That sounds quite beautiful.";
    content.innerHTML += "&nbsp;"
    content.textContent += "Please give me another beat.";
    content.innerHTML += "&nbsp;"
    var newSpan5 = document.createElement('span');
    document.getElementById('first').appendChild(newSpan5);
    newSpan5.contentEditable ="true";
    newSpan5.setAttribute("id", "edit6");
    newSpan5.onkeyup = myFifthListner;
}

function myFifthListner(e) {
    let work = document.getElementById('edit6');
    work.addEventListener('keyup', () => {
        console.log('IM LISTENING');
        clearTimeout(typingTimer);
        if (work.innerText ) {
            typingTimer = setTimeout(doneTyping6, doneTypingInterval);
        }
    });
};

function doneTyping6 () {
    var content = document.getElementById("first");
    content.innerHTML += ".&nbsp;"
    content.textContent += "WOW. Whats your soundcloud.";
    content.innerHTML += "&nbsp;"
    var newSpan6 = document.createElement('span');
    document.getElementById('first').appendChild(newSpan6);
    newSpan6.contentEditable ="true";
    newSpan6.setAttribute("id", "edit7");
    newSpan6.onkeyup = mySixthListner;
}

function mySixthListner(e) {
    let work = document.getElementById('edit7');
    work.addEventListener('keyup', () => {
        console.log('IM LISTENING');
        clearTimeout(typingTimer);
        if (work.innerText ) {
            typingTimer = setTimeout(doneTyping7, doneTypingInterval);
        }
    });
};

function doneTyping7 () {
    var content = document.getElementById("first");
    content.innerHTML += ".&nbsp;"
    content.textContent += "I love to play.";
    content.innerHTML += "&nbsp;"
    content.textContent += "Let's make a play...";
    content.textContent += "Long ago, the four nations lived together in harmony.";
    content.innerHTML += "&nbsp;"
    var newSpan7 = document.createElement('span');
    document.getElementById('first').appendChild(newSpan7);
    newSpan7.contentEditable ="true";
    newSpan7.setAttribute("id", "edit8");
    newSpan7.onkeyup = mySeventhListner;
}

function mySeventhListner(e) {
    let work = document.getElementById('edit8');
    work.addEventListener('keyup', () => {
        console.log('IM LISTENING');
        clearTimeout(typingTimer);
        if (work.innerText ) {
            typingTimer = setTimeout(doneTyping8, doneTypingInterval);
        }
    });
};

function doneTyping8 () {
    var content = document.getElementById("first");
    content.innerHTML += ".&nbsp;"
    content.textContent += "And then everyone defaulted on their loans during the recession.";
    content.innerHTML += "&nbsp;"
    var newSpan8 = document.createElement('span');
    document.getElementById('first').appendChild(newSpan8);
    newSpan8.contentEditable ="true";
    newSpan8.setAttribute("id", "edit9");
    newSpan8.onkeyup = myEightListner;
}

function myEightListner(e) {
    let work = document.getElementById('edit9');
    work.addEventListener('keyup', () => {
        console.log('IM LISTENING');
        clearTimeout(typingTimer);
        if (work.innerText ) {
            typingTimer = setTimeout(doneTyping9, doneTypingInterval);
        }
    });
};

function doneTyping9 () {
    var content = document.getElementById("first");
    content.innerHTML += ".&nbsp;"
    content.textContent += "And it was really crippling debt there was just no way to recover.";
    content.innerHTML += "&nbsp;"
    var newSpan9 = document.createElement('span');
    document.getElementById('first').appendChild(newSpan9);
    newSpan9.contentEditable ="true";
    newSpan9.setAttribute("id", "edit10");
    newSpan9.onkeyup = myNinthListner;
}

function myNinthListner(e) {
    let work = document.getElementById('edit10');
    work.addEventListener('keyup', () => {
        console.log('IM LISTENING');
        clearTimeout(typingTimer);
        if (work.innerText ) {
            typingTimer = setTimeout(doneTyping10, doneTypingInterval);
        }
    });
};

function doneTyping10 () {
    var content = document.getElementById("first");
    content.innerHTML += ".&nbsp;"
    content.textContent += "Then Obama bailed out all the banks.";
    content.innerHTML += "&nbsp;"
    var newSpan10 = document.createElement('span');
    document.getElementById('first').appendChild(newSpan10);
    newSpan10.contentEditable ="true";
    newSpan10.setAttribute("id", "edit11");
    newSpan10.onkeyup = myTenthListner;
}

function myTenthListner(e) {
    let work = document.getElementById('edit11');
    work.addEventListener('keyup', () => {
        console.log('IM LISTENING');
        clearTimeout(typingTimer);
        if (work.innerText ) {
            typingTimer = setTimeout(doneTyping11, doneTypingInterval);
        }
    });
};

function doneTyping11 () {
    var content = document.getElementById("first");


    content.innerHTML += ".&nbsp;"
    content.textContent += "...Well would you look at that.";
    content.innerHTML += "&nbsp;"
    content.textContent += "That play makes absolutely no sense.";
    content.innerHTML += "&nbsp;"
    content.textContent += "What do you think about it.";
    content.innerHTML += "&nbsp;"
    

    var newSpan11 = document.createElement('span');
    document.getElementById('first').appendChild(newSpan11);
    newSpan11.contentEditable ="true";
    newSpan11.setAttribute("id", "edit12");
    newSpan11.onkeyup = myEleventhListner;
}

function myEleventhListner(e) {
    let work = document.getElementById('edit12');
    work.addEventListener('keyup', () => {
        console.log('IM LISTENING');
        clearTimeout(typingTimer);
        if (work.innerText ) {
            typingTimer = setTimeout(doneTyping12, doneTypingInterval);
        }
    });
};

function doneTyping12 () {
    var content = document.getElementById("first");
    content.innerHTML += ".&nbsp;"
    content.textContent += "I completely agree.";
    content.innerHTML += "&nbsp;"
    content.textContent += "How do you feel about the fact that I've been completely wasting your time for the past minute.";
    content.innerHTML += "&nbsp;"
    var newSpan12 = document.createElement('span');
    document.getElementById('first').appendChild(newSpan12);
    newSpan12.contentEditable ="true";
    newSpan12.setAttribute("id", "edit13");
    newSpan12.onkeyup = myTwelListner;
}

function myTwelListner(e) {
    let work = document.getElementById('edit13');
    work.addEventListener('keyup', () => {
        console.log('IM LISTENING');
        clearTimeout(typingTimer);
        if (work.innerText ) {
            typingTimer = setTimeout(doneTyping13, doneTypingInterval);
        }
    });
};

function doneTyping13 () {
    var content = document.getElementById("first");
    content.innerHTML += ".&nbsp;"
    content.textContent += "Im just teasing,";
    content.innerHTML += "&nbsp;"
    content.textContent += "but let me see if you learned anything...";
    content.innerHTML += "&nbsp;"
    content.textContent += "Who are you?";
    content.innerHTML += "&nbsp;"
    var newSpan13 = document.createElement('span');
    document.getElementById('first').appendChild(newSpan13);
    newSpan13.contentEditable ="true";
    newSpan13.setAttribute("id", "edit14");
    newSpan13.onkeyup = myTirListner;
}


function myTirListner(e) {
    let work = document.getElementById('edit14');
    work.addEventListener('keyup', () => {
        console.log('IM LISTENING');
        clearTimeout(typingTimer);
        if (work.innerText ) {
            typingTimer = setTimeout(doneTyping14, doneTypingInterval);
        }
    });
};

function doneTyping14 () {
    var content = document.getElementById("first");
    content.innerHTML = "";
}

