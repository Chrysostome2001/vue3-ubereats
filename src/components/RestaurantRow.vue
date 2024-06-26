<template>
  <div class="restaurant--row">
    <h2 class="title">
        Nos restaurants
    </h2>
    <div class="wrapper--card">
        <RouterLink class="restaurant--wrapper" v-for="(card,index) in three_restaurant "  :key="index" :to="{name:'Restaurant', params: {name: card.name}}">
            <restaurant-card :info_restaurant="card"/>
        </RouterLink>
    </div>
  </div>
</template>

<script>
import RestaurantCard from './RestaurantCard.vue'
export default {
    name: "RestaurantRow",
    components: {
        RestaurantCard,
    },

    props:{
        three_restaurant: Array
    }
}
</script>

<style lang="scss">
.restaurant--row{
    .wrapper--card{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .restaurant--wrapper{
            width: 32%;
        }
    }

    .title{
        font-size: 2rem;
    }
}

</style>