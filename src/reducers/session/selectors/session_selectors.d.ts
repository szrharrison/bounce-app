import RootStore from "../../root_store";
import { ComponentProps } from "react";

declare function getIsLoggedIn(state: RootStore, props: ComponentProps): boolean;

declare function getJwt(state: RootStore, props: ComponentProps): string;