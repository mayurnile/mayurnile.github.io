'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "384657f10038cce10eda0a36572c4452",
"assets/AssetManifest.bin.json": "885ef5fb668e1731b238ea1212b87cef",
"assets/AssetManifest.json": "a2e6c72b814e9b94b0a43ecdbc3e8524",
"assets/assets/fonts/JosefinSans/JosefinSans-Bold.ttf": "75d240293f611020f2885e035a705f4e",
"assets/assets/fonts/JosefinSans/JosefinSans-SemiBold.ttf": "f5c12a8ff92995d15bc240053d60db48",
"assets/assets/fonts/SpaceGrotesk/SpaceGrotesk-Bold.ttf": "9ace3da396795504e076197f08434e8c",
"assets/assets/fonts/SpaceGrotesk/SpaceGrotesk-Regular.ttf": "9589c3d42504fe59926fb74b90b74061",
"assets/assets/fonts/VictorMono/VictorMono-Bold.ttf": "cbe39229787a3b35ea4cf1c3eeecab0c",
"assets/assets/fonts/VictorMono/VictorMono-Medium.ttf": "2fa2a363301ec3cc4391a8f3cf3717db",
"assets/assets/fonts/VictorMono/VictorMono-SemiBold.ttf": "3c8a261e0f442f079a76396f1e8323af",
"assets/assets/icons/arrow_back.svg": "ef0abbc3f02d33d803f3ebaa17b877dc",
"assets/assets/icons/arrow_forward.svg": "1ebc2229b3e9d9f50b9dd8503fcbae03",
"assets/assets/icons/skills/after_effects.svg": "75707e65def5475c9ea08b26268a81c1",
"assets/assets/icons/skills/dart.svg": "821c87221e5f9ff387fe63312d86a484",
"assets/assets/icons/skills/figma.svg": "402b2acbfe02959f801b8bb5aa4b2417",
"assets/assets/icons/skills/firebase.svg": "7b7364bded0a2b1a8509ffd681314dc9",
"assets/assets/icons/skills/flutter.svg": "b9c7a47a476e0ed52d10868c3e285c87",
"assets/assets/icons/skills/lightroom.svg": "5fa93ba574ec9dc90883ba1b05a619ec",
"assets/assets/icons/social/github.svg": "3293b05b0be66a330536ceff60ac9f38",
"assets/assets/icons/social/instagram.svg": "ee26219a9c962083f8973bec17f9725b",
"assets/assets/icons/social/linkedin.svg": "2963f1999d859494a9dee74e6a39d82b",
"assets/assets/images/curvy_ui.png": "9097bab3d06ca00df5fa4939ea84f404",
"assets/assets/images/flylady.png": "eb9c96ba7fda32bb5e3278d4c5f8e92b",
"assets/assets/images/konnect.png": "370d9088fe4994ae36d06597fa987ca7",
"assets/assets/images/my_notes.png": "d9258d95a2bead7fd2f0f7dd2bbccfff",
"assets/assets/images/my_photo.png": "75391d496c9b8683c44d99787867db3e",
"assets/assets/images/procom.png": "b5e6509a75fe550541706bbe38c4f07b",
"assets/assets/images/sacred_groves.png": "9e1728a6330076d5d4a3a56ca9371fd4",
"assets/assets/images/shopify.png": "64d7ec3bbb522d5f9c0dea320ab8b35c",
"assets/assets/images/smart_file_manager.png": "57cc51c2cab685e14784d7f38df64167",
"assets/assets/images/traveller.png": "a688f45f944e7cff4baac5d6ed07ba04",
"assets/assets/images/two_step.png": "7c14f098d94463099557a2904f2fb60e",
"assets/assets/images/ubiquitous.png": "eb818b8aa95396fd230964c23ac63d3f",
"assets/assets/logo/app_logo.png": "081b8e4ae78e0eb57443cf4c4282031f",
"assets/assets/logo/app_logo.svg": "5120d0ee5e18d60f4091d82878f820e7",
"assets/assets/logo/loading_animation_long.gif": "5560a720a7b78f19fb84c20531a65f84",
"assets/assets/logo/logo.png": "c68c880e01a21b35769d4f36fdddfc94",
"assets/assets/logo/reverse_loading.gif": "ec945cb2c18eb7a9fecebf653b1c5221",
"assets/FontManifest.json": "a15939f8542049a1db1c0822c06dc201",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "e0b7e5af6297e180b419b8389946e5e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-chrome-192x192.png": "977fc407bfcf42adae2e3af93a48ff81",
"icons/android-chrome-512x512.png": "14d6536e41f648fa82897566662ee570",
"icons/apple-touch-icon.png": "af90db309723b652b77f79194df9b351",
"index.html": "b2ad75441fcaf5601ce551ba5e18dc27",
"/": "b2ad75441fcaf5601ce551ba5e18dc27",
"logo.png": "ad8a4a623006c68c5d3f9d8311943284",
"main.dart.js": "fb17dbd71a9cf2d119dcd700b8a11916",
"manifest.json": "fa589baffc09646c1622ec6753a56437",
"version.json": "424e1c820abc43fa3de5db67518dd634"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
