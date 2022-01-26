const app = Vue.createApp({
    data() {
        return {
            firstName: "Madhu Prakash",
            lastName: "Behara",
            gender: "male",
            email: "beharamadhu270405@gmail.com",
            picture: "https://media-exp1.licdn.com/dms/image/C5603AQHjKCFLp7Xrgg/profile-displayphoto-shrink_800_800/0/1639553700259?e=1648684800&v=beta&t=GX3WEYNIdotHD03B07karIbkp7z7CoqLaBxWuNzCKEE",
        };
    },
    methods: {
        async getUser() {
            const randomUserResponse = await fetch("https://randomuser.me/api/");
            const { results } = await randomUserResponse.json();
            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.gender = results[0].gender;
            this.email = results[0].email;
            this.picture = results[0].picture.large;
        },
    },
});

app.mount("#app");