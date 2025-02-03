
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Learning-Platform/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Learning-Platform/home",
    "route": "/Learning-Platform"
  },
  {
    "renderMode": 2,
    "route": "/Learning-Platform/home"
  },
  {
    "renderMode": 2,
    "route": "/Learning-Platform/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/Learning-Platform/courses"
  },
  {
    "renderMode": 2,
    "route": "/Learning-Platform/courses/1"
  },
  {
    "renderMode": 2,
    "route": "/Learning-Platform/courses/2"
  },
  {
    "renderMode": 2,
    "route": "/Learning-Platform/courses/3"
  },
  {
    "renderMode": 0,
    "route": "/Learning-Platform/courses/*"
  },
  {
    "renderMode": 2,
    "route": "/Learning-Platform/challenges"
  },
  {
    "renderMode": 2,
    "route": "/Learning-Platform/leaderboard"
  },
  {
    "renderMode": 2,
    "route": "/Learning-Platform/profile"
  },
  {
    "renderMode": 2,
    "route": "/Learning-Platform/user-profile"
  },
  {
    "renderMode": 2,
    "route": "/Learning-Platform/rewards"
  },
  {
    "renderMode": 2,
    "route": "/Learning-Platform/settings"
  },
  {
    "renderMode": 2,
    "route": "/Learning-Platform/admin"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Learning-Platform/home",
    "route": "/Learning-Platform/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 539, hash: '42302d6b273bf3cb578294cf3ec109c2b39f6e9302e01c35921a2bb4f60fbfec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1052, hash: 'afd830a099f627e19e0d16d4563f0a0c124f2a2c8cca11f27bd24d2d649df013', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 8540, hash: 'd8c4a1915a21de88dccde9d8edf9e2f55688e3e3cbae9a8645738eb77b0ee9fe', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 10027, hash: '3a33568a20164ddc9f47c68dc8b2ce568a1d1714ebf5dc573b170aad3eaad73b', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'courses/1/index.html': {size: 11777, hash: '72d600e4cce819a9776a1d7b22b32a404c0cf90e26910c48db2f8470d5f44508', text: () => import('./assets-chunks/courses_1_index_html.mjs').then(m => m.default)},
    'courses/index.html': {size: 18598, hash: '084fd3e65fbd2f3f3078ace2c8bf5ff0b2ef2951b0433d95025d96a67aada1a6', text: () => import('./assets-chunks/courses_index_html.mjs').then(m => m.default)},
    'courses/3/index.html': {size: 11772, hash: '9b356ac8daac5ac6091b9678618b9392356a28fbaff97b4b6b5314903a751783', text: () => import('./assets-chunks/courses_3_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 5578, hash: '1a76fa5ac9ce5be478d79a9c119503e7f4f83a7550cff07cd308452160d20716', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'leaderboard/index.html': {size: 5588, hash: '872a505140d3dc1def33592a8795cdd545a3590b66fc9931c8e0a12d321b806a', text: () => import('./assets-chunks/leaderboard_index_html.mjs').then(m => m.default)},
    'challenges/index.html': {size: 9177, hash: '4835c5de4d5f0ce19127b81edab310aa452992454f55444690afa7335b84202e', text: () => import('./assets-chunks/challenges_index_html.mjs').then(m => m.default)},
    'courses/2/index.html': {size: 11783, hash: '2f9b10b3ce729f6eaa0aa79d37d4f8a679ef9e0090d514934d4c7a8f0923cd50', text: () => import('./assets-chunks/courses_2_index_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 5580, hash: '6febebb8afbe6c542ddad76cd5118503d381be497b4f6548c9cf3061479a4399', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'rewards/index.html': {size: 5578, hash: 'f8a21cb919ba19166ab41b15a2b43b5bacaad8849c55519fd48aac3a350fa7dc', text: () => import('./assets-chunks/rewards_index_html.mjs').then(m => m.default)},
    'user-profile/index.html': {size: 7783, hash: '01534db05327a524486429ec61531b30c5a2fd552c72357c518b36f6e6f7f378', text: () => import('./assets-chunks/user-profile_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 11036, hash: '456cc934b9b3c0d0ccbfbcf1afee36987fdf806bf58f7598b66519b37c3f2a86', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
