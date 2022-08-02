var button = document.querySelector("footer button");
var changed = false;
var Eng = ["Home", "Story", "About Us", "Contact"];
var Vie = ["Trang chủ", "Câu chuyện", "Về mình", "Liên hệ"];
button.addEventListener("click", () =>
{
    changed = !changed;

    var nav = document.querySelector("nav ul").getElementsByTagName("li");
    var welcome = document.querySelector("main h2")

    document.body.style.background = changed ? "linear-gradient(rgba(227, 174, 189, 1), rgba(227, 174, 189, 1))" :
        "linear-gradient(rgba(81, 185, 243, 1), rgba(42, 111, 150, 1))";
    welcome.innerHTML = changed ? "Welcome" : "Chào mừng";

    Array.from(nav).forEach((item, index) =>
    {
        item.innerHTML = changed ? Eng[index] : Vie[index];
    })
})