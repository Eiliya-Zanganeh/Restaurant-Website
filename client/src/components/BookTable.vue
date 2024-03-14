<template>
  <section class="book_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          Book A Table
        </h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form_container">
            <form action="">
              <div>
                <input type="text" class="form-control" placeholder="Your Name" v-model="name"/>
              </div>
              <div>
                <input type="text" class="form-control" placeholder="Phone Number" v-model="phone"/>
              </div>
              <div>
                <input type="email" class="form-control" placeholder="Your Email" v-model="email"/>
              </div>
              <div>
                <p>How many persons?</p>
                <input type="number" v-model="person" class="form-control nice-select wide">
              </div>
              <div>
                <input type="date" v-model="date" class="form-control">
              </div>
              <div class="btn_box" v-on:click="run()">
                <button>
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6">
          <div class="map_container ">
            <div id="googleMap"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  name: "BookTableComponent",
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      person: 0,
      date: ''
    }
  },
  methods: {
    async run() {
      try {
        await axios.post("http://localhost:8000/booktable", {
          name: this.name,
          phone: this.phone,
          email: this.email,
          person: this.person,
          date: this.date,
        })
        alert("ok");

      } catch (e) {
        alert(e.response.data.message)
      }
    }
  },
}
</script>
<style scoped lang="scss">

</style>