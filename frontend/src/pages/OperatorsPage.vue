<script setup>
import { computed, ref } from 'vue'
import { operators } from '../data/operators'
const selectedName = ref(operators[0].name)
const selectedOperator = computed(() => operators.find((operator) => operator.name === selectedName.value) || operators[0])
</script>

<template>
  <main><section class="detail-section section-pad page-intro"><div class="section-heading"><div><p class="eyebrow">02 — OPERATOR SELECT</p><h1>干员选择</h1></div><label class="select-wrap"><span>SELECT FILE</span><select v-model="selectedName"><option v-for="operator in operators" :key="operator.name" :value="operator.name">{{ operator.name }} · {{ operator.role }}</option></select></label></div><div class="detail-panel" :style="{ '--accent': selectedOperator.accent }"><div class="detail-image"><img :src="selectedOperator.image" :alt="selectedOperator.name"><span>FILE // {{ selectedOperator.name }}</span></div><div class="detail-copy"><p class="eyebrow">{{ selectedOperator.faction }} / {{ selectedOperator.role }}</p><h2>{{ selectedOperator.name }}</h2><p class="quote">“{{ selectedOperator.quote }}”</p><div class="skill"><span>01</span><div><b>战术技能</b><p>{{ selectedOperator.skill }}</p></div></div><div class="skill"><span>02</span><div><b>终极技能</b><p>{{ selectedOperator.ultimate }}</p></div></div><a class="ghost-btn" href="/feedback/">向 {{ selectedOperator.name }} 反馈 <span>↗</span></a></div></div></section></main>
</template>
