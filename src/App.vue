<template>
  <v-app dark class="secondary">
    <v-toolbar>
      <v-toolbar-side-icon
        class="hidden-sm-and-up"
        @click.native.stop="sideNav = !sideNav"
      ></v-toolbar-side-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="hidden-xs-only"
        v-for="item in menuItem"
        :key="item.title"
      >
        <v-btn flat>
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItem" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-action>{{ item.title }}</v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      sideNav: false,
      menuItem: [
        { icon: 'room', title: 'Meetup' },
        { icon: 'android', title: 'Organize Meetup' },
        { icon: 'person', title: 'Profile' },
        { icon: 'face', title: 'Sign up' },
        { icon: 'lock_open', title: 'Sign in' }
      ]
    }
  }
}
</script>
