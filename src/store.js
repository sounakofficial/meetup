import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imgUrl:
          'https://images.wallpaperscraft.com/image/new_york_night_skyscrapers_top_view_59532_1920x1080.jpg',
        id: 'firstimage',
        title: 'Meetup in NEW YORK',
        date: '2019-07-17'
      },
      {
        imgUrl:
          'https://images.wallpaperscraft.com/image/paris_france_trees_landscape_62384_1280x720.jpg',
        id: 'secondtimage',
        title: 'Meetup in PARIS',
        date: '2019-07-19'
      },
      {
        imgUrl:
          'https://images.wallpaperscraft.com/image/fuji_japan_city_sakura_58475_1280x720.jpg',
        id: 'thirdimage',
        title: 'Meetup in JAPAN',
        date: '2019-07-07'
      },
      {
        imgUrl:
          'https://images.wallpaperscraft.com/image/london_england_river_bridge_big_ben_ferris_wheel_47850_1280x720.jpg',
        id: 'fourthimage',
        title: 'Meetup in LONDON',
        date: '2019-07-26'
      },
      {
        imgUrl:
          'https://images.wallpaperscraft.com/image/moscow_kremlin_red_square_russia_capital_59491_1280x720.jpg',
        id: 'fifthimage',
        title: 'Meetup in MOSCOW',
        date: '2019-07-23'
      }
    ],
    user: {
      id: 'gcjhyucvjukgyv',
      registeredMeetups: ['fifthimage']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    loadedMeetup(state) {
      return meetupID => {
        return state.loadedMeetups.find(meetup => {
          return meetup.id === meetupID
        })
      }
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    }
  }
})
