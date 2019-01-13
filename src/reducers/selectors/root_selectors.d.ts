import { ComponentProps } from "react";
import SessionStore from "../session/session_store";
import RootStore from "../root_store";

declare function getSession(state: RootStore, props: ComponentProps): SessionStore