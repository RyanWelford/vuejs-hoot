<template>
  <div class="container">
    <div>
      <img class="logo" src="https://i.imgur.com/CIV2Yhq.png" />

      <div class="card-grid">
        <div v-for="card in cards" class="card-flip" :key="card">
          <CardFlip :card="card" />
        </div>
      </div>

      <van-button type="primary">
        OPEN ANOTHER PACK
      </van-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      cards: [
        {
          rarity: 'rare',
          imgURL: 'https://i.imgur.com/8P24q8A.png',
        },
        {
          rarity: 'uncommon',
          imgURL: 'https://i.imgur.com/Ppl525s.png',
        },
        {
          rarity: 'common',
          imgURL: 'https://i.imgur.com/lFmgnFj.png',
        },
        {
          rarity: 'common',
          imgURL: 'https://i.imgur.com/8P24q8A.png',
        },
        {
          rarity: 'common',
          imgURL: 'https://i.imgur.com/8P24q8A.png',
        },
      ]
    }
  }
})
</script>

<style>
.logo {
  height: 100px;
}

.card-grid {
  display: flex;
  justify-content: center;
  background: #22282e;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
  margin-bottom: 5%;
}

.card-flip {
  margin: 10px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background:#22282e;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
