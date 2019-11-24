"use strict"

import { resolve } from "path"
import { terser } from "rollup-plugin-terser"
import { cpus } from "os"

import serve from "rollup-plugin-serve"
import livereload from "rollup-plugin-livereload"
import elm from "rollup-plugin-elm"
import bundleHtml from "rollup-plugin-bundle-html"
import copy from "rollup-plugin-copy"
import remove from "rollup-plugin-delete"

export default {
    input: resolve(__dirname, "src", "main.js"),
    plugins: [
        remove({
            targets: [
                resolve(__dirname, "public")
            ]
        }),
        copy({
            targets: [
                {
                    src: resolve(__dirname, "src", "assets", "**", "*"),
                    dest: resolve(__dirname, "public")
                }
            ]
        }),
        elm({
            include: resolve(__dirname, "src", "**", "*"),
            exclude: [],
            compiler: {
                optimize: process.env.NODE_ENV === "production",
                debug: process.env.NODE_ENV === "development",
                pathToElm: "/home/elm/.local/bin/elm"
            }
        }),
        bundleHtml({
            template: resolve(__dirname, "src", "index.html"),
            dest: resolve(__dirname, "public"),
            filename: "index.html",
            inject: "head"
        }),
        process.env.NODE_ENV === "development" && serve({
            // We are in a container so we don't want to open a browser
            open: false,
            // More verbose plugin's output
            verbose: true,
            // This will redirect all requests to /public/index.html with a 200
            historyApiFallback: true,
            // We want to serve from the /public directory
            contentBase: resolve(__dirname, "public"),
            // This will authorize requests from outside of the container
            host: "0.0.0.0",
            // This will help us keep the port unchanged for our Docker configuration
            port: 8000,
            // We don't have any valid SSL certificate to use in development
            https: false,
            // This is where we can add more headers that will be sent over with the requests
            headers: {}
        }),
        process.env.NODE_ENV === "development" && livereload({
            // We want to watch and reload the server when any file in the public folder changes
            watch: [
                resolve(__dirname, "public"),
                resolve(__dirname, "src")
            ],
            // We want maximum verbosity for this plugin
            verbose: true,
            // Port where to listen for livereload changes
            port: 35729
        }),
        process.env.NODE_ENV === "production" && terser({
            numWorkers: cpus().length
        })
    ],

    output: {
        // Path & name of the generated bundle
        file: resolve(__dirname, "public", "main.js"),
        // Format of the bundle, choosing iife for our web application
        format: "iife"
    }
}
