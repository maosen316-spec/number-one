<script setup>
const props = defineProps({ current: { type: String, required: true } })
const links = [
  { key: 'home', label: '首页', path: '/' },
  { key: 'operators', label: '干员选择', path: '/operators/' },
  { key: 'feedback', label: '反馈', path: '/feedback/' },
]
</script>

<template>
  <header class="topbar">
    <a class="brand" href="/">
      <span class="brand-mark">Δ</span>
      <span><b>DELTA</b><small>FORCE / FIELD GUIDE</small></span>
    </a>
    <nav class="nav-tabs" aria-label="主导航">
      <a v-for="(link, index) in links" :key="link.key" :href="link.path" :class="{ active: props.current === link.key }">{{ link.label }} <span>0{{ index + 1 }}</span></a>
    </nav>
    <div class="status"><i></i> LIVE / 2026</div>
  </header>
</template>
