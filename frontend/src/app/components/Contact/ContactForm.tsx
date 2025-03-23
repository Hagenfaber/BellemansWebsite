"use client"

import type React from "react"

import { Send } from "lucide-react"
import emailjs from "@emailjs/browser";
import {useForm} from "@tanstack/react-form";

export default function ContactForm() {
    
    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "", 
            message: "",
        },
        onSubmit: async ({ value }) => {
            await emailjs.send("info_hagenfaber", "bellemans_contact", {
                ...value,
                time: new Date().formatDateTime(false),
            });
        }
    })

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            form.handleSubmit(form)
                        }}
                        className="p-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div>
                                <form.Field 
                                    name="name" 
                                    label="Name" 
                                    required
                                    children={(field) => {
                                        // Avoid hasty abstractions. Render props are great!
                                        return (
                                            <>
                                                <label htmlFor={field.name} className="block text-sm font-medium text-[#264038] mb-2">
                                                    Naam <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id={field.name}
                                                    name={field.name}
                                                    value={field.state.value}
                                                    onBlur={field.handleBlur}
                                                    onChange={(e) => field.handleChange(e.target.value)}
                                                    required
                                                    className="w-full px-4 py-3 border border-[#BDC5C3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7DF7B5] focus:border-transparent"
                                                    placeholder="Jouw naam"
                                                />
                                            </>
                                        )
                                    }}/>
                            </div>

                            <div>
                                <form.Field 
                                    name="email" 
                                    label="Email" 
                                    required
                                    children={(field) => {
                                        // Avoid hasty abstractions. Render props are great!
                                        return (
                                            <>
                                                <label htmlFor={field.name} className="block text-sm font-medium text-[#264038] mb-2">
                                                    Email adres <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id={field.name}
                                                    name={field.name}
                                                    value={field.state.value}
                                                    onBlur={field.handleBlur}
                                                    onChange={(e) => field.handleChange(e.target.value)}
                                                    required
                                                    className="w-full px-4 py-3 border border-[#BDC5C3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7DF7B5] focus:border-transparent"
                                                    placeholder="jouw@email.nl"
                                                />
                                            </>
                                        )
                                    }}/>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <form.Field
                                    name="phone"
                                    label="Telefoon"
                                    children={(field) => {
                                        // Avoid hasty abstractions. Render props are great!
                                        return (
                                            <>
                                                <label htmlFor={field.name} className="block text-sm font-medium text-[#264038] mb-2">
                                                    Telefoon
                                                </label>
                                                <input
                                                    type="tel"
                                                    id={field.name}
                                                    name={field.name}
                                                    value={field.state.value}
                                                    onBlur={field.handleBlur}
                                                    onChange={(e) => field.handleChange(e.target.value)}
                                                    className="w-full px-4 py-3 border border-[#BDC5C3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7DF7B5] focus:border-transparent"
                                                    placeholder="+31 6 12345678"
                                                />
                                            </>
                                        )
                                    }}/>
                            </div>s
                        </div>

                        <div>
                            <form.Field
                                name="message"
                                label="Mededeling"
                                required
                                children={(field) => {
                                    // Avoid hasty abstractions. Render props are great!
                                    return (
                                        <>
                                            <label htmlFor={field.name} className="block text-sm font-medium text-[#264038] mb-2">
                                                Mededeling <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                id={field.name}
                                                name={field.name}
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                required
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                rows={6}
                                                className="w-full px-4 py-3 border border-[#BDC5C3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7DF7B5] focus:border-transparent"
                                                placeholder="Jouw bericht..."
                                            ></textarea>
                                        </>
                                    )
                                }}/>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-sm text-[#BDC5C3]">
                                <span className="text-red-500">*</span> Verplichte velden
                            </p>
                            <button
                                type="submit"
                                className="bg-[#7DF7B5] text-[#264038] font-bold py-3 px-8 rounded-lg hover:bg-[#264038] hover:text-[#7DF7B5] transition duration-300 flex items-center justify-center"
                            >
                                Verzenden <Send className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                        
                        {/*{submitSuccess && (*/}
                        {/*    <div className="p-4 bg-green-100 text-green-800 rounded-lg">*/}
                        {/*        Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.*/}
                        {/*    </div>*/}
                        {/*)}*/}
                        
                        {/*{submitError && (*/}
                        {/*    <div className="p-4 bg-red-100 text-red-800 rounded-lg">*/}
                        {/*        Er is iets misgegaan bij het verzenden van je bericht. Probeer het later opnieuw.*/}
                        {/*    </div>*/}
                        {/*)}*/}
                    </form>
                </div>
            </div>
        </section>
    )
}

