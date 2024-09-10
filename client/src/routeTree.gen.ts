/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const RegistrationLazyImport = createFileRoute('/registration')()
const LoginLazyImport = createFileRoute('/login')()

// Create/Update Routes

const RegistrationLazyRoute = RegistrationLazyImport.update({
  path: '/registration',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/registration.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/login': {
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/registration': {
      preLoaderRoute: typeof RegistrationLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  LoginLazyRoute,
  RegistrationLazyRoute,
])

/* prettier-ignore-end */
