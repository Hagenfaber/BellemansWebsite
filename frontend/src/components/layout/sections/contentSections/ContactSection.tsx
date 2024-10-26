import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import * as React from "react";
import {Section} from "@/components/layout/sections/Section";


export const ContactSection =  () => {
    return (
        <Section className="bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact</h2>
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-8">
                    <div className="flex flex-col space-y-4">
                        <p className="text-gray-500 dark:text-gray-400">
                            Klaar om uw mentale prestaties naar een hoger niveau te tillen? Neem contact met me op
                            voor een
                            vrijblijvend gesprek.
                        </p>
                        <div className="flex flex-col space-y-2">
                            <p className="text-gray-500 dark:text-gray-400">Email: info@buildyouredge.com</p>
                            <p className="text-gray-500 dark:text-gray-400">Telefoon: +32 123 45 67 89</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <form className="space-y-4">
                            <Input placeholder="Naam"/>
                            <Input placeholder="Email" type="email"/>
                            <Input placeholder="Onderwerp"/>
                            <textarea
                                className="min-h-[100px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:placeholder:text-gray-500 dark:focus:ring-gray-300"
                                placeholder="Bericht"
                            />
                            <Button type="submit">Verstuur</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
}