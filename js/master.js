//toggel spin class on icon
document.querySelector(".toggel .fa-gear").onclick = function() {
    this.classList.toggle("fa-spin");

    document.querySelector(".sitting-box").classList.toggle("open");
};

//select landing page element
let landingpage = document.querySelector(".landing-page");

//get arrey
let imgArray = ["one.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg"];
landingpage.style.backgroundImage = 'url("../image/three.jpg")';

setInterval(() => {
    //get random num
    let randomnumber = Math.floor(Math.random() * imgArray.length);
    //chang background image url

    landingpage.style.backgroundImage =
        'url("../image/' + imgArray[randomnumber] + '")';

    console.log(randomnumber);
}, 6000);