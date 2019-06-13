<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title class="grey darken-4">
            <h2>{{ meetup.title }}</h2>
          </v-card-title>
          <v-card-media :src="meetup.imgUrl" height="400px"></v-card-media>
          <v-card-title>
            <div>
              <h2 class="info--text">{{ meetup.date }} - Where it takes place</h2>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                ipsum, quod labore, pariatur eos aut commodi corporis voluptatem
                ab mollitia quisquam cum voluptas! Aliquam vel fugiat numquam,
                doloremque laudantium deserunt?
              </div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>

<style></style>
