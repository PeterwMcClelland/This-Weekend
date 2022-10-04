// const spotList = document.getElementById("spotList");
// // const filteredSpot = filteredSpot.filter(filteredSpot => { return true; });
// let spots = [];

// searchBar.addEventListener("keyup", spot => {
//     const searchSpot = spot.target.value;
//   });

//   const searchSpot = spot.target.value.toLowerCase();
// const filteredSpot = hpCharacters.filter(character => {
//   return (
//     spot.toLowerCase().includes(searchArray)
//   );
// });

// const spot = [
//     { spot: 'Park Blocks' },
//     { spot: 'Spot One' }
// ]


// const displaySpot = (spots) => {
//     const htmlString = characters
//         .map((spot) => {
//             return `
//             <li class="character">
//                 <h2>${spot.name}</h2>
//                 <p>House: ${spot.obstical}</p>
//                 <img src="${spot.image}"></img>
//             </li>
//         `;
//         })
//         .join('');
//     spotsList.innerHTML = htmlString;
// };

// loadSpots();



function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

