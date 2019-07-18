const foodListContainter = document.querySelector(".foodList")

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodComponent = createFoodListComponent(food)
            foodListContainter.innerHTML += foodComponent
        });
    })

const createFoodListComponent = (favoriteFoods) => {
    return `
            <section class="favoriteFood__section">
                <h2 class="foodName__h2">${favoriteFoods.name}</h2>
                <p>${favoriteFoods.category}</p>
                <p>${favoriteFoods.ethnicity}</p>
            </section>
        `
}