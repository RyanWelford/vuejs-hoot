<template>
  <div>
    <div class="scene scene--card">
      <div
        class="card"
        :class="{ flipme: flipped }"
        @click="flipped = !flipped"
      >
        <div class="card__face front">
          OWLS
        </div>
        <div class="card__face back">
          <img class="owl" src="https://i.imgur.com/nfXbo4I.png" />
        </div>
      </div>
    </div>
    <p>Click card to flip.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardOne: "start",
      flipped: false
    };
  }
};
</script>

<style scoped>
body {
  font-family: sans-serif;
}

.scene {
  perspective: 600px;
}

.card {
  width: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card__face {
  position: absolute;
  width: 50%;
  left: 25%;
  top: 50%;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  backface-visibility: hidden;
  border-radius: 12px;
  box-shadow: #ebedf0 0 4px 12px;
}

.front {
  background: red;
}

.back {
  background: blue;
  transform: rotateY(180deg);
}

/* this style is applied when the card is clicked */
.flipme {
  transform: rotateY(180deg);
}

.owl {
    /* transform: translate(-50%, -50%); */
}
</style>