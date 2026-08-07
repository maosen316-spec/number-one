<script setup>
import { ref } from 'vue'
import { operators } from '../data/operators'

const form = ref({ name: '', qq: '', phone: '', wechat: '', favorite: operators[0].name })
const submitted = ref(false)
const submitting = ref(false)
const errorMessage = ref('')

const submitFeedback = async () => {
  submitted.value = false
  errorMessage.value = ''
  submitting.value = true
  try {
    const response = await fetch('/api/contacts/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ qq: form.value.qq, wechat: form.value.wechat, phone: form.value.phone, favorite_operator: form.value.favorite }),
    })
    const result = await response.json()
    if (!response.ok) throw new Error(result.detail || '提交失败，请稍后重试。')
    submitted.value = true
  } catch (error) {
    errorMessage.value = error.message || '网络连接失败，请稍后重试。'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <main><section class="feedback-section section-pad page-intro"><div class="section-heading"><div><p class="eyebrow">03 — SIGNAL RECEIVED</p><h1>反馈</h1></div><p>HELP US BUILD THE NEXT MISSION</p></div><form class="feedback-form" @submit.prevent="submitFeedback"><label>姓名 / CALLSIGN<input v-model="form.name" required placeholder="输入你的称呼"></label><label>QQ<input v-model="form.qq" required placeholder="输入 QQ 号码"></label><label>电话<input v-model="form.phone" required placeholder="输入联系电话"></label><label>微信<input v-model="form.wechat" placeholder="输入微信号（选填）"></label><label class="full">最喜欢的干员<select v-model="form.favorite"><option v-for="operator in operators" :key="operator.name">{{ operator.name }}</option></select></label><button class="primary-btn submit-btn" type="submit" :disabled="submitting">{{ submitting ? '正在提交…' : '提交信息' }} <span>↗</span></button><p v-if="submitted" class="success">✓ 信息已保存，感谢你的反馈。</p><p v-if="errorMessage" class="error-message">{{ errorMessage }}</p></form></section></main>
</template>
