'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/app_logo.svg": "5120d0ee5e18d60f4091d82878f820e7",
"assets/AssetManifest.json": "9f7acdb3d92e25306cdbf913e91f2cdc",
"assets/assets/fonts/JosefinSans/JosefinSans-Bold.ttf": "75d240293f611020f2885e035a705f4e",
"assets/assets/fonts/JosefinSans/JosefinSans-SemiBold.ttf": "f5c12a8ff92995d15bc240053d60db48",
"assets/assets/fonts/Nunito/Nunito-Bold.ttf": "6b6424c109a32ec71c9b785202ed54c2",
"assets/assets/fonts/Nunito/Nunito-Regular.ttf": "5f444b61c541a4b329d8b16841b4de96",
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
"assets/assets/icons/social/discord.svg": "948306349b9b586ce2c517b4779537de",
"assets/assets/icons/social/github.svg": "3293b05b0be66a330536ceff60ac9f38",
"assets/assets/icons/social/linkedin.svg": "2963f1999d859494a9dee74e6a39d82b",
"assets/assets/images/flylady.png": "52827186cae24e2d3c5a4cfb05789548",
"assets/assets/images/procom.png": "bfd217d027374691d66786f12acec186",
"assets/assets/images/sacred_groves.png": "610837c32dabd1cba10c78b6bb8596f2",
"assets/assets/logo/app_logo.svg": "5120d0ee5e18d60f4091d82878f820e7",
"assets/FontManifest.json": "cd05022db08ec8b75f680146e836d5e3",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/loading_animation.gif": "639612106119106a8c1862f704911753",
"assets/loading_animation_long.gif": "5560a720a7b78f19fb84c20531a65f84",
"assets/NOTICES": "eb9935b0cf860650f7dfba55143777a4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f402efc96091d5b83e1d345bb95f7e25",
"/": "f402efc96091d5b83e1d345bb95f7e25",
"main.dart.js": "b1c033c4b46b959cea4f94b887c4d5b7",
"manifest.json": "2697c8c5c404237ba1f886c974a821b6",
"version.json": "424e1c820abc43fa3de5db67518dd634"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
