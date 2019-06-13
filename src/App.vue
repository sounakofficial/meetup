<template>
  <v-app dark class="secondary">
    <v-navigation-drawer absolute temporary v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItem" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-action>{{ item.title }}</v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon
        class="hidden-sm-and-up"
        @click.native.stop="sideNav = !sideNav"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer"
          >DevMeetup</router-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItem" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

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
        { icon: 'room', title: 'Meetup', link: '/Meetup' },
        { icon: 'android', title: 'Organize Meetup', link: '/CreateMeetup' },
        { icon: 'person', title: 'Profile', link: '/Profile' },
        { icon: 'face', title: 'Sign up', link: '/Signup' },
        { icon: 'lock_open', title: 'Sign in', link: '/Signin' }
      ]
    }
  }
}
</script>
