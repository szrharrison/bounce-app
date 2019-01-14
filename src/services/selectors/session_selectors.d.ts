import { ComponentProps } from "react";
import { RootStore, SessionStore } from "../reducers/store";

export declare function getIsLoggedIn(state: RootStore, props: ComponentProps): boolean;

export declare function getJwt(state: RootStore, props: ComponentProps): string;

export declare function getSession(state: RootStore, props: ComponentProps): SessionStore
