import { NextResponse } from "next/server";

const players = [
    {
        "name": "Lionel Messi",
        "age": 37,
        "club": "Inter Miami CF",
        "nationality": "Argentinian",
        "photo": "https://www.mlssoccer.com/clubs/inter-miami-cf/roster/lionel-messi"
    },
    {
        "name": "Cristiano Ronaldo",
        "age": 39,
        "club": "Al-Nassr",
        "nationality": "Portuguese",
        "photo": "https://www.alnassr.sa/en/team/first-team/players/cristiano-ronaldo"
    },
    {
        "name": "Neymar Jr",
        "age": 32,
        "club": "Al-Hilal",
        "nationality": "Brazilian",
        "photo": "https://www.alhilal.com/first-team/players/neymar-jr"
    },
    {
        "name": "Kylian Mbappé",
        "age": 26,
        "club": "Paris Saint-Germain",
        "nationality": "French",
        "photo": "https://www.psg.fr/equipes/equipe-premiere/effectif/kylian-mbappe"
    },
    {
        "name": "Mohamed Salah",
        "age": 33,
        "club": "Liverpool",
        "nationality": "Egyptian",
        "photo": "https://www.liverpoolfc.com/team/first-team/player/mohamed-salah"
    },
    {
        "name": "Kevin De Bruyne",
        "age": 34,
        "club": "Manchester City",
        "nationality": "Belgian",
        "photo": "https://www.mancity.com/players/first-team/kevin-de-bruyne"
    },
    {
        "name": "Robert Lewandowski",
        "age": 36,
        "club": "Barcelona",
        "nationality": "Polish",
        "photo": "https://www.fcbarcelona.com/en/football/first-team/players/26303/robert-lewandowski"
    },
    {
        "name": "Virgil van Dijk",
        "age": 33,
        "club": "Liverpool",
        "nationality": "Dutch",
        "photo": "https://www.liverpoolfc.com/team/first-team/player/virgil-van-dijk"
    },
    {
        "name": "Harry Kane",
        "age": 32,
        "club": "Bayern Munich",
        "nationality": "English",
        "photo": "https://fcbayern.com/en/teams/first-team/harry-kane"
    },
    {
        "name": "Erling Haaland",
        "age": 25,
        "club": "Manchester City",
        "nationality": "Norwegian",
        "photo": "https://www.mancity.com/players/first-team/erling-haaland"
    },
    {
        "name": "Luka Modrić",
        "age": 39,
        "club": "Real Madrid",
        "nationality": "Croatian",
        "photo": "https://www.realmadrid.com/en/football/squad/luka-modric"
    },
    {
        "name": "Sadio Mané",
        "age": 33,
        "club": "Al-Nassr",
        "nationality": "Senegalese",
        "photo": "https://www.alnassr.sa/en/team/first-team/players/sadio-mane"
    },
    {
        "name": "Toni Kroos",
        "age": 34,
        "club": "Real Madrid",
        "nationality": "German",
        "photo": "https://www.realmadrid.com/en/football/squad/toni-kroos"
    },
    {
        "name": "Karim Benzema",
        "age": 36,
        "club": "Al-Ittihad",
        "nationality": "French",
        "photo": "https://www.alittihad.ae/en/team/players/karim-benzema"
    },
    {
        "name": "Paul Pogba",
        "age": 32,
        "club": "Juventus",
        "nationality": "French",
        "photo": "https://www.juventus.com/en/players/first-team/paul-pogba"
    },
    {
        "name": "Romelu Lukaku",
        "age": 31,
        "club": "AS Roma",
        "nationality": "Belgian",
        "photo": "https://www.asroma.com/en/team/players/romelu-lukaku"
    },
    {
        "name": "Antoine Griezmann",
        "age": 34,
        "club": "Atlético Madrid",
        "nationality": "French",
        "photo": "https://en.atleticodemadrid.com/jugadores/antoine-griezmann-2022-2023"
    },
    {
        "name": "Joshua Kimmich",
        "age": 29,
        "club": "Bayern Munich",
        "nationality": "German",
        "photo": "https://fcbayern.com/en/teams/first-team/joshua-kimmich"
    },
    {
        "name": "Sergio Ramos",
        "age": 38,
        "club": "Sevilla FC",
        "nationality": "Spanish",
        "photo": "https://www.sevillafc.es/en/teams/first-team/sergio-ramos"
    },
    {
        "name": "Jadon Sancho",
        "age": 24,
        "club": "Manchester United",
        "nationality": "English",
        "photo": "https://www.manutd.com/en/players-and-staff/detail/jadon-sancho"
    }
];




export const GET = async () => {
    try {
        return NextResponse.json(players);
    } catch (error) {
        return NextResponse.json({ error: "server error" });
    }
};