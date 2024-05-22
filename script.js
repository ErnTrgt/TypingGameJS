const typingText = document.querySelector(".typing-text p");
inpField = document.querySelector(".wrapper .input-field");

let charIndex = 0;

function randomParagraph() {
    let randIndex = Math.floor(Math.random() * paragraphs.length);
    paragraphs[randIndex].split("").forEach((span) => {
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    const characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];

    if (characters[charIndex].innerText === typedChar) {
        console.log("correct");
    } else {
        console.log("false");
    }
    charIndex++;
}

randomParagraph();
inpField.addEventListener("input", initTyping);
