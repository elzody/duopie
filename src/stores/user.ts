import type { Profile } from '@/types';
import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: {} as Profile,
  }),
  getters: {
    courses: state => state.profile.courses,
    tier: state => state.profile.tier,
  },
  actions: {
    setProfile(p: Profile) {
      this.profile = p;
    }
  }
})