let p = document.getElementById("postbox");
let box4 = document.getElementById("box4");
let info = document.getElementById("info");
let usernames = document.getElementById("usernames");
let desc = document.getElementById("desc");
let postimage = document.getElementById("postimage");
let coverimage = document.getElementById("coverimage");

fetching()
async function fetching() {
    let response = await fetch("./report.json")
    let data = await response.json()
    data = data.results
    // console.log(data);
}



function hello(i) {
    if (data[i].image_url != null) {
        coverimage.innerHTML = "<img class="size - 14 object - top rounded - full object - cover" src="${data[i].image_url} " alt="">"
    }

}

for (let i = 0; i <= 70; i++) {
    setTimeout(() => hello(i), 500 * i);
}
