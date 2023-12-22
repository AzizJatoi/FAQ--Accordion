const plusIcon = document.querySelectorAll(".plus-icon")
const minusIcon = document.querySelectorAll(".minus-icon")
const answer = document.querySelectorAll(".answer")


for (let i  = 0; i < plusIcon.length; i++) {
    plusIcon[i].addEventListener("click", function() {
        plusIcon[i].classList.toggle('hidden')
        minusIcon[i].classList.toggle('hidden')
        answer[i].classList.toggle('hidden')
    })
}

for (let i  = 0; i < minusIcon.length; i++) {
    minusIcon[i].addEventListener("click", function() {
        plusIcon[i].classList.toggle('hidden')
        minusIcon[i].classList.toggle('hidden')
        answer[i].classList.toggle('hidden')

    })
}

