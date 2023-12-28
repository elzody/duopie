import { reactive } from 'vue';
import type { User, Course } from '../types';

interface UserStore {
  user: User,

  setUser: (user: User) => void,
  getUser: () => User,
}

const userStore: UserStore = reactive({
  user: {} as User,

  setUser(user: User) {
    this.user = user;
  },

  getUser() {
    return this.user;
  }
});

export { userStore };