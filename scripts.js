document.addEventListener("keydown", manager)

drumKeys = document.querySelectorAll(".drum-item")

drumKeys.forEach(key => {
    key.addEventListener("click", manager)
});

drumKeys.forEach(key => {
    addEventListener("transitionend", (e) => {
        e.target.classList.remove("flash")
    })
})

sounds = document.querySelectorAll(".sound")

function manager(e) {

    drumKeys.forEach(key => {

        if (e.type == "click") {
            className = e.target.innerText.toLowerCase()
            playSound(className)
            flashItem(className)
        } else if (e.type == "keydown") {
            className = e.key
            RequiredClassName = key.firstElementChild.innerText.toLowerCase()
            if (className == RequiredClassName) {
                flashItem(className)
                playSound(className)
            }
        }
    });
}


function flashItem(className) {
    document.querySelector(`.drum-item.${className}`).classList.add("flash")
}

function playSound(className) {
    sound = document.querySelector(`.sound.${className}`)
    sound.currentTime = 0
    sound.play()
}