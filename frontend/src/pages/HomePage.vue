<script setup>
import { operators } from '../data/operators'
</script>

<template>
  <main>
    <section class="hero-section"><div class="hero-copy reveal"><div class="delta-logo" aria-label="三角洲行动 Delta Force"><svg viewBox="0 0 100 82" role="img" aria-hidden="true"><path d="M50 2 98 80H2L50 2Z" fill="none" stroke="currentColor" stroke-width="3"/><path d="m50 19 28 48H22l28-48Z" fill="currentColor" opacity=".18"/><path d="m50 25 22 38H28l22-38Z" fill="currentColor"/><path d="M50 38 61 57H39L50 38Z" fill="#071016"/></svg><span><b>三角洲行动</b><small>DELTA FORCE</small></span></div><p class="eyebrow">TACTICAL OPERATIONS // OPERATOR DATABASE</p><h1>选择你的<br><em>战术答案</em></h1><p class="hero-text">深入了解三角洲行动干员档案。每一位干员，都是一套独特的战场解法。</p><a class="primary-btn" href="/operators/">浏览干员 <span>↗</span></a></div><div class="hero-visual" aria-hidden="true"><div class="orbit orbit-a"></div><div class="orbit orbit-b"></div><div class="radar"><span></span><span></span><span></span></div><div class="hero-card"><span>OPERATOR / 00</span><strong>DELTA</strong><small>SECURE THE FUTURE</small></div></div></section>
    <section class="section-pad"><div class="section-heading"><div><p class="eyebrow">01 — ALL OPERATORS</p><h2>干员档案</h2></div><p>6 OPERATORS / READY FOR DEPLOYMENT</p></div><div class="operator-grid"><a v-for="(operator, index) in operators" :key="operator.name" class="operator-card" :style="{ '--accent': operator.accent, '--delay': `${index * 80}ms` }" href="/operators/"><div class="portrait-wrap"><img :src="operator.image" :alt="`${operator.name} 干员画像`"><span class="card-index">0{{ index + 1 }}</span><span class="view-label">VIEW FILE ↗</span></div><div class="card-meta"><div><h3>{{ operator.name }}</h3><p>{{ operator.role }} · {{ operator.faction }}</p></div><span class="dot"></span></div></a></div></section>
  </main>
</template>
