<template>

    <section class="offer_section layout_padding-bottom">
        <div class="offer_container">
            <div class="container ">
                <div class="row">
                    <div class="col-md-6  ">
                        <div class="box ">
                            <div class="img-box">
                                <img src="../assets/images/o1.jpg" alt="">
                            </div>
                            <div class="detail-box">
                                <h5>
                                    Tasty Thursdays
                                </h5>
                                <h6>
                                    <span>20%</span> Off
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6  ">
                        <div class="box ">
                            <div class="img-box">
                                <img src="../assets/images/o2.jpg" alt="">
                            </div>
                            <div class="detail-box">
                                <h5>
                                    Pizza Days
                                </h5>
                                <h6>
                                    <span>15%</span> Off
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <Menu/>


    <About/>


    <BookTable/>

</template>

<script>
import Menu from "@/components/Menu.vue";
import About from "@/components/About.vue";
import BookTable from "@/components/BookTable.vue";

export default {
    name: 'HomeView',
    components: {BookTable, Menu, About}
}
</script>
<style lang="scss">
</style>