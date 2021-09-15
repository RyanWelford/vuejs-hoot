<template>
    <div class="card" :class="rarity">
        <img class="owl" :src="imgURL" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        card: {
            type: Object,
            default () {
                return {
                    rarity: 'none',
                    igmURL: ''
                }
            }
        }
    },
    data() {
        return {
            rarity: this.card.rarity,
            imgURL: this.card.imgURL
        }
    }
})
</script>

<style scoped>
.card {
    width: 100%;
    border-radius: 12px;
    /* box-shadow: #0f0f0f 0 4px 12px; */
    position: relative;
    padding-top: 140%
}

.card.rare {
    background: #f1ba24;
}
.card.uncommon {
    background: #b12659;
}
.card.common {
    background: #72286d;
}

.owl {
    width: 50%;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
}
</style>


