(function () {
    let equal = document.querySelector(".equal");
    let screen = document.querySelector(".screen");
    let btn = document.querySelectorAll(".btn");
    let clear = document.querySelector(".clear");

    screen.focus();
    equal.addEventListener("click", function () {
        if (screen.value == "") {
            screen.value = "Please Enter a Value";
        }
        else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    clear.addEventListener("click", clearScreen)
    function clearScreen() {
        screen.value = '';
    }
    btn.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            let val;
            if(screen.value == "Please Enter a Value") {
                clearScreen();
            }
                val = e.target.dataset.num;
                screen.value += val;
        })
    })
})();
