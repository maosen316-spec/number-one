export const makePortrait = (name, colors) => {
  const [start, end] = colors
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${start}"/><stop offset="1" stop-color="${end}"/></linearGradient><filter id="glow"><feGaussianBlur stdDeviation="10" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><rect width="480" height="600" rx="30" fill="url(#g)"/><path d="M0 480 180 270 300 360 480 170V600H0Z" fill="#07101b" opacity=".68"/><circle cx="240" cy="218" r="88" fill="#d4a985"/><path d="M150 205q20-120 90-120t90 120l-20 30H170Z" fill="#101c27"/><path d="M128 500q22-128 112-128t112 128" fill="#101c27"/><path d="M150 442q90-42 180 0l40 158H110Z" fill="#162b39"/><path d="M188 250h104" stroke="#f5c04b" stroke-width="10" stroke-linecap="round" opacity=".9" filter="url(#glow)"/><text x="32" y="550" fill="#fff" font-family="Arial" font-size="34" font-weight="700" letter-spacing="5">${name.toUpperCase()}</text></svg>`
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

export const operators = [
  { name: '红狼', role: '突击手', faction: '烽火地带', accent: '#ff5e4f', colors: ['#7b1d2a', '#20101f'], skill: '战术滑铲：向前快速滑行并短暂提升移速，适合突破火力线。', ultimate: '赤焰冲锋：锁定目标区域，连续投掷燃烧弹，制造持续压制。', quote: '速度，就是最锋利的刀。' },
  { name: '蜂医', role: '支援', faction: '全球行动', accent: '#ffc857', colors: ['#95721b', '#142a36'], skill: '蜂群无人机：释放无人机治疗附近队友，并驱散负面效果。', ultimate: '紧急救援：瞬间为范围内倒地队友提供一次快速起身。', quote: '保持呼吸，我会把你带回去。' },
  { name: '牧羊人', role: '工程兵', faction: '阿萨拉', accent: '#67d5be', colors: ['#1a655f', '#0c1c2e'], skill: '声波陷阱：布置隐形传感器，触发后干扰敌方 HUD。', ultimate: '铁幕：部署可移动防爆盾，形成临时掩体。', quote: '先找到掩体，再谈胜负。' },
  { name: '威龙', role: '侦察兵', faction: '全球行动', accent: '#65a8ff', colors: ['#154f86', '#101b3c'], skill: '动力护甲：短时间提升防御力并减少爆炸伤害。', ultimate: '猎鹰扫描：标记大范围敌人，穿透烟雾显示轮廓。', quote: '战场没有盲区。' },
  { name: '露娜', role: '狙击手', faction: '烽火地带', accent: '#b58cff', colors: ['#4e2b82', '#13162e'], skill: '追踪箭矢：射出可回收箭矢，暴露命中目标及其队友。', ultimate: '寂静领域：制造无声区域，降低脚步与枪声传播。', quote: '安静，听见风就够了。' },
  { name: '骇爪', role: '黑客', faction: '暗影特勤', accent: '#ff7db7', colors: ['#8b255e', '#211329'], skill: '入侵协议：短暂锁定敌方设备，令其无法使用战术装备。', ultimate: '幽灵网络：建立干扰场，令敌方小地图失效。', quote: '你的系统，已经是我的地图。' },
].map((operator) => ({ ...operator, image: makePortrait(operator.name, operator.colors) }))
