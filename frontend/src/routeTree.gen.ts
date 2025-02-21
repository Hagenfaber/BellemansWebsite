/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TeamsIndexImport } from './routes/teams/index'
import { Route as IndividualsIndexImport } from './routes/individuals/index'
import { Route as DynamicPagenameImport } from './routes/dynamic/$pagename'

// Create/Update Routes

const TeamsIndexRoute = TeamsIndexImport.update({
  id: '/teams/',
  path: '/teams/',
  getParentRoute: () => rootRoute,
} as any)

const IndividualsIndexRoute = IndividualsIndexImport.update({
  id: '/individuals/',
  path: '/individuals/',
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
    '/dynamic/$pagename': {
      id: '/dynamic/$pagename'
      path: '/dynamic/$pagename'
      fullPath: '/dynamic/$pagename'
      preLoaderRoute: typeof DynamicPagenameImport
      parentRoute: typeof rootRoute
    }
    '/individuals/': {
      id: '/individuals/'
      path: '/individuals'
      fullPath: '/individuals'
      preLoaderRoute: typeof IndividualsIndexImport
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
  '/dynamic/$pagename': typeof DynamicPagenameRoute
  '/individuals': typeof IndividualsIndexRoute
  '/teams': typeof TeamsIndexRoute
}

export interface FileRoutesByTo {
  '/dynamic/$pagename': typeof DynamicPagenameRoute
  '/individuals': typeof IndividualsIndexRoute
  '/teams': typeof TeamsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/dynamic/$pagename': typeof DynamicPagenameRoute
  '/individuals/': typeof IndividualsIndexRoute
  '/teams/': typeof TeamsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/dynamic/$pagename' | '/individuals' | '/teams'
  fileRoutesByTo: FileRoutesByTo
  to: '/dynamic/$pagename' | '/individuals' | '/teams'
  id: '__root__' | '/dynamic/$pagename' | '/individuals/' | '/teams/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  DynamicPagenameRoute: typeof DynamicPagenameRoute
  IndividualsIndexRoute: typeof IndividualsIndexRoute
  TeamsIndexRoute: typeof TeamsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  DynamicPagenameRoute: DynamicPagenameRoute,
  IndividualsIndexRoute: IndividualsIndexRoute,
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
        "/dynamic/$pagename",
        "/individuals/",
        "/teams/"
      ]
    },
    "/dynamic/$pagename": {
      "filePath": "dynamic/$pagename.tsx"
    },
    "/individuals/": {
      "filePath": "individuals/index.tsx"
    },
    "/teams/": {
      "filePath": "teams/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
