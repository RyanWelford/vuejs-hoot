<!--- STARTEXCLUDE --->
# Build an App with VueJS and Typescript 📒
*15 minutes, Beginner*

This is an example VueJS application using a [DataStax Astra](https://astra.new/astra-10-20) free tier database.
<!--- ENDEXCLUDE --->


## 🎯 Objectives
* Learn the basics of building Vue Components and composing a **VueJS** app
* Learn how to implement **serverless functions** and connect the front-end to the back-end
* Learn how to connect a live **NoSQL** database using a **Document API**
* Leverage **Netlify** and **DataStax Astra DB**

## ℹ️ Frequently asked questions ℹ️ 

- *Can I run the workshop on my computer?*

> There is nothing preventing you from running the workshop on your own machine.
> If you do so, you will need
> * git installed on your local system
> * [node 15 and npm 7 or later](https://www.whitesourcesoftware.com/free-developer-tools/blog/update-node-js/)
>
> You will have to adapt commands and paths based on your environment and install the dependencies by yourself. **We won't provide support** to keep on track with schedule. However, we will do our best to give you the info you need to be successful.

- *What other prerequisites are there?*
> * You will need a github account
> * You will also need an Astra DB account, but we'll work through that in the exercises
> * Use **Chrome** or **Firefox** for the best experience. Other browsers are great, but don't work well with the GitPod integration we use a bit later.

- *Do I need to pay for anything for this workshop?*
> * **No.** All tools and services we provide here are FREE.

- *Will I get a certificate if I attend this workshop?*

> Attending the session is not enough. You need to complete the homework detailed below and you will get a nice badge.

## Materials for the Session

It doesn't matter if you join our workshop live or you prefer to do at your own pace, we have you covered. In this repository, you'll find everything you need for this workshop:

- [Slide deck](./slides.pdf)
- [Discord chat](https://dtsx.io/workshop)
- [Questions and Answers](https://community.datastax.com/)

## Homework

``` diff
- Edit Homework section
```

<img src="https://user-images.githubusercontent.com/23346205/124651231-a7e99400-de68-11eb-9f3f-ab6b88da0cdf.png?raw=true" width="200" align="right" />

Don't forget to complete your upgrade and get your verified skill badge! Finish and submit your homework!

1. Complete the practice steps from this repository as described below.
2. Create a **React** app from scratch using NPX. Follow [these](https://github.com/datastaxdevs/react-basics) instructions. **Take a screenshot of your final working app**.
3. Launch the TODO starter app, connect it to the database, and display your changes from the database. **Take a screenshot of your TODO app with your unique entries**.
4. Submit your homework [here](https://github.com/datastaxdevs/appdev-week1-todolist/issues/new?assignees=HadesArchitect%2C+SonicDMG%2C+RyanWelford&labels=homework%2C+wait+for+review&template=homework-assignment.md&title=%5BHW%5D+%3CNAME%3E). Note:
_never share your Astra DB tokens!_

That's it, you are done! Expect an email next week!
  
# Let's start

## Table of contents

1. [Login or Register to AstraDB and create database](#1-login-or-register-to-astradb-and-create-database)
2. [Create a security token](#2-create-a-security-token)
3. [Launch GitPod IDE](#3-launch-gitpod-ide)
4. [Create a Vue Component](#4-create-a-vue-component)
5. [Create a Serverless Function](#5-create-a-serverless-function)
6. [Calling Serverless Functions from the Front-End](#6-calling-serverless-functions-from-the-front-end)
7. [Launching the App](#7-launching-the-app)


### Demo
- [App Demo](www.hootcards.io)

## 1. Login or Register to AstraDB and create database
**`ASTRADB`** is the simplest way to run Cassandra with zero operations at all - just push the button and get your cluster. No credit card required, $25.00 USD credit every month, roughly 5M writes, 30M reads, 40GB storage monthly - sufficient to run small production workloads.  

### ✅ Step 1a: Click the button to login or register with Datastax. You can use your `Github`, `Google` accounts or register with an `email`.

_Make sure to chose a password with minimum 8 characters, containing upper and lowercase letters, at least one number and special character_

<a href="https://dtsx.io/appdev-7-7"><img src="https://github.com/datastaxdevs/workshop-graphql-netflix/blob/main/img/create_astra_db.png?raw=true" /></a>
- <details><summary>Show me!</summary>
    <img src="https://github.com/datastaxdevs/workshop-spring-stargate/raw/main/images/tutorials/astra-create-db.gif?raw=true" />
</details>

**Use the following values when creating the database**
|Field| Value|
|---|---|
|**database name**| `vue_workshop_db` |
|**keypace**| `vue_keyspace` |
|**Cloud Provider**| *Use the one you like, click a cloud provider logo,  pick an Area in the list and finally pick a region.* |

_You can technically use whatever you want and update the code to reflect the keyspace. This is really to get you on a happy path for the first run._

You will see your new database `pending` in the Dashboard.

![image](https://github.com/datastaxdevs/workshop-graphql-netflix/blob/main/tutorial/images/db-pending.png?raw=true)

The status will change to `Active` when the database is ready, this will only take 2-3 minutes. You will also receive an email when it is ready.

[🏠 Back to Table of Contents](#table-of-contents)

## 2. Create a security token

✅  **Step 2a:**  [Create a token for your app](https://docs.datastax.com/en/astra/docs/manage-application-tokens.html) to use in the settings screen. Use "Database Administrator" permission.

✅  **Step 2b:**  Copy the token value (eg `AstraCS:KDfdKeNREyWQvDpDrBqwBsUB:ec80667c....`) in your clipboard and save the CSV, this value would not be provided afterward.

**👁️ Expected output**
- <details><summary>Show me!</summary>
    <img src="https://github.com/datastaxdevs/workshop-graphql-netflix/blob/main/tutorial/images/astra-create-token.gif?raw=true" />
</details>

[🏠 Back to Table of Contents](#table-of-contents)

## 3. Launch GitPod IDE
- Click the button to launch the GitPod IDE.

``` diff
- ----**FIX LINK**----
```

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/datastaxdevs/<THIS_WORKSHOP>/

[🏠 Back to Table of Contents](#table-of-contents)

## 4. Create a Vue Component
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

## 5. Create a Serverless Function
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


## 6. Calling Serverless Functions from the Front-End
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


## 7. Launching the App
``` bash
netlify dev
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



