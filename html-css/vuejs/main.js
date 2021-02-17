const Myapp = {
    data() {
        return {
            message: "Mon message",
            name: "Mike"
        }
    },
    monted() {
        setTimeout(() => {
            this.message = "Salut,tu vas bien ?";

        }, 2000);
    },

    methods: {
        sayHello() {

        },

        sayGoodBye() {

        }
    }
}

Vue.createApp(Myapp).mont("#myApp");
