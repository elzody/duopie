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
    this.user = { ...u, courses: sortCourses(u.courses) };
    
    function sortCourses(courses: Course[]) {
      return courses.filter(c => c.xp > 5000);
    }
  },

  getUser() {
    return this.user;
  },

  getCourses() {
    return this.user.courses;
  }
});

export { userStore };
