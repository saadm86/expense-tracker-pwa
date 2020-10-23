if('serviceWorker' in Navigator){
    navigator.serviceWorker.register('./NewserviceWorker.js')
        .then(reg => console.log('serviceWorker registered', reg))
            .catch(err => console.log('serviceWorker registration error', err))
}

const staticCache = 'static-cache'
const dynamicCache = 'dynamic-cache'
const assets = [
    './index.tsx'
]
window.addEventListener('install', e=> {
    e.waituntil(
    caches.open(staticCache).then( cache => {
        cache.addAll(assets)
    })
)})

window.addEventListener('activate',e=>console.log('sw is activated'))

window.addEventListener('fetch', e=> {
    e.respondwith(
        caches.match(e.request).then(staticRes =>{
            return staticRes||fetch(e.request).then(dynamicRes =>{
                return caches.open(dynamicCache).then( cache=>{
                    cache.put(e.request.url,dynamicRes.clone())
                        return dynamicRes
                })
            }
                
            )
        }))
})