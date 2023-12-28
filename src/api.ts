import type { User } from './types';

const FIELDS = "&fields=users{courses{title,xp,crowns,fromLanguage,id},hasPlus,id,name,picture,streak,totalXp,username}";

const API = {
  base_url: "https://www.duolingo.com",
  api_version: "2017-06-30",
  endpoints: {
    users: "/users",
  },
};

async function searchUser(username: string): Promise<User> {
  const url = new URL(API.api_version + API.endpoints.users, API.base_url).toString();
  const params = new URLSearchParams({
    username,
    fields: "users{courses{title,xp,crowns,id},name,username,id,picture,streak,totalXp}"
  }).toString();

  const request = await fetch(`${url}?${params}`);
  const body = await request.json();

  return body.users[0] as User;
}

export { searchUser };