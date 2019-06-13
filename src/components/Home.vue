/* eslint-disable no-undef */
<template>
  <v-container>
    <v-layout row wrap class="mb-2">
      <v-flex xs12 sm6 class="text-sm-right text-xs-center">
        <v-btn large router to="./Meetup" class="orange darken-1"
          >Explore Meetups</v-btn
        >
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left text-xs-center">
        <v-btn large router to="./CreateMeetup" class="orange darken-1"
          >Organize Meetup</v-btn
        >
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel class="mt-2" style="cursor: pointer">
          <v-carousel-item
            v-for="items in meetups"
            :src="items.imgUrl"
            :key="items.id"
            @click="onLoadMeetup(items.id)"
          >
            <div class="title">{{ items.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import router from '../router'
import store from '../store'
export default {
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups
    }
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push('/CreateMeetup/' + id)
    }
  }
}
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px;
  font-size: 2em;
}
</style>
