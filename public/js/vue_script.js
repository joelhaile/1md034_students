/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

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
        orderHasBeenMade: false,
        target: "T",
        tempID: 0,
        orderItems: [],
        tempBurgerNames: [],
        customerDetails: [],
        details: {x: -50, y: -50},
    },

    methods: {
        makeOrder: function() {
            console.log("Button Clicked");
            this.orderHasBeenMade = true;

        },

        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function (event) {
            console.log("order added!");
            this.tempID ++;
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top};
            var yee = this.menu.filter(x => x.checked)
            var i;
            for (i = 0; i < yee.length; i++) {
                this.orderItems.push(yee[i].burger);
            }
            this.customerDetails = [this.person, this.mail, this.payment,
                this.gender];
            socket.emit("addOrder", { orderId: this.tempID,
                                      details: { x: this.details.x,
                                                 y: this.details.y},
                                      orderItems: this.orderItems,
                                      customerDetails: this.customerDetails
            });
            console.log(this.customerDetails);
            this.orderItems.splice(0, this.orderItems.length);
            this.customerDetails.splice(0, this.customerDetails.length);


        },

        displayOrder: function (event) {
            console.log("mapworking");
            console.log(event);
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                          y: event.currentTarget.getBoundingClientRect().top};
            vm.target = this.target;
            vm.details.x = event.clientX - 10 - offset.x;
            vm.details.y = event.clientY - 10 - offset.y;

        }

    },

    computed: {
        chosenBurgers() {
            return this.menu.filter(x => x.checked)
        }
    }
});

