import { NextResponse } from "next/server";

const players = [
    {
        "name": "Lionel Messi",
        "age": 37,
        "club": "Inter Miami CF",
        "nationality": "Argentinian",
        "photo": "https://www.investopedia.com/thmb/ckPwC5ARwco1nOSCKVGE57se8MI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1245748917-99e3329a7b8147e8ab648806220ce153.jpg"
    },
    {
        "name": "Cristiano Ronaldo",
        "age": 39,
        "club": "Al-Nassr",
        "nationality": "Portuguese",
        "photo": "https://tmssl.akamaized.net/images/foto/galerie/cristiano-ronaldo-im-trikot-von-portugal-1718197560-139337.jpg"
    },
    {
        "name": "Neymar Jr",
        "age": 32,
        "club": "Al-Hilal",
        "nationality": "Brazilian",
        "photo": "https://dailytrust.com/wp-content/uploads/2022/12/Neymar.jpg"
    },
    {
        "name": "Kylian Mbappé",
        "age": 26,
        "club": "Paris Saint-Germain",
        "nationality": "French",
        "photo": "https://i2-prod.football.london/incoming/article25723338.ece/ALTERNATES/s1200b/0_GettyImages-1448196823.jpg"
    },
    {
        "name": "Mohamed Salah",
        "age": 33,
        "club": "Liverpool",
        "nationality": "Egyptian",
        "photo": "https://images.daznservices.com/di/library/DAZN_News/79/df/salah-20210310-getty-ftr_1xhqtl300h7iz13qpvl3cy5qqd.jpg?t=581853016&w=800&quality=100"
    },
    {
        "name": "Kevin De Bruyne",
        "age": 34,
        "club": "Manchester City",
        "nationality": "Belgian",
        "photo": "https://tmssl.akamaized.net/images/foto/galerie/de-bruyne-kevin-manchester-city-2023-2024-1705065571-126204.jpg"
    },
    {
        "name": "Robert Lewandowski",
        "age": 36,
        "club": "Barcelona",
        "nationality": "Polish",
        "photo": "https://tmssl.akamaized.net/images/foto/galerie/robert-lewandowski-fc-barcelona-2024-25-1730103967-152589.jpg"
    },
    {
        "name": "Virgil van Dijk",
        "age": 33,
        "club": "Liverpool",
        "nationality": "Dutch",
        "photo": "https://assets.goal.com/images/v3/blt470cc47eac2304fd/290224_Virgil_van_Dijk_of_Liverpool_celebrates_1920.jpg?auto=webp&format=pjpg&width=3840&quality=60"
    },
    {
        "name": "Harry Kane",
        "age": 32,
        "club": "Bayern Munich",
        "nationality": "English",
        "photo": "https://fcbayern.com/en/teams/first-team/harry-kane"
    },

    {
        "name": "Luka Modrić",
        "age": 39,
        "club": "Real Madrid",
        "nationality": "Croatian",
        "photo": "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--9f5e17ad-a7f9-477f-a49e-5944b8ccb511/ND_SUPERCOPA_RM_ATALANTA_TROFEO_MODRIC_AV33565.app.webp?preferwebp=true"
    },
    {
        "name": "Sadio Mané",
        "age": 33,
        "club": "Al-Nassr",
        "nationality": "Senegalese",
        "photo": "https://tmssl.akamaized.net/images/foto/galerie/sadio-mane-al-nassr-2023-1693997100-116046.jpg"
    },
    {
        "name": "Toni Kroos",
        "age": 34,
        "club": "Real Madrid",
        "nationality": "German",
        "photo": "https://ichef.bbci.co.uk/ace/standard/1600/cpsprodpb/71f4/live/326f1090-1765-11ef-806c-bf47bb1274cd.jpg"
    },
    {
        "name": "Karim Benzema",
        "age": 36,
        "club": "Al-Ittihad",
        "nationality": "French",
        "photo": "https://tmssl.akamaized.net/images/foto/galerie/karim-benzema-real-madrid-1678923212-103657.jpg"
    },

    {
        "name": "Antoine Griezmann",
        "age": 34,
        "club": "Atlético Madrid",
        "nationality": "French",
        "photo": "https://assets.goal.com/images/v3/blt6d3f2d1df69d8dc7/Antoine-Griezmann.jpeg"
    },
];




export const GET = async () => {
    try {
        return NextResponse.json(players);
    } catch (error) {
        return NextResponse.json({ error: "server error" });
    }
};