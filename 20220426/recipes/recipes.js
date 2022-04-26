// Luo array-muuttuja, johon tehdään reseptit
let recipes = [
    {
        name: "Tuna Pasta",
        cookingTime: 30,
        ingredients: [
            'tuna',
            'pasta'
        ]
    },
    {
        name: "Mac'n'cheese",
        cookingTime: 10,
        ingredients: [
            'macaroni',
            'cheese'
        ]
    },
    {
        name: "Salmon soup",
        cookingTime: 30,
        ingredients: [
            'salmon',
            'potatoes',
            'cream',
            'leek',
            'salt',
            'pepper'
        ]
    }
];
// Hae tulostuselementti muuttujaan
let element = document.getElementById("printHere");
// Looppaa reseptit läpi ja tulosta sivulle
let html = "<table><tr><th>Name</th><th>Cooking Time</th><th>Ingredients</th></tr>";
recipes.forEach(recipe => {
    html += "<tr>";
    html += "<td>" + recipe.name + "</td>";
    html += "<td>" + recipe.cookingTime + "</td>";
    html += "<td>" + recipe.ingredients + "</td>";
    html += "</tr>";
});
html += "</table>";
element.innerHTML = html;

// Vaihtoehtoinen tapa
// Luo uusi table-elementti
let table = document.createElement('table');
// Looppaa array läpi
for ( let i = 0; i < recipes.length; i++ ) {
    // Luo uusi tr-elementti
    let tr = document.createElement('tr');
    // Luo uusi td-elementti
    let td = document.createElement('td');
    // Laita reseptin nimi solulle
    td.innerHTML = recipes[i].name;
    // Lisää td trlle
    tr.appendChild(td);
    // Lisää tr tablelle
    table.appendChild(tr);
}
// Lisää table domiin
element.appendChild(table);