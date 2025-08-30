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
                name: 'description',
                content: 'Professionele begeleiding op basis van sportpsychologie en prestatiepsychologie',
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
            {
                property: "og:type",
                content: "website",
            },
            {
                property: "og:title",
                content: "Build your edge",
            },
            {
                property: "og:description",
                content: "Professionele begeleiding op basis van sportpsychologie en prestatiepsychologie",
            },
            {
                property: "og:url",
                content: "https://www.YOUR_DOMAIN.tld/",
            },
            {
                property: "og:image",
                content: "https://www.YOUR_DOMAIN.tld/og-image.jpg",
            },
            {
                property: "og:image:alt",
                content: "Build your edge — Sport- en prestatiepsychologie",
            },
            {
                property: "og:site_name",
                content: "Build your edge",
            },
            {
                property: "og:locale",
                content: "nl_NL",
            },
        ],
        links: [
            { rel: "preload", href: rootCss, as: "style"},
            { rel: "icon", type: "image/x-icon", href: "/logo.ico"},
            { rel: 'stylesheet', href: rootCss },
            { rel: "canonical", href: "https://buildyouredge.be/" }

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
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "Organization",
                        "@id": "https://www.buildyouredge.be/",
                        "name": "Build your edge",
                        "url": "hhttps://www.buildyouredge.be/",
                        "logo": "https://www.buildyouredge.be/logo.ico",
                        "image": "https://www.buildyouredge.be/logo.ico",
                        "description": "Professionele begeleiding op basis van sportpsychologie en prestatiepsychologie",
                        "email": "dieter.bellemans@buildyouredge.be",
                        "sameAs": [
                            "https://www.instagram.com/buildyouredge_/",
                            "https://www.linkedin.com/company/build-your-edge/"
                        ]
                    },
                    {
                        "@type": ["LocalBusiness", "ProfessionalService"],
                        "@id": "https://www.buildyouredge.be/",
                        "name": "Build your edge",
                        "url": "https://www.buildyouredge.be/",
                        "parentOrganization": { "@id": "https://www.buildyouredge.be/" },
                        "telephone": "+32 494 82 18 17",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Laar 35",
                            "addressLocality": "Ekeren",
                            "postalCode": "2010",
                            "addressRegion": "Fl",
                            "addressCountry": "BE"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 51.268962199812805,
                            "longitude": 4.441939282990199
                        },
                        "openingHoursSpecification": [
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                "opens": "09:00",
                                "closes": "20:00"
                            }
                        ],
                        "hasMap": "https://www.google.com/maps/place/Laar+36,+2180+Antwerpen",
                        "areaServed": "BE"
                    },
                    {
                        "@type": ["LocalBusiness", "ProfessionalService"],
                        "@id": "https://www.buildyouredge.be/",
                        "name": "Build your edge",
                        "url": "https://www.buildyouredge.be/",
                        "parentOrganization": { "@id": "https://www.buildyouredge.be/" },
                        "telephone": "+32 494 82 18 17",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Peperstraat 30",
                            "addressLocality": "Erps-Kwerps",
                            "postalCode": "3071",
                            "addressRegion": "FL",
                            "addressCountry": "BE"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 50.9044897,
                            "longitude": 4.5553233
                        },
                        "openingHoursSpecification": [
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                "opens": "09:00",
                                "closes": "20:00"
                            }
                        ],
                        "hasMap": "https://www.google.com/maps/place/Peperstraat+30,+3071+Kortenberg",
                        "areaServed": "BE"
                    },
                ]
            })
        },

        {
            type: 'module',
            // @ts-ignore
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
