declare interface SessionStore {
  loggedIn: boolean;
  jwt: string;
}

export default SessionStore;