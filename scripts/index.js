// Link:- // https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=YOUR_ACCESS_KEY

// https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=Qfy_D_u8U6pnYOLt2WsSQB1q8ntJF65OdaNBkAfkGPk

const API = "Qfy_D_u8U6pnYOLt2WsSQB1q8ntJF65OdaNBkAfkGPk";

import { navbar } from "../components/navbar.js";

let n = document.getElementById("navbar");
n.innerHTML = navbar();

import { searchImages, append } from "./fetch.js"

let search = (e) => {
    if(e.key === "Enter"){
        let value = document.getElementById("query").value;
        searchImages(API, value).then((data) =>{
            console.log("data:", data);

            let container = document.getElementById("container");
            container.innerHTML = null;
            append(data.results, container)
        });
    }
    // searchImages(API, value);
};
document.getElementById("query").addEventListener("keydown", search);

let categories = document.getElementById("categories").children;



function cSearch (){
    console.log(this.id);
    searchImages(API, this.id).then((data) =>{
        console.log("data:", data);

        let container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results, container)
    });
}

for(let el of categories){
    el.addEventListener("click", cSearch)
}

// let searchImages = async () => {
//     let value = document.getElementById("query").value;
//     try{
//         let res = await fetch (
//             `https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`

//         );
//         let data = await res.json();
//         console.log("data:",data);

//     }catch(err){
//         console.log("err:",err);
//     }
// };