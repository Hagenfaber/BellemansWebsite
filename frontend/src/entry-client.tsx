// @ts-ignore
import { hydrateRoot } from 'react-dom/client'
import "@/infrastructure/utilities/dateExtensions"
import {createRouter} from "@/router.tsx";
import { RouterClient } from '@tanstack/react-router/ssr/client'

// Set up a Router instance
const router = createRouter()

hydrateRoot(document, <RouterClient router={router} />)
