import * as React from 'react'
import {Outlet, createRootRoute, HeadContent, Scripts} from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import emailjs from "@emailjs/browser";
// @ts-ignore
import rootCss from "@/index.css?url"

const queryClient = new QueryClient()

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                name: 'charset',
                content: 'UTF-8',
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            },
            {
                title: 'Build your edge',
            },
            {
                name: "google-site-verification",
                content: "LPJ618HqVuov6cusBLXzYkK2HcZk8Hh8GRsgUKh8cB0"
            },
        ],
        links: [
            { rel: "icon", type: "image/x-icon", href: "/public/logo.ico"},
            { rel: 'stylesheet', href: rootCss }
        ],
    }),
    scripts: () => [
        {
            children: '            window.dataLayer = window.dataLayer || [];\n' +
                '            function gtag(){dataLayer.push(arguments);}\n' +
                '            gtag(\'js\', new Date());\n' +
                '\n' +
                '            gtag(\'config\', \'G-TVTF4SWG7Y\');',
        },
        {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-TVTF4SWG7Y"
        },
        {
            type: 'module',
            src: import.meta.env.PROD
                ? '/static/entry-client.js'
                : '/src/entry-client.tsx',
        },
    ],
  component: RootComponent,
})

export function RootComponent() {
    React.useEffect(() => {
        const initEmailJs = () => {
            emailjs.init({
                publicKey: "oN_chg0lIthJoXU5v",
            });
        }
        initEmailJs();
    }, [])

    return (
        <html lang="en">
        <head>
            <HeadContent />
        </head>
        <body>
            <QueryClientProvider client={queryClient}>
                <div className="flex flex-col min-h-screen">
                    <Navigation/>
                    <main className="flex-1 ">
                        <Outlet/>
                    </main>
                    <Footer/>
                </div>
            </QueryClientProvider>
            <Scripts />
        </body>
    </html>

    )
}
