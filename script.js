const Yesbtn = document.getElementById("Yesbtn");
const Nobtn = document.getElementById("Nobtn");
const Head = document.getElementById("Head");
const image = document.getElementById("image");
const paragrap = document.getElementById("paragrap");

Yesbtn.addEventListener("click",() => {
    Head.innerText = "รักที่สุดเลยยย";
    image.src = "https://i.pinimg.com/1200x/9e/d0/07/9ed0073bd902b49a30a47ad4de621cf8.jpg";
    paragrap.innerText = "น่าร้ากกกกกกกกกก";
    Nobtn.style.display = "none";
    Yesbtn.style.display = "none";
})
let NoClickCount = 0;

const NoImage = [
    "https://i.pinimg.com/736x/f0/1b/8e/f01b8edc667ab33afe6b23fe6114a8a4.jpg",
    "https://i.pinimg.com/736x/c6/d9/ef/c6d9efcd4a23af2c352647a125671055.jpg",
    "https://i.pinimg.com/736x/b1/66/27/b16627dccea3244a1ac9b10517a00149.jpg"
]
const YesStyleWidth  = [
    "150px",
    "200px",
    "300px"
]

const YesStyleHight = [
    "150px",
    "200px",
    "300px"
]

const HeadText = [
    ";---;",
    "ใจร้ายยยยยยยย",
    "จงรักช้านนนนนนน"
]

const NoPara = [
    "ทำไมมมมมมมมมมม",
    "หื้อออออออออออออออออออออออออออ",
    "เเกต้องรักกกก"
]

const yesDisplay = [
    "",
    "",
    "none"
]

Nobtn.addEventListener("click", () => {
    const i = NoClickCount % NoImage.length;
    image.src = NoImage[i];
    Head.innerText = HeadText[i];
    paragrap.innerText = NoPara[i];

    Yesbtn.style.width = YesStyleWidth[i];
    Yesbtn.style.height = YesStyleHight[i];
    Nobtn.style.display = yesDisplay[i];

    NoClickCount++;
});