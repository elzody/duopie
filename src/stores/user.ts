import { reactive } from 'vue';
import type { Profile, Course } from '../types';

interface UserStore {
  user: Profile,

  setUser: (u: Profile) => void,
  getUser: () => Profile,

  getCourses: () => Course[],
}

const userStore: UserStore = reactive({
  user: {} as Profile,

  setUser(u: Profile) {
    this.user = u;
  },

  getUser() {
    return this.user;
  },

  getCourses() {
    return this.user.courses;
  }
});

export { userStore };
