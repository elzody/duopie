import type { Course } from './Course';

interface User {
  name: string,
  username: string,
  totalXp: number,
  id: number,
  creationDate: number,
  picture: string,
  streak: number,
  courses: Course[],
}

export type { User };