const sugesition = [
    "apon",
    "tabasom",
    "nazma",
    "faruk",
    "shihab",
    "nonam",
    "pavel",
    "kalam",
    "shihak"
]

const wrapper = document.querySelector(".wrapper"),
inputBox = wrapper.querySelector(".search-box input"),
sugesitionBox = wrapper.querySelector(".autocom-box");

inputBox.addEventListener("keyup", (e) => {
    let inputValue = e.target.value;
    let arr = [];
    if(inputValue){
        wrapper.classList.add("active");
        arr = sugesition.filter((data) => {
            return data.toLowerCase().startsWith(inputValue.toLowerCase());
        }).map(data => `<li>${data}</li>`).join("");
        sugesitionBox.innerHTML = arr;
        for(let i = 0; i < sugesitionBox.querySelectorAll("li").length; i++){
            sugesitionBox.querySelectorAll("li")[i].setAttribute("onclick", "clickedLi(this)");
        }
    }else{
        wrapper.classList.remove("active");
    }
});

function clickedLi(e){
    inputBox.value = e.innerHTML;
    wrapper.classList.remove("active");
}