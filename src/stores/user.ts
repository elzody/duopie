import { reactive } from 'vue';
import type { Profile } from '../types';

interface UserStore {
  user: Profile,

  setUser: (u: Profile) => void,
  getUser: () => Profile,
}

const userStore: UserStore = reactive({
  user: {} as Profile,

  setUser(u: Profile) {
    this.user = u;
  },

  getUser() {
    return this.user;
  },
});

export { userStore };