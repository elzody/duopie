import type { User, Leaderboard, Profile } from './types';

const FIELDS = "&fields=users{courses{title,xp,crowns,fromLanguage,id},hasPlus,id,name,picture,streak,totalXp,username}";

const API = {
  base_url: "https://www.duolingo.com",
  api_version: "2017-06-30",
  leaderboards_url: "https://duolingo-leaderboards-prod.duolingo.com",
  endpoints: {
    users: "/users",
    leaderboards: "/leaderboards/7d9f5dd1-8423-491a-91f2-2532052038ce"
  },
};

async function searchUser(username: string): Promise<Profile> {
  const users = await getUser(username);
  const user = users[0];

  const leaderboard = await getUserLeaderboard(user.id);

  return { ...user, ...leaderboard } as Profile;
}

async function getUser(username: string): Promise<User[]> {
  const url = new URL(API.api_version + API.endpoints.users, API.base_url).toString();

  const params = new URLSearchParams({
    username,
    fields: "users{courses{title,xp,crowns,id},name,username,id,picture,streak,totalXp}"
  }).toString();

  const request = await fetch(`${url}?${params}`);
  const body = await request.json();

  return body.users;
}

async function getUserLeaderboard(id: number): Promise<Leaderboard> {
  const url = new URL(API.endpoints.leaderboards + '/users/', API.leaderboards_url);

  const request = await fetch(url.toString() + id.toString());

  return await request.json() as Leaderboard;
}

export { searchUser };