/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#comma',
  data: {
    orders: {},
  },

  methods: {
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
        console.log("bananskal");
        var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: { x: event.clientX - 10 - offset.x,
                                           y: event.clientY - 10 - offset.y},
                                orderItems: ["Beans", "Curry"]
                              });
    },

    displayOrder: function (event) {
      console.log("orderDisplayed");
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      return{
      socket.emit("addOrder", { target: "T",
                                details: { x: event.clientX - 10 - offset.x,
                                           y: event.clientY - 10 - offset.y }

      })}
    }
  }
});
