import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
    css: ["~/assets/styles/app.scss"],
    meta: {
        title: "Nuxt3 starter",
        titleTemplate: "Nuxt3 starter | %s",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Nuxt3 starter",
            },
        ],
        link: [
            {
                rel: "stylesheet",
                type: "text/css",
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css",
            },
        ],
        script: [

        ],
    },
    publicRuntimeConfig: {
        apiURL: process.env.API_URL
            ? process.env.API_URL
            : `${process.env.NUXT_ENV_VERCEL_URL}/api/graphql`,
    },
    plugins: [],
    // loading config
    loadingIndicator: {
        name: "circle",
        color: "#7367f0",
        background: "white",
    },
    build: {
        transpile: ["tslib"],
    }
});
