import { AxiosInstance } from "axios";
import { route as ziggyRoute } from "ziggy-js";
import { PageProps as InertiaPageProps } from "@inertiajs/core";

export interface AppPageProps {
    class?: unknown;
}

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    var route: typeof ziggyRoute;
}

declare module "@inertiajs/core" {
    interface PageProps extends InertiaPageProps, AppPageProps {
        auth: {
            user: {
                id: string;
                name: string;
                avatar?: string;
                role?: string;
                email?: string;
                country?: string;
            };
        };
    }
}
