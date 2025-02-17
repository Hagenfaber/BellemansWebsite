/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DynamicImport } from './routes/dynamic'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as DynamicPagenameImport } from './routes/dynamic/$pagename'

// Create/Update Routes

const DynamicRoute = DynamicImport.update({
  id: '/dynamic',
  path: '/dynamic',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DynamicPagenameRoute = DynamicPagenameImport.update({
  id: '/$pagename',
  path: '/$pagename',
  getParentRoute: () => DynamicRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/dynamic': {
      id: '/dynamic'
      path: '/dynamic'
      fullPath: '/dynamic'
      preLoaderRoute: typeof DynamicImport
      parentRoute: typeof rootRoute
    }
    '/dynamic/$pagename': {
      id: '/dynamic/$pagename'
      path: '/$pagename'
      fullPath: '/dynamic/$pagename'
      preLoaderRoute: typeof DynamicPagenameImport
      parentRoute: typeof DynamicImport
    }
  }
}

// Create and export the route tree

interface DynamicRouteChildren {
  DynamicPagenameRoute: typeof DynamicPagenameRoute
}

const DynamicRouteChildren: DynamicRouteChildren = {
  DynamicPagenameRoute: DynamicPagenameRoute,
}

const DynamicRouteWithChildren =
  DynamicRoute._addFileChildren(DynamicRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/dynamic': typeof DynamicRouteWithChildren
  '/dynamic/$pagename': typeof DynamicPagenameRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/dynamic': typeof DynamicRouteWithChildren
  '/dynamic/$pagename': typeof DynamicPagenameRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/dynamic': typeof DynamicRouteWithChildren
  '/dynamic/$pagename': typeof DynamicPagenameRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/dynamic' | '/dynamic/$pagename'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/dynamic' | '/dynamic/$pagename'
  id: '__root__' | '/' | '/about' | '/dynamic' | '/dynamic/$pagename'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  DynamicRoute: typeof DynamicRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  DynamicRoute: DynamicRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/dynamic"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/dynamic": {
      "filePath": "dynamic.tsx",
      "children": [
        "/dynamic/$pagename"
      ]
    },
    "/dynamic/$pagename": {
      "filePath": "dynamic/$pagename.tsx",
      "parent": "/dynamic"
    }
  }
}
ROUTE_MANIFEST_END */
