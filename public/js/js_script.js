function MenuItem(b, kCal, g, l) {
    this.burger = b; // The this keyword refers to the object itself
    this.kCal = kCal;
    this.gluten = g;
    this.lactose = l;
    this.name = function() {
        return this.burger + ' ' + this.kCal;
    };
}

// Objects are then instantiated using the new keyword
var emp = new MenuItem('TASTY', 2500, 'yes', 'no');


console.log( emp.name() ); // Output: Maike Paetzel