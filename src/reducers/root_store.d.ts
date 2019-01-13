import SessionStore from "./session/session_store";

declare interface RootStore {
  session: SessionStore
}

export default RootStore;