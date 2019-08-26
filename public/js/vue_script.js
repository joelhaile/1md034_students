var vm = new Vue({
    el: '#app',
    data: {
        menu: food,
        person: '',
        mail: '',
        adress: '',
        building: '',
        payment: '',
        gender: '',
        orderHasBeenMade: false
    },

    methods: {
        makeOrder: function() {
            console.log("Button Clicked");
            this.orderHasBeenMade = true;

        }
    },

    computed: {
        chosenBurgers() {
            return this.menu.filter(x => x.checked);
        }
    }
});



