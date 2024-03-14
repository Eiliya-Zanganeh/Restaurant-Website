<template>
    <section class="food_section layout_padding-bottom">
        <div class="container">
            <div class="heading_container heading_center">
                <h2 @input.prevent>
                    Our Menu
                </h2>
            </div>
            <div class="filters-content">
                <div class="row grid">
                    <div v-for="(food) in data" v-bind:key="food" class="col-sm-6 col-lg-4 all">
                        <div class="box">
                            <div>
                                <div class="img-box">
                                    <img v-bind:src="`http://localhost:8000/${food.img}`" alt="">
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        {{ food.name }}
                                    </h5>
                                    <p>
                                        {{ food.description }}
                                    </p>
                                    <div class="options">
                                        <h6>
                                            {{ food.price }}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="btn-box">
                <a href="">
                    View More
                </a>
            </div>
        </div>
    </section>
</template>
<script>
import axios from "axios";
export default {
    name:"MenuComponent",
    data() {
        return {
            data: null,
        };
    },
    mounted() {
        axios.get('http://localhost:8000/home/')
            .then(response => {
                this.data = response.data;
            })
            .catch(error => {
                this.data = error.message;
            });
    },
}
</script>
<style scoped lang="css">
[v-clock]{
    display: none;
}
</style>
