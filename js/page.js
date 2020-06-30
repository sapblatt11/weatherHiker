


//temp
const KEY = "d9fd1b4d994374b15d15739b57bbd54c";

/*
fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + LATITUDE + '&lon=' + LONGITUDE + '&exclude=hourly, current, minutely&appid=' + KEY)
    .then(response => response.json())
    .then(data => weather = data["daily"])
    .then(() => console.log(weather))
    */

/*
var weatherbar = new Vue({
    el: '#weatherbar',
    data: {
        results: ["Loading"],
        location: "Location"
    },
    mounted() {
        axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=' + LATITUDE + '&lon=' + LONGITUDE + '&exclude=hourly, current, minutely&appid=' + KEY)
        .then(response => { this.results = response.data["daily"] })
    }
});
*/

Vue.component('weatherbar', {
    props: ['location', 'lat', 'long', 'daily', 'identifier'],
    template: `
        <div class=wbar>
            <div class = bar>         
                    <div class =" h1">
                        <button type="button" class ="btn btn-info" data-toggle="collapse" v-bind:data-target="getRef(identifier)"> Collapse</button>
                        {{location}}
                        </div>
                        <div class ="collapse row in" :id="identifier">
                            <div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 text-center" v-for="day in daily">
                                <p> {{(new Date(day.dt * 1000)).getMonth() + 1 }}/{{(new Date(day.dt * 1000)).getDate() }} </p>

                                <div class="center-block">
                                    <img :src="getImageUrl(day.weather[0].description)" v-bind:alt="test"/>
                                </div>

                                <br>
                                <p style="text-transform: capitalize;"> {{day.weather[0].description}} </p>
                            </div>
                         </div>
                     </div>
             </div>
         </div>`,

    methods: {
        getImageUrl: function (ctx) {
           
            var image = ""
            if (ctx.includes("thunder")) {
                image = "./images/thunder.png";
            }
            else if (ctx.includes("rain") || ctx.includes("drizzle")) {
                image = "./images/rain.png";
            }
            else if (ctx.includes("cloud")) {
                image = "./images/clouds.png";
            }
            else if(ctx.includes("snow") || ctx.includes("sleet"))
            {
                image = "./images/snow.png"
            }
            else {
                image = "./images/sun.png";
            }
            return image;
        },
        getRef: function (id) {
            return "#" + id;
        }
    },

    created() {
        axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=' + this.lat + '&lon=' + this.long + '&exclude=hourly,current,minutely&appid=' + KEY)
        .then(response => { this.daily = response.data["daily"] })
        //.then(() => console.log('https://api.openweathermap.org/data/2.5/onecall?lat=' + this.lat + '&lon=' + this.long + '&exclude=hourly,current,minutely&appid=' + KEY))

    },
})

//console.log(new Date(1593432000 * 1000));
new Vue({ el: "#bar1" })
new Vue({ el: "#bar2" })
new Vue({ el: "#bar3" })
new Vue({ el: "#bar4" })
new Vue({ el: "#bar5" })
new Vue({ el: "#bar6" })