const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers
    },
    set appetizers(newAppetizer) {
        this.appetizers.push(newAppetizer);
    },
    get mains() {
        return this._courses.mains
    },
    set mains(newMain) {
        this.mains.push(newMain);
    },
    get desserts() {
        return this._courses.desserts
    },
    set desserts(newDessert) {
        this.desserts.push(newDessert);
    }, 
    get courses() {
        const result = {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse: function(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        }
        this[courseName].push(dish);
    },
    getRandomDishFromCourse: function(courseName) {
        let courseArray = this[courseName];
        let randIndex = Math.floor(Math.random() * courseArray.length);
        return courseArray[randIndex];
    },
    getRandomMeal: function() {
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');
        let totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal will start with ${appetizer.name}, continue with ${main.name}, and end with ${dessert.name}.  The total price is $${totalPrice}.`;
    }
};

appetizers = ['nachos', 'fries', 'cheese curds', 'salad', 'soup', 'breadsticks'];
mains = ['steak', 'burger', 'fish', 'spaghetti', 'fajitas', 'burrito'];
desserts = ['cake', 'ice cream', 'brownie', 'milkshake', 'chocolate'];
for (let app of appetizers) { menu.addDishToCourse('appetizers', app, (Math.floor(Math.random() * appetizers.length) + 3)); }
for (let meal of mains) { menu.addDishToCourse('mains', meal, (Math.floor(Math.random() * meal.length) + 10)); }
for (let dessert of desserts) { menu.addDishToCourse('desserts', dessert, (Math.floor(Math.random() * desserts.length) + 4)); }
for (let i = 0; i < 15; i++) {
    console.log(menu.getRandomMeal());
}