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
let html = "<table>";
recipes.forEach(recipe => {
    html += "<tr>";
    html += "<td>" + recipe.name + "</td>";
    html += "</tr>";
});
html += "</table>";
element.innerHTML = html;