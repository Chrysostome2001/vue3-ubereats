<template>
  <div class="home">
    <div class="header">
        <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="">
        <div class="wrapper--input">
            <input v-model="user_search_restaurant" type="text" placeholder="De quoi avez-vous envie ?">
            <div class="search">
                <router-link v-for="(restaurant, index) in search_restaurant" :key="index"  :to="{name:'Restaurant', params: {name: restaurant.name}}">
                    <div class="container--restaurant--search">
                        <div class="wrapper--image">
                            <img :src="restaurant.image" alt="">
                        </div>
                        <p>{{ restaurant.name  }}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    <div class="bannier">

    </div>
    <restaurant-row v-for="(data,i) in data_restaurant" :key="i" :three_restaurant="data"/>
  </div>
</template>

<script>
//IMPORT
import BDD from '../components/BDD'
import { onMounted, ref, watch } from 'vue'
import RestaurantRow from '@/components/RestaurantRow.vue'
export default {
    name:"HomePagez",
    components:{
        RestaurantRow,
    },
    setup(){
        class Restaurant{
            constructor(name, note, image, drive_time){
                this.name = name
                this.note = note
                this.image = image
                this.drive_time = drive_time
            }
        }
        let data_restaurant = ref([])
        let all_restaurant = []
        const makeDataBase = () =>{
            let three_restaurant = []

            for(const restaurant of BDD){
                let new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time)
                // make all restaurant
                all_restaurant.push(new_restaurant)
                //

                if(three_restaurant.length === 2){
                    three_restaurant.push(new_restaurant)
                    data_restaurant.value.push(three_restaurant)
                    three_restaurant = []
                }else{
                    three_restaurant.push(new_restaurant)
                }
                
            }
        }
        //user data search
            let user_search_restaurant = ref('')
            let search_restaurant = ref([])
            watch(user_search_restaurant, (new_value) => {
                let regex = RegExp(new_value.toLocaleLowerCase())
                let new_search_restaurant = all_restaurant.filter(restaurant => regex.test(restaurant.name.toLocaleLowerCase()))

                new_value == 0 ? search_restaurant.value = [] : search_restaurant.value = new_search_restaurant
            })
        //
        onMounted(makeDataBase)
        return {
            data_restaurant,
            user_search_restaurant,
            search_restaurant
        }
    }
}
</script>

<style lang="scss">
    .home{
        .header{
            height: 120px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            img{
                width: 200px;
            }
            .wrapper--input{
                position: relative;
                input{
                    background-color: #f6f6f6;
                    border: none;
                    height: 60px;
                    width: 400px;
                    outline: none;
                    padding-left : 20px;
                }
                .search{
                    position: absolute;
                    top: 100%;
                    width: 100%;
                    background-color: #ffffff;
                    
                    .container--restaurant--search{
                        display: flex;
                        align-items: center;
                        padding: 10px;

                        &:hover{
                            background: #f6f6f6;
                        }
                        .wrapper--image{
                            height: 60px;
                            width: 60px;
                            margin-right: 25px;
                            border-radius: 50%;
                            overflow: hidden;

                            img{
                                height: 100%;
                                width: auto;
                            }
                        }
                    }
                }
            }
        }
        .bannier{
            height: 200px;
            width: 100%;
            background-image: url("https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1622579402/assets/6d/caa1da-ef21-426e-b3be-170af0054fa9/original/WelcomeToUberEats.jpg");
            background-size: cover;
            background-position: center center;
        }
    }

</style>