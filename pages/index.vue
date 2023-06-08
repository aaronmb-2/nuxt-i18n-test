<template>
  <h1>{{ $t("hello-world") }}</h1>

  <NuxtLink :to="localePath({ name: 'delivery' })">{{ localePath({ name: 'delivery' }) }}</NuxtLink>

  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="nl">nl</option>
        <option value="fr">fr</option>
      </select>
      <p>{{ $t('welcome') }}</p>
    </form>
  </div>

  <div>
    <NuxtLink :to="localePath('index')">{{ $t('home') }}</NuxtLink>
    <NuxtLink :to="localePath('/')">{{ $t('home') }}</NuxtLink>
  <br/>
    <NuxtLink :to="localePath('delivery')">{{ $t("delivery") }}</NuxtLink>
    <NuxtLink :to="localePath('index', 'en')">Homepage in English</NuxtLink>
  </div>

  <div class="flex gap-3">
    <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
    <NuxtLink :to="switchLocalePath('nl')">Nederlands</NuxtLink>
    <NuxtLink :to="switchLocalePath('fr')">Français</NuxtLink>
  </div>

  <button @click="onClick">Show profile</button>
</template>


<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const localeRoute = useLocaleRoute()

function onClick() {
  const route = localeRoute({ name: 'user-profile', query: { foo: '1' } })
  if (route) {
    return navigateTo(route.fullPath)
  }
}
</script>


