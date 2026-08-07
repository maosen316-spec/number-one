<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import HomePage from './pages/HomePage.vue'
import OperatorsPage from './pages/OperatorsPage.vue'
import FeedbackPage from './pages/FeedbackPage.vue'

const path = window.location.pathname.replace(/\/+$/, '') || '/'
const current = path === '/operators' ? 'operators' : path === '/feedback' ? 'feedback' : 'home'
</script>

<template>
  <div class="site-shell"><div class="scanline" aria-hidden="true"></div><SiteHeader :current="current" /><HomePage v-if="current === 'home'" /><OperatorsPage v-else-if="current === 'operators'" /><FeedbackPage v-else /><SiteFooter /></div>
</template>
