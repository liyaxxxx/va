const messages = [
    "Нээрээ юу",
    "Итгэлтэй байна уу",
    "Нандиа дахиад бодоорой",
    "Ээээ...",
    "say yes pls",
    "Yes-ийг сонгоочээ бро",
    "ooo araichde",
    "Үнэхээр үү",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}