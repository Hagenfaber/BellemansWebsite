/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as TeamsIndexImport } from './routes/teams/index'
import { Route as DynamicPagenameImport } from './routes/dynamic/$pagename'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TeamsIndexRoute = TeamsIndexImport.update({
  id: '/teams/',
  path: '/teams/',
  getParentRoute: () => rootRoute,
} as any)

const DynamicPagenameRoute = DynamicPagenameImport.update({
  id: '/dynamic/$pagename',
  path: '/dynamic/$pagename',
  getParentRoute: () => rootRoute,
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
    '/dynamic/$pagename': {
      id: '/dynamic/$pagename'
      path: '/dynamic/$pagename'
      fullPath: '/dynamic/$pagename'
      preLoaderRoute: typeof DynamicPagenameImport
      parentRoute: typeof rootRoute
    }
    '/teams/': {
      id: '/teams/'
      path: '/teams'
      fullPath: '/teams'
      preLoaderRoute: typeof TeamsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dynamic/$pagename': typeof DynamicPagenameRoute
  '/teams': typeof TeamsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dynamic/$pagename': typeof DynamicPagenameRoute
  '/teams': typeof TeamsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dynamic/$pagename': typeof DynamicPagenameRoute
  '/teams/': typeof TeamsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/dynamic/$pagename' | '/teams'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/dynamic/$pagename' | '/teams'
  id: '__root__' | '/' | '/dynamic/$pagename' | '/teams/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DynamicPagenameRoute: typeof DynamicPagenameRoute
  TeamsIndexRoute: typeof TeamsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DynamicPagenameRoute: DynamicPagenameRoute,
  TeamsIndexRoute: TeamsIndexRoute,
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
        "/dynamic/$pagename",
        "/teams/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dynamic/$pagename": {
      "filePath": "dynamic/$pagename.tsx"
    },
    "/teams/": {
      "filePath": "teams/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
