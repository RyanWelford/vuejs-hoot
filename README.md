HootCard.vue

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


owls documents
``` json
[
    {
        "rarityOrder": 1,
        "rarity": "uncommon",
        "imgURL": "https://i.imgur.com/RzpbCJg.png"
    },
    {
        "rarityOrder": 0,
        "rarity": "common",
        "imgURL": "https://i.imgur.com/qKiV3dI.png"
    },
    {
        "rarityOrder": 0,
        "rarity": "common",
        "imgURL": "https://i.imgur.com/b2YWkJq.png"
    },
    {
        "rarityOrder": 0,
        "rarity": "common",
        "imgURL": "https://i.imgur.com/aNPifqg.png"
    },
    {
        "rarityOrder": 0,
        "rarity": "common",
        "imgURL": "https://i.imgur.com/lFmgnFj.png"
    },
    {
        "rarityOrder": 1,
        "rarity": "uncommon",
        "imgURL": "https://i.imgur.com/Xl5borx.png"
    },
    {
        "rarityOrder": 0,
        "rarity": "common",
        "imgURL": "https://i.imgur.com/Ppl525s.png"
    },
    {
        "rarityOrder": 0,
        "rarity": "common",
        "imgURL": "https://i.imgur.com/t9fnfaY.png"
    },
    {
        "rarityOrder": 2,
        "rarity": "rare",
        "imgURL": "https://i.imgur.com/UVrQwu4.png"
    },
    {
        "rarityOrder": 2,
        "rarity": "rare",
        "imgURL": "https://i.imgur.com/nfXbo4I.png"
    },
    {
        "rarityOrder": 1,
        "rarity": "uncommon",
        "imgURL": "https://i.imgur.com/8P24q8A.png"
    },
    {
        "rarityOrder": 3,
        "rarity": "ultra-rare",
        "imgURL": "https://i.imgur.com/CIV2Yhq.png"
    }
]
```

getCards.js
``` javascript
const { getCollection } = require("./utils/astraClient");
const { packBuilder } = require("./utils/packBuilder");

exports.handler = async function () {
    const collection = await getCollection();

    try {
        const res = await collection.find({});
        let pack = packBuilder(Object.keys(res).map((key) => res[key]));
        
        return {
            statusCode: 200,
            body: JSON.stringify(pack),
            headers: {
                'Content-type': 'application/json',
            },
        };
    } catch (e) {
        console.error(e);
        return {
            statusCode: 500,
            body: JSON.stringify(e),
        };
    }
};
```

index.vue - update
``` javascript
<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';
import axios from 'axios';


export default Vue.extend({
  data() {
    return {
      cards: [],
    }
  },
  async fetch() {
    this.cards = await axios.get('/.netlify/functions/getCards').then(res => res.data);
  },
  methods: {
    reloadPage() {
      window.location.reload();
    }
  }
})
</script>
```