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
        <v-carousel class="mt-2">
          <v-carousel-item
            v-for="items in meetups"
            :src="items.imgUrl"
            :key="items.id"
          >
            <div class="title">{{ items.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      meetups: [
        {
          imgUrl:
            'https://images.wallpaperscraft.com/image/new_york_night_skyscrapers_top_view_59532_1920x1080.jpg',
          id: 'firstimage',
          title: 'Meetup in NEW YORK'
        },
        {
          imgUrl:
            'https://images.wallpaperscraft.com/image/paris_france_trees_landscape_62384_1280x720.jpg',
          id: 'secondtimage',
          title: 'Meetup in PARIS'
        },
        {
          imgUrl:
            'https://images.wallpaperscraft.com/image/fuji_japan_city_sakura_58475_1280x720.jpg',
          id: 'thirdimage',
          title: 'Meetup in JAPAN'
        },
        {
          imgUrl:
            'https://images.wallpaperscraft.com/image/london_england_river_bridge_big_ben_ferris_wheel_47850_1280x720.jpg',
          id: 'fourthimage',
          title: 'Meetup in LONDON'
        },
        {
          imgUrl:
            'https://images.wallpaperscraft.com/image/moscow_kremlin_red_square_russia_capital_59491_1280x720.jpg',
          id: 'fifthimage',
          title: 'Meetup in MOSCOW'
        }
      ]
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
