Card.vue

Template
``` html
<div class="card" :class="rarity">
    <img class="owl" :src="imgURL" />
</div>
```

Script
``` javascript
import Vue from 'vue';

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
```

Style
``` css
.card {
    width: 100%;
    border-radius: 12px;
    position: relative;
    padding-top: 140%
}

.card.ultra-rare {
    background: #f1ba24;
    box-shadow: 0px 0px 20px #f1ba24;
}
.card.rare {
    background: #72286d;
    box-shadow: 0px 0px 20px #72286d;
}
.card.uncommon {
    background: #b12659;
}
.card.common {
    background: #7f949b; /*84d4d4*/
}

.owl {
    width: 50%;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
}
```