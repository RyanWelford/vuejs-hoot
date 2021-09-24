const { getCollection } = require("./utils/astraClient");

exports.handler = async function () {
    const cardCollection = await getCollection();
    const cards = [
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
    ];

    try {
        cards.forEach((card) => {
            await cardCollection.create(card);
        });

        return {
            statusCode: 200,
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