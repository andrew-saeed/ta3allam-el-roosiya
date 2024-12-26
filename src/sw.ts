/// <reference lib="webworker" />
import { precacheAndRoute } from 'workbox-precaching'
import { setCacheNameDetails } from 'workbox-core'

export default null
declare let self: ServiceWorkerGlobalScope

const VERSION = '12'
const APPNAME = 'telroosiya'

function getCacheVersion() {
    return `${APPNAME}-cache-${VERSION}`
}

setCacheNameDetails({ prefix: APPNAME, suffix: VERSION, precache: 'cache' })
precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('fetch', (event:FetchEvent) => event.respondWith(cacheThenNetwork(event)))
async function cacheThenNetwork(event:FetchEvent) {

    // Start the network request immediately
    const networkPromise = fetch(event.request)

    try {
        // Try to get from cache first
        const cache = await caches.open(getCacheVersion())
        const cachedResponse = await cache.match(event.request)
        
        if (cachedResponse) {
            // Return cached data immediately
            // But still update cache with fresh data in the background
            event.waitUntil(
                networkPromise.then(networkResponse => {
                    return cache.put(event.request, networkResponse.clone())
                })
            )
            return cachedResponse
        }

        // If not in cache, wait for network response
        const networkResponse = await networkPromise
        // Clone before storing in cache since response body can only be used once
        await cache.put(event.request, networkResponse.clone())
        return networkResponse

    } catch (error) {
        
        // If both cache and network fail, return error response
        console.error('Cache then network failed:', error)
        return new Response('Cache and network both failed', { status: 500 })
    }
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