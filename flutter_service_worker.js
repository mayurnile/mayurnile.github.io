'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/app_logo.svg": "5120d0ee5e18d60f4091d82878f820e7",
"assets/AssetManifest.json": "e1c9a8fd937d5ae86f5aebee06174b28",
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
"assets/assets/images/flylady.png": "eb9c96ba7fda32bb5e3278d4c5f8e92b",
"assets/assets/images/my_photo.png": "75391d496c9b8683c44d99787867db3e",
"assets/assets/images/procom.png": "b5e6509a75fe550541706bbe38c4f07b",
"assets/assets/images/sacred_groves.png": "9e1728a6330076d5d4a3a56ca9371fd4",
"assets/assets/logo/app_logo.png": "081b8e4ae78e0eb57443cf4c4282031f",
"assets/assets/logo/app_logo.svg": "5120d0ee5e18d60f4091d82878f820e7",
"assets/assets/logo/logo.png": "c68c880e01a21b35769d4f36fdddfc94",
"assets/assets/logo/reverse_loading.gif": "0db6ccd149660f2f7f9fa5225eaba837",
"assets/FontManifest.json": "cd05022db08ec8b75f680146e836d5e3",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/loading_animation.gif": "639612106119106a8c1862f704911753",
"assets/loading_animation_long.gif": "5560a720a7b78f19fb84c20531a65f84",
"assets/NOTICES": "091615a6af06689036d6b6acd8842d60",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"icons/android-chrome-192x192.png": "977fc407bfcf42adae2e3af93a48ff81",
"icons/android-chrome-512x512.png": "14d6536e41f648fa82897566662ee570",
"icons/apple-touch-icon.png": "af90db309723b652b77f79194df9b351",
"index.html": "ade9dd21e6cfca85817c974457277d5b",
"/": "ade9dd21e6cfca85817c974457277d5b",
"logo.png": "ad8a4a623006c68c5d3f9d8311943284",
"main.dart.js": "b27a2c7f56f5a94edf9c16121c42000b",
"manifest.json": "fa589baffc09646c1622ec6753a56437",
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
