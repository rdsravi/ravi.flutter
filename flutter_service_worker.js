'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a9917f2436227c0a28e973f5b574fc6a",
"version.json": "da0cdbfb4b81eb07f0d5dd55ad0f934b",
"index.html": "a9177bc387f150e21efc1019efe3a35a",
"/": "a9177bc387f150e21efc1019efe3a35a",
"main.dart.js": "4d6ed87e27aae956c16a2bfa60c08b90",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"devboxer_logo.png": "4ffb507707f723b68ea00440f82da1d9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a51b4ff2dc0d676cc04912c9d221c3ec",
"assets/AssetManifest.json": "e3ef4d4ee36601a17da61f9d9b9aa4dd",
"assets/NOTICES": "f2380ebce3c0dafae03bc1a33cfa666e",
"assets/FontManifest.json": "6907f80ef484dc6827b54291eaae072a",
"assets/AssetManifest.bin.json": "2a0ba7261f44f9204b34c0ee433bb431",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "fb3df9ef8e49b5e08b6afcb95521a52c",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "438d776a8e886889ef24e75d5dfc323f",
"assets/fonts/MaterialIcons-Regular.otf": "bc1891b4b66b5e484f80702fee849c8b",
"assets/assets/images/JumpLeft2.png": "25a8af8de3a28a627d7d59955351d9d5",
"assets/assets/images/JumpRight1.png": "fa654846b16edf4c8a89afe9e790fa60",
"assets/assets/images/contentCreator.png": "359bd4d7e211ef9c7b8edfc8fa02454d",
"assets/assets/images/AttackLeft1.png": "87fc1b424d4d8a5483b9fb8eaa5a25f2",
"assets/assets/images/AttackLeft0.png": "cf8d07ac112405c429f9bcde369fbc54",
"assets/assets/images/cuttedChainWithContainer.png": "261e9eb487154078486772e63a93548a",
"assets/assets/images/JumpRight0.png": "2d98d9729ab6aff54e9862e52b45b702",
"assets/assets/images/JumpLeft3.png": "9b20c0a8d79c7e7068fc3259a7f75606",
"assets/assets/images/JumpLeft1.png": "f63a20989ffdfe240d37a2c51f34b6bb",
"assets/assets/images/JumpRight2.png": "928c39a5b55feb2378438e1ace4b9936",
"assets/assets/images/andriod.png": "38a9e209340cd8fe8a802ab6ce16a48b",
"assets/assets/images/AttackLeft2.png": "87eaa7f40c0e140f0ba46c54f9987d2f",
"assets/assets/images/AttackLeft3.png": "b3189e6620d1546bb7b5e77ff90a530a",
"assets/assets/images/greenFlutter.png": "9faa419ae8ba3dc2e23b5e0dce2b41ac",
"assets/assets/images/JumpRight3.png": "dbf3323cbb948946740f4457e802765b",
"assets/assets/images/JumpLeft0.png": "d5ead327d2fca0e63d98a40900d11f16",
"assets/assets/images/JumpLeft4.png": "9b20c0a8d79c7e7068fc3259a7f75606",
"assets/assets/images/JumpRight7.png": "863080d71dd48e17718a3ed1c4c5b6f6",
"assets/assets/images/AttackLeft7.png": "72a720f601e2925be217a8a4c3eb6e1b",
"assets/assets/images/AttackLeft6.png": "5814dc2aad03ce7e264e559999823469",
"assets/assets/images/JumpRight6.png": "4177f16c4dc32d1f725e83825b443fa4",
"assets/assets/images/Wallpaper.png": "5e7c4658e00ee4ceb998cefcb7447726",
"assets/assets/images/JumpLeft5.png": "9b20c0a8d79c7e7068fc3259a7f75606",
"assets/assets/images/JumpLeft7.png": "a5257a2c93b81a35eaf0efcd7270c7be",
"assets/assets/images/allabeeb_yep.png": "0059aa38076564db6e14c309925182b3",
"assets/assets/images/JumpRight4.png": "d260a7927ed759d8d5b1c7c77cbfed33",
"assets/assets/images/brain_game.png": "4ee5529bc5f41a5b1b7b4a4dd5dd30e7",
"assets/assets/images/RunLeft__009.png": "1db22e475da8303cc709c41ad57ba70e",
"assets/assets/images/AttackLeft4.png": "0aa82a48aa68b781b96fca8890ffeada",
"assets/assets/images/flutter.png": "6384ef9f30ca20eeb768d30015ab46dc",
"assets/assets/images/AttackLeft5.png": "734c426a5d011ecd9044071274a1063e",
"assets/assets/images/RunLeft__008.png": "63c4c3a9bbf9bb755198435368ec680f",
"assets/assets/images/JumpRight5.png": "dbf3323cbb948946740f4457e802765b",
"assets/assets/images/JumpLeft6.png": "2ba02c384526cccd3fc9b1e36d909c68",
"assets/assets/images/Idle5.png": "a595f4273f5b3445b59e3545b8112be1",
"assets/assets/images/IdleLeft2.png": "91b19e7373a57ef801f7d18f1f538277",
"assets/assets/images/IdleLeft3.png": "422cfaaa1bc1ffc2f0d6d9a38c59ee2b",
"assets/assets/images/Idle4.png": "2fca1eebc19340067c483377ff58cbfd",
"assets/assets/images/Attack9.png": "91a49ea9719d8d6f7d94ed5801e3c713",
"assets/assets/images/Idle6.png": "2fca1eebc19340067c483377ff58cbfd",
"assets/assets/images/IdleLeft1.png": "4676047a09b37da8d50c9a9f72052e50",
"assets/assets/images/IdleLeft0.png": "7ef5e3df845bb68390e72b80e59eeff7",
"assets/assets/images/Idle7.png": "0e7a41516c567ccb221faa90468ba63f",
"assets/assets/images/Attack8.png": "3171e6ccf71096d80b446dc290cf9958",
"assets/assets/images/RunRight__009.png": "731133269fd525b8eee6afc984075f6d",
"assets/assets/images/Idle3.png": "0e7a41516c567ccb221faa90468ba63f",
"assets/assets/images/IdleLeft4.png": "8cd7b61b3683de5060b38cdf98002f00",
"assets/assets/images/IdleLeft5.png": "5c1becaf2b97d3c595dc3be68e0d1f2a",
"assets/assets/images/Idle2.png": "2a06d60ceaa4e6059f0bcef66bd2ef1c",
"assets/assets/images/RunRight__008.png": "081512e0182a8f38c858460845c1b717",
"assets/assets/images/Idle0.png": "97166fb6758d5b8518348e7ad828c22e",
"assets/assets/images/IdleLeft7.png": "422cfaaa1bc1ffc2f0d6d9a38c59ee2b",
"assets/assets/images/figma.png": "f4a726942789b90bf83a68f9b07f33ce",
"assets/assets/images/IdleLeft6.png": "8cd7b61b3683de5060b38cdf98002f00",
"assets/assets/images/Idle1.png": "fc0411e63da28fff62e2d9d07156451c",
"assets/assets/images/RunRight__006.png": "a59aa06e42cccbf4ce12d98f8e67f95d",
"assets/assets/images/Attack3.png": "9790eea466f3158479050cd2e7a960de",
"assets/assets/images/RunRight__007.png": "9750e75da700c3202f2c67150e1a5805",
"assets/assets/images/Attack2.png": "0571255f15dc1780a0ddf0b7cfd8010e",
"assets/assets/images/Attack0.png": "3604a3961ef932c026aa2492a8b59218",
"assets/assets/images/RunRight__005.png": "1641ac8228b8573c1625c3af6bcbb73c",
"assets/assets/images/ethkrypto.png": "cbf75db4d46dbcb4b84e32cee76d562e",
"assets/assets/images/IdleLeft8.png": "91b19e7373a57ef801f7d18f1f538277",
"assets/assets/images/IdleLeft9.png": "4676047a09b37da8d50c9a9f72052e50",
"assets/assets/images/Attack1.png": "17c912c1c9d23db8719e140b714b273a",
"assets/assets/images/RunRight__004.png": "adffb9751972b46a4b90581a8dbc9903",
"assets/assets/images/logo.png": "c2a2a3dfc3139bc0f94476a08f56dede",
"assets/assets/images/RunRight__000.png": "40f223ae497a0c94c1d24d5817d77f40",
"assets/assets/images/Attack5.png": "3013659598226bfda761beb69641acde",
"assets/assets/images/githubpng.png": "84a13b1b2d2c02f11ed4e863d5ee40ab",
"assets/assets/images/linkedin.png": "b42f8a21911fc65e249ee3071c88ca56",
"assets/assets/images/RunRight__001.png": "782e25fe46c48569eaa21243c1b662ce",
"assets/assets/images/Attack4.png": "41f34d0e6993e8d48891beab6e64069b",
"assets/assets/images/Attack6.png": "67adbecc19ca9bc859aa1d847bba5f60",
"assets/assets/images/RunRight__003.png": "80a12d0c8a090ca6f30ff0c493274cac",
"assets/assets/images/Idle9.png": "fc0411e63da28fff62e2d9d07156451c",
"assets/assets/images/Idle8.png": "2a06d60ceaa4e6059f0bcef66bd2ef1c",
"assets/assets/images/Attack7.png": "1fd830acccdc3f4e802afef3d80f43c4",
"assets/assets/images/RunRight__002.png": "d50f1091dcbfe2353003c3cd3b6c4a99",
"assets/assets/images/nestjs.png": "e781f5e86a0a01346fcd05baa76578dd",
"assets/assets/images/JumpRight8.png": "1aaea51deb083881ea09499445c4f6fc",
"assets/assets/images/RunLeft__005.png": "d8306ec270a0de9c83d324b028ef1abe",
"assets/assets/images/AttackLeft8.png": "ffbede045aa9f32b667367c67c3bde3b",
"assets/assets/images/cuttedChain.png": "449aece0ccf9aad723dd067ea41c371c",
"assets/assets/images/AttackLeft9.png": "6b875aeea8703f73462236d75117f7c8",
"assets/assets/images/RunLeft__004.png": "6ae028c9255e444f031e00edec017194",
"assets/assets/images/JumpRight9.png": "1b25a83be8b8ea557e1f8199b95e7a36",
"assets/assets/images/JumpLeft8.png": "7d2146e0aa2fab11f0e43a65cbf22655",
"assets/assets/images/RunLeft__006.png": "dca2a5e113a7402b15858bad8749ee21",
"assets/assets/images/backend.png": "873222ff60e3fdd966d94e47bff09b60",
"assets/assets/images/RunLeft__007.png": "dabdd727eef92785c290a29f18b0fcb3",
"assets/assets/images/JumpLeft9.png": "7d2146e0aa2fab11f0e43a65cbf22655",
"assets/assets/images/facebook.png": "71d3b58ffb5ec52f44e14bfebdc2be9a",
"assets/assets/images/RunLeft__003.png": "715c5a7466a57243e47ae3cd39df0453",
"assets/assets/images/RunLeft__002.png": "4e717a666bc8d7a49318d0d2761e25b0",
"assets/assets/images/RunLeft__000.png": "7453f5717e45641b3a0ce5ad70e573dc",
"assets/assets/images/RunLeft__001.png": "0a2c2867e23be26b49b4fbcfe4df890d",
"assets/assets/three_d_models/planet/textures/Clouds_baseColor.png": "f45116e6e8cd5efa74abe0f6fe40a3e4",
"assets/assets/three_d_models/planet/textures/Planet_baseColor.png": "1821eed6565b52b7a4e84320ada536bf",
"assets/assets/three_d_models/planet/scene.gltf": "d9d89afd3d218d60a318474a5e0b2ab0",
"assets/assets/three_d_models/planet/scene.bin": "eaf372ae93fbd26d862318e1d712cd32",
"assets/assets/three_d_models/planet/license.txt": "d8b05a4765e25f1adae22398d3ebc543",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_31_baseColor.png": "09331dfefd9056ca78e57b8a33c6cc4e",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_26_baseColor.png": "f153ab4eca07bceeaa1088c0dc0c652a",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_22_baseColor.png": "316d2a9d05ec56c9fc8563c9b078e686",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_35_baseColor.png": "5a951d0aad494a0584516a4926eb9451",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_18_emissive.png": "3b4374c710e54dc8534150fcf6ae7873",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_2_baseColor.jpeg": "059ab594475b338f9d5bad37c548074d",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_5_baseColor.png": "7ca558555f7122727ed06e962e6b3bda",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_12_baseColor.jpeg": "91a62bc77f92b7d4542861d1d4c7fbb9",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_6_baseColor.png": "4e066d93f54588fe724587fed0e20f95",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_baseColor.png": "ff9fe4dfcc6d544165602e0eb2c6fda5",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_18_baseColor.png": "c8149f06706a927afb48b65d3a2fe119",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_21_baseColor.png": "9913b632e388736fa1acfac3c044fe28",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_4_emissive.png": "b35299d3e99267154505735d894ed51e",
"assets/assets/three_d_models/desktop_pc/textures/Tasten_2_baseColor.jpeg": "cc4c89c56df059f0de2e70540fc8077f",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_9_emissive.png": "cbc546984ead36d7c006e1c607980ef4",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_16_baseColor.png": "d2ffd8d27466db9a830334168f0933f2",
"assets/assets/three_d_models/desktop_pc/textures/Material_baseColor.jpeg": "fd6f9bce75d3515756debcb5ca12a898",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_10_baseColor.jpeg": "341d8f713cc6a6ff705982a211ec13ab",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_1_baseColor.jpeg": "2fa68839191b9359a1767ab20b52f1bb",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_8_baseColor.png": "92ed78d0989371c66b6451ea81f92870",
"assets/assets/three_d_models/desktop_pc/textures/Material.023_baseColor.jpeg": "dbc97bc78cce3f7056d162f3c04602e3",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_11_baseColor.png": "fe9af7cf6acea473368d4fb62afd67d0",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_24_emissive.png": "8380d7402e2ecfb8442b42a9b20c16b8",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_28_baseColor.png": "ccaedc0a4eba6b67fe3ab83302bc1417",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_15_baseColor.png": "6bc1cb84fed2ebea1e20726c333829cb",
"assets/assets/three_d_models/desktop_pc/textures/Material.024_baseColor.jpeg": "ca9a2f465268eb9d4c5cb2bcebb8f543",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_14_baseColor.png": "8e822ebe111e9b682db992e90a3dd421",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_29_baseColor.png": "018d596a220604a594cd0fd69f7e87f1",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_25_baseColor.jpeg": "311d36565fa3c0ab5029c0fac2105620",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_17_baseColor.png": "5c9f88375cf0d9e4789e6c6b1a60734f",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_39_baseColor.jpeg": "144f2ccb46548f1a8c180df24f4acdc4",
"assets/assets/three_d_models/desktop_pc/textures/Material_metallicRoughness.png": "82a688151ea06c3ede3706efa564ae47",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_13_baseColor.png": "343d72da2041ff61c57498ef8f691342",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_36_baseColor.jpeg": "5f0e4b3ca11fe7301f5fedae83c14cb6",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_9_baseColor.png": "d0faa9c1663c816a1697721241e1009d",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_27_emissive.png": "78dbd71aa070e0ca86ee9a8d15b1143a",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_34_baseColor.jpeg": "d4220ce14c37a9a67d06fab4932dab79",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_7_baseColor.png": "8846216e98f2c57de8c6bb33fc38a5ba",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_3_baseColor.png": "164ae623a0796a8b4c1c629d925e6576",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_20_baseColor.png": "064b878ad81554b8e07a5d5fc6c2cc67",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_19_baseColor.png": "e9070b535a2e0c3012e63398dc554798",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_33_baseColor.png": "dc4464ab39ad4be689fd135e84cd071c",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_24_baseColor.png": "5baf1a6d1c3125fbb07037aab3e2eb68",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_23_baseColor.png": "0c247143b91640b400714072e9157c0f",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_27_baseColor.png": "f0034cbcfdda3dc405de4f7fe271b2c6",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_32_baseColor.jpeg": "7e75c0e35c6915ef3ff069c0698f8b4b",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_30_baseColor.png": "2fd3ab428bb588c53333308b4d9a4906",
"assets/assets/three_d_models/desktop_pc/textures/Material.002_baseColor.png": "35e25d59126d8762bdab0a2d6d05c647",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_4_baseColor.png": "1f60e118c24afa38a7a5324661cf9b1b",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_40_baseColor.png": "85fa9a240ae54d6b61b4b5140e7a5c7d",
"assets/assets/three_d_models/desktop_pc/textures/Material.074_0_baseColor.png": "f18ac69e1e5e82e30f208d33025ca809",
"assets/assets/three_d_models/desktop_pc/scene.gltf": "a5612efdf54a0bacac0c45176499a816",
"assets/assets/three_d_models/desktop_pc/scene.bin": "23174dbb379856a8aed4d6eea6d2cd8d",
"assets/assets/three_d_models/desktop_pc/license.txt": "ed537a4eacc4832147b3fc3086cd0207",
"assets/assets/audio/ninja_sound_track.mp3": "0927dcfa0f678225ab31b0c70d1c30e3",
"assets/assets/audio/jump.wav": "7b478ca38b4ca2e542021fbba2aefcc6",
"assets/assets/audio/cut_the_chain.mp3": "8d15263c2fb28d0fb51db1ef78982b85",
"assets/assets/audio/sword.wav": "dcecc96b722a45674fd5ff91e0be928a",
"assets/assets/fonts/ebrima.ttf": "ec8b5752c02b6ee02e524a5b8ca0af08",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
