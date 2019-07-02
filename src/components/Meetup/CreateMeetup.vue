<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1>Create a new Meetup</h1>
      </v-flex>
    </v-layout>
    <v-layout row mt-4>
      <v-flex xs12>
        <form>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
    <v-layout row mt-2>
      <v-flex xs12>
        <form>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                label="Location"
                id="location"
                v-model="location"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
    <v-layout row mt-2>
      <v-flex xs12>
        <form>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                label="Image URL"
                id="image-url"
                v-model="imageUrl"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
    <v-layout row mt-2>
      <v-flex xs12>
        <form>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-img :src="imageUrl" aspect-ratio="1.7"></v-img>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
    <v-layout row mt-2>
      <v-flex xs12>
        <form>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                v-model="description"
                multi-line
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-btn class="primary" :disabled="!formIsValid">Create Meetup</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import store from '../../store'
import router from '../../router'
export default {
  data: function() {
    return {
      return: {
        title: '',
        location: '',
        imageUrl: '',
        description: ''
      }
    }
  },
  computed: {
    formIsValid() {
      return (
        this.title !== '' &&
        this.location !== '' &&
        this.imageUrl !== '' &&
        this.description !== ''
      )
    }
  }
}
</script>

<style></style>
