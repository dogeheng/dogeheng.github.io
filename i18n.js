const copy = {
  en: {
    'language.label': 'Language',
    'profile.greeting': "hi, i'm",
    'profile.intro': 'I give AI agents eyes, ears, hands<br class="desktop-break"> and everything!',
    'profile.aside': 'And sometimes, I build some interesting things.',
    'profile.school': 'Columbia University',
    'profile.enter': 'Yuki is waving. Meet her and try Splash Arena.',
    'profile.art': 'Yuki peeking in from the right and waving',
    'nav.label': 'Explore this page',
    'nav.meet': 'Meet Yuki',
    'lab.label': 'Explore how Yuki works',
    'lab.kicker': 'a little more than a chatbot',
    'lab.title': 'meet Yuki.',
    'lab.intro': 'Giving an AI a few senses of her own.',
    'lab.hint': 'Try her eyes, ears, and the other little details.<br>Each has something I built behind it.',
    'parts.label': 'Choose a part',
    'part.eyes': 'Eyes', 'part.ears': 'Ears', 'part.mouth': 'Voice', 'part.head': 'Thought',
    'part.heart': 'Personality', 'part.memory': 'Memory', 'part.hands': 'Hands',
    'yuki.label': 'Interactive Yuki',
    'yuki.art': 'Yuki with dark blue hair, blue eyes, and a whale apron',
    'yuki.hotspots': 'Interactive body parts',
    'speech.source': 'See the code ↗', 'speech.close': 'Close explanation',
    'motion.pause': 'Pause motion', 'motion.resume': 'Resume motion',
    'lab.scroll': 'A little something to play with <span>↓</span>',
    'game.kicker': 'local “splatoon-like” game',
    'game.title': 'leave a little colour.',
    'game.intro': 'A paint battle you can start without waiting for friends.',
    'game.label': 'Splash Arena single-player demo',
    'game.poster': 'Actual gameplay from Splash Arena',
    'game.pitch': 'Paint. Swim. Make the arena your colour.',
    'game.start': 'Play a round <span>↗</span>',
    'game.mode': 'Practice / AI opponent · no install needed',
    'game.controls': '<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> move <span class="divider">·</span> mouse aim / left click to paint <span class="divider">·</span> <kbd>Shift</kbd> swim & refill',
    'game.fullscreen': 'Play fullscreen ↗',
    'game.recording': 'Or watch a short clip of the real game',
    'footer.made': 'Made by Peiheng Li (Yuki).', 'footer.back': 'back to hello ↗',
    'feature.eyes.label': 'EYES',
    'feature.eyes.title': 'A picture is more than a link.',
    'feature.eyes.description': 'Images from the chat go to a vision model. When someone shares a Bilibili video, I extract its title and subtitles so she can follow the conversation.',
    'feature.eyes.tech': 'Image understanding · video subtitles',
    'feature.ears.label': 'EARS',
    'feature.ears.title': 'She hears the words, and a little of the mood.',
    'feature.ears.description': 'SenseVoice turns voice messages into text on my computer and picks up emotions like happy or sad. The model unloads when idle to free memory.',
    'feature.ears.tech': 'SenseVoice · local transcription',
    'feature.mouth.label': 'VOICE',
    'feature.mouth.title': 'Her own voice, with a little feeling.',
    'feature.mouth.description': 'I connected speech synthesis to QQ. Replies use a consistent voice and can carry emotion. Short song covers use a separate vocal separation and voice conversion pipeline.',
    'feature.mouth.tech': 'Speech synthesis · consistent voice · Seed-VC',
    'feature.head.label': 'THOUGHT',
    'feature.head.title': 'She doesn’t need to answer every message.',
    'feature.head.description': 'I built the wake-up and reply rules: when to join in, how to split a reply, and when to stay quiet. The model thinks; the bridge handles the rhythm of a chat.',
    'feature.head.tech': 'DSH · QQ session bridge',
    'feature.heart.label': 'PERSONALITY',
    'feature.heart.title': 'Someone you can get to know over time.',
    'feature.heart.description': 'A character card sets her habits and boundaries. Changes take effect at the next wake-up, without wiping the conversation you already had.',
    'feature.heart.tech': 'Character cards · live prompt updates',
    'feature.memory.label': 'MEMORY',
    'feature.memory.title': 'Yesterday’s little details can stay.',
    'feature.memory.description': 'Preferences and promises live in a local SQLite database. I retrieve a few relevant notes when needed, rather than sending the whole history. Group and private memories stay separate.',
    'feature.memory.tech': 'SQLite · FTS5 · retrieval when needed',
    'feature.hands.label': 'HANDS',
    'feature.hands.title': 'From wanting to do something to actually doing it.',
    'feature.hands.description': 'The bridge connects QQ messages, stickers, and tool calls. File access and available tools have limits; a prompt doesn’t give her the whole computer.',
    'feature.hands.tech': 'MCP tools · restricted workspace',
  },
  zh: {
    'language.label': '语言',
    'profile.greeting': '你好，我是',
    'profile.intro': '我给 AI Agent 装上眼睛、耳朵、双手，<br class="desktop-break">还有更多！',
    'profile.aside': '偶尔，也做些有趣的东西。',
    'profile.school': '哥伦比亚大学',
    'profile.enter': 'Yuki 在挥手。来认识她，试试泼色竞技场。',
    'profile.art': 'Yuki 从右侧探头挥手',
    'nav.label': '页面内容', 'nav.meet': '认识 Yuki',
    'lab.label': '探索 Yuki 的实现', 'lab.kicker': '不只是聊天',
    'lab.title': '认识 Yuki。',
    'lab.intro': '让一个 AI，慢慢有了自己的感官。',
    'lab.hint': '碰一碰她的眼睛、耳朵，<br>看看我给她接上了什么。',
    'parts.label': '选择身体部位',
    'part.eyes': '眼睛', 'part.ears': '耳朵', 'part.mouth': '声音', 'part.head': '思考',
    'part.heart': '性格', 'part.memory': '记忆', 'part.hands': '双手',
    'yuki.label': '可互动的 Yuki', 'yuki.art': '深蓝长发、蓝色眼睛、鲸鱼围裙的 Yuki',
    'yuki.hotspots': 'Yuki 身体上的交互区域',
    'speech.source': '看看代码 ↗', 'speech.close': '关闭部位说明',
    'motion.pause': '暂停动作', 'motion.resume': '恢复动作',
    'lab.scroll': '下面还有一点好玩的 <span>↓</span>',
    'game.kicker': 'local “splatoon-like” game',
    'game.title': '留一点你的颜色。',
    'game.intro': '一场不用等朋友上线的泼色对战。',
    'game.label': 'Splash Arena 单人试玩', 'game.poster': 'Splash Arena 的实际游戏画面',
    'game.pitch': '涂地。潜游。把整个场地变成你的颜色。',
    'game.start': '来玩一局 <span>↗</span>',
    'game.mode': '单人练习 / AI 对手 · 无需安装',
    'game.controls': '<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> 移动 <span class="divider">·</span> 鼠标瞄准 / 左键涂色 <span class="divider">·</span> <kbd>Shift</kbd> 潜游补墨',
    'game.fullscreen': '全屏玩 ↗', 'game.recording': '也可以先看一小段实机画面',
    'footer.made': 'Peiheng Li (Yuki) 制作。', 'footer.back': '回到主页 ↗',
    'feature.eyes.label': 'EYES / 眼睛', 'feature.eyes.title': '图片和视频，不再只是一个链接。',
    'feature.eyes.description': '群里发来的图片会交给视觉模型看。朋友分享 B 站卡片时，我先提取标题和字幕，让她知道大家在聊什么。',
    'feature.eyes.tech': '图片理解 · B 站字幕',
    'feature.ears.label': 'EARS / 耳朵', 'feature.ears.title': '听得懂话，也能听出一点语气。',
    'feature.ears.description': '语音先在本机用 SenseVoice 转成文字，也会识别开心、难过等语气。不需要一直开着模型，闲置一会儿就释放内存。',
    'feature.ears.tech': 'SenseVoice · 本地转写',
    'feature.mouth.label': 'VOICE / 声音', 'feature.mouth.title': '有自己的声音，不只是把字念出来。',
    'feature.mouth.description': '我把合成语音接进了 QQ。回复可以带上情绪，再用固定音色说出来；短翻唱则单独走人声分离和换声流程。',
    'feature.mouth.tech': 'TTS · 固定音色 · Seed-VC',
    'feature.head.label': 'THOUGHT / 思考', 'feature.head.title': '群里很热闹，她不用每句都接。',
    'feature.head.description': '我写了一层唤醒和回复节奏：什么时候说话、分几条发、什么时候安静。模型负责想，桥接负责让她像在参与一场聊天。',
    'feature.head.tech': 'DSH · QQ 会话桥接',
    'feature.heart.label': 'PERSONALITY / 性格', 'feature.heart.title': '同一个她，可以慢慢熟悉起来。',
    'feature.heart.description': '角色卡决定说话习惯和边界。改了性格设定后，下一次唤醒就会更新，不用把之前的聊天全清掉。',
    'feature.heart.tech': '角色卡 · 提示词热更新',
    'feature.memory.label': 'MEMORY / 记忆', 'feature.memory.title': '昨天聊过的小事，今天还记得。',
    'feature.memory.description': '约定和偏好记在本地 SQLite 里。聊天需要时才找几条相关的，不把全部历史塞给模型；不同群和私聊的记忆分开存。',
    'feature.memory.tech': 'SQLite · FTS5 · 按需检索',
    'feature.hands.label': 'HANDS / 双手', 'feature.hands.title': '把“想做什么”，变成真的做得到。',
    'feature.hands.description': 'QQ 消息、表情和工具调用由桥接接起来。能碰哪些文件、能用哪些工具都有范围；她不会因为一句提示词就拿到整台电脑。',
    'feature.hands.tech': 'MCP 工具 · 受限文件工作区',
  },
};
const key = 'peiheng-language';
const valid = value => value === 'en' || value === 'zh';
let stored;
try { stored = localStorage.getItem(key); } catch {}
const requested = new URLSearchParams(location.search).get('lang');
let locale = valid(requested) ? requested : valid(stored) ? stored : 'en';
const listeners = new Set();
export const getLocale = () => locale;
export const t = id => copy[locale][id] ?? copy.en[id] ?? id;
export function applyTranslations(root = document) {
  for (const node of root.querySelectorAll('[data-i18n]')) node.innerHTML = t(node.dataset.i18n);
  for (const [data, attribute] of [['i18nLabel', 'aria-label'], ['i18nAlt', 'alt'], ['i18nTitle', 'title']]) {
    const selector = data.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
    for (const node of root.querySelectorAll('[data-' + selector + ']')) node.setAttribute(attribute, t(node.dataset[data]));
  }
  for (const node of root.querySelectorAll('[data-language-selector]')) node.value = locale;
  for (const link of root.querySelectorAll('a[data-keep-locale]')) {
    const url = new URL(link.getAttribute('href'), location.href);
    url.searchParams.set('lang', locale); link.href = url.href;
  }
  document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
}
export function setLocale(value, persist = true) {
  if (!valid(value)) return;
  const changed = locale !== value; locale = value;
  if (persist) {
    try { localStorage.setItem(key, value); } catch {}
    const url = new URL(location.href); url.searchParams.set('lang', value);
    history.replaceState(null, '', url.href);
  }
  applyTranslations();
  if (changed) for (const listener of listeners) listener(locale);
}
export const onLocaleChange = listener => { listeners.add(listener); return () => listeners.delete(listener); };
for (const selector of document.querySelectorAll('[data-language-selector]')) selector.addEventListener('change', () => setLocale(selector.value));
addEventListener('storage', event => { if (event.key === key && valid(event.newValue)) setLocale(event.newValue, false); });
applyTranslations();
window.siteI18n = { getLocale, setLocale, t };
