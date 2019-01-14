export declare interface SessionStore {
  loggedIn: boolean;
  jwt: string;
}

export declare interface RootStore {
  session: SessionStore
}