var app = new Vue({
    el: '#app',
    data: {
        width: 800,
        height: 600
    },
    computed: {
        halfWidth: {
            get: function() { return this.width / 2 },
            set: function(val) { return this.width = val * 2 }
        },
        halfHeight: function() {
            return this.height / 2
        },
        halfPoint: function() {
            return {
                x: this.halfWidth,
                y: this.halfHeight,
            }
        },

    }
})