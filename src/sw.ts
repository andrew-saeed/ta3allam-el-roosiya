/// <reference lib="webworker" />
import { precacheAndRoute } from 'workbox-precaching'
import { setCacheNameDetails } from 'workbox-core'

export default null
declare let self: ServiceWorkerGlobalScope

const VERSION = '13'
const APPNAME = 'telroosiya'

function getCacheVersion() {
    return `${APPNAME}-cache-${VERSION}`
}

setCacheNameDetails({ prefix: APPNAME, suffix: VERSION, precache: 'cache' })
precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('fetch', (event:FetchEvent) => event.respondWith(cacheThenNetwork(event)))
async function cacheThenNetwork(event:FetchEvent) {

    const cache = await caches.open(getCacheVersion())
    const cachedResponse = await cache.match(event.request)
    if(cachedResponse) return cachedResponse

    const networkResponse = await fetch(event.request)
    return networkResponse
}

self.addEventListener('activate', event => event.waitUntil(activateServiceWorker()))
async function activateServiceWorker() {
    
    const cacheKeys = await caches.keys()
    await Promise.all(
        cacheKeys.map(cacheKey => {
            if (cacheKey !== getCacheVersion()) {
                return caches.delete(cacheKey)
            }
        })
    )

    // Take control of all pages immediately
    return self.clients.claim()
}

self.addEventListener('install', (event) => event.waitUntil(installServiceWorker()))
async function installServiceWorker() {

    self.skipWaiting()
}