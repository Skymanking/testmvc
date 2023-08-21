Podium = {};
Podium.keydown = function (k) {
    var oEvent = document.createEvent('KeyboardEvent');

    // Chromium Hack
    Object.defineProperty(oEvent, 'keyCode', {
        get: function () {
            return this.keyCodeVal;
        }
    });
    Object.defineProperty(oEvent, 'which', {
        get: function () {
            return this.keyCodeVal;
        }
    });

    if (oEvent.initKeyboardEvent) {
        oEvent.initKeyboardEvent("keydown", true, true, document.defaultView, k, k, "", "", false, "");
    } else {
        oEvent.initKeyEvent("keydown", true, true, document.defaultView, false, false, false, false, k, 0);
    }

    oEvent.keyCodeVal = k;

    if (oEvent.keyCode !== k) {
        alert("keyCode mismatch " + oEvent.keyCode + "(" + oEvent.which + ")");
    }

    document.dispatchEvent(oEvent);
}

function pressKey(i, time) {
    Podium.keydown(i)
}
let i = 1;

function myFunction() {
    for (let i = 1; i <= 4; i++) {

        if (i == 2) {
            continue;
        }
        pressKey(36 + i);
        if (i == 1) {
            pressKey(40);
        }
    }
    window.setTimeout(function () { myFunction(); }, 200);
}
myFunction()