const API_KEY = "3fcdc9bb7e504b3b82cc2a04cbc14169"
const recipeListEl = document.getElementById('recipe-list')

function displayRecipes(recipes) {      
    recipeListEl.innerHTML = ""
    recipes.forEach((recipe) => {
        const recipeListEl = document.createElement("li")
        recipeListEl.classList.add("recipe-item")
        recipeImageEl= document.createElement("img")
        recipeImageEl.src = recipe.image
        recipeImageEl.alt = "recipe image"
        
        recipeTitleEl =document.createElement("h2")
        recipeTitleEl.innerText = recipe.title;

        recipeIngredientsEl = document.createElement('p')
        recipeIngredientsEl.innerHTML 

        recipeItemEl.appendChild(recipeImageEl)
        recipeItemEl.appendChild(recipeTitleEl)
        recipeListEl.appendChild(recipeListEl)
    });
}
async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
    const data = await response.json()
    return data.recipes
}

async function init(){
    const recipes = await getRecipes()
    displayRecipes(recipes)
}
init()