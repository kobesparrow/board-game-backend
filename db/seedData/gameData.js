
const boardGames = [
  {
    "name": "7 Wonders",
    "minPlayers": 2,
    "maxPlayers": 7,
    "weight": "medium",
    "timeToPlay": 30,
    "type": "strategy",
    "features": [
      "card drafting",
      "hand management"
    ],
    "image": "https://i.imgur.com/lkrz4I3.jpg",
    "gameId": 1
  },
  {
    "name": "Agricola",
    "minPlayers": 1,
    "maxPlayers": 5,
    "weight": "heavy",
    "timeToPlay": 120,
    "type": "strategy",
    "features": [
      "economic",
      "worker placement"
    ],
    "image": "https://i.imgur.com/WWkmwwr.jpg",
    "gameId": 2
  },
  {
    "name": "BANG!",
    "minPlayers": 4,
    "maxPlayers": 7,
    "weight": "light",
    "timeToPlay": 30,
    "type": "party",
    "features": [
      "bluffing",
      "card game",
      "hand management"
    ],
    "image": "https://i.imgur.com/HqnAIxh.jpg",
    "gameId": 3
  },
  {
    "name": "Betrayal at House on the Hill",
    "minPlayers": 3,
    "maxPlayers": 6,
    "weight": "medium",
    "timeToPlay": 60,
    "type": "thematic",
    "features": [
      "adventure",
      "hidden traitor",
      "dice rolling",
      "cooperative"
    ],
    "image": "https://i.imgur.com/t12PXuZ.jpg",
    "gameId": 4
  },
  {
    "name": "Boss Monster",
    "minPlayers": 2,
    "maxPlayers": 4,
    "weight": "medium",
    "timeToPlay": 20,
    "type": "strategy",
    "features": [
      "auction",
      "family"
    ],
    "image": "https://i.imgur.com/pbutakO.jpg",
    "gameId": 5
  },
  {
    "name": "Camel Up",
    "minPlayers": 2,
    "maxPlayers": 8,
    "weight": "medium",
    "timeToPlay": 30,
    "type": "party",
    "features": [
      "dice rolling",
      "family",
      "wagering"
    ],
    "image": "https://i.imgur.com/93iAMYa.jpg",
    "gameId": 6
  },
  {
    "name": "Carcassonne",
    "minPlayers": 2,
    "maxPlayers": 5,
    "weight": "medium",
    "timeToPlay": 45,
    "type": "strategy",
    "features": [
      "city building",
      "family"
    ],
    "image": "https://i.imgur.com/z2yn7Zk.jpg",
    "gameId": 7
  },
  {
    "name": "Catan",
    "minPlayers": 3,
    "maxPlayers": 6,
    "weight": "medium",
    "timeToPlay": 100,
    "type": "strategy",
    "features": [
      "trading",
      "dice rolling",
      "family"
    ],
    "image": "https://i.imgur.com/X88PcfC.jpg",
    "gameId": 8
  },
  {
    "name": "Codenames",
    "minPlayers": 2,
    "maxPlayers": 8,
    "weight": "light",
    "timeToPlay": 15,
    "type": "party",
    "features": [
      "card game",
      "deduction",
      "memory"
    ],
    "image": "https://i.imgur.com/GjIgusi.jpg",
    "gameId": 9
  },
  {
    "name": "Coup",
    "minPlayers": 2,
    "maxPlayers": 6,
    "weight": "medium",
    "timeToPlay": 15,
    "type": "party",
    "features": [
      "bluffing",
      "card game",
      "memory"
    ],
    "image": "https://i.imgur.com/3QBG5r1.jpg",
    "gameId": 10
  },
  {
    "name": "Dark Moon",
    "minPlayers": 3,
    "maxPlayers": 7,
    "weight": "medium",
    "timeToPlay": 75,
    "type": "thematic",
    "features": [
      "bluffing",
      "dice rolling",
      "hidden traitor"
    ],
    "image": "https://i.imgur.com/jZ0nBWW.jpg",
    "gameId": 11
  },
  {
    "name": "Dinosaur Island",
    "minPlayers": 1,
    "maxPlayers": 4,
    "weight": "heavy",
    "timeToPlay": 120,
    "type": "strategy",
    "features": [
      "worker placement",
      "science fiction",
      "dice rolling"
    ],
    "image": "https://i.imgur.com/528BkXG.jpg",
    "gameId": 12
  },
  {
    "name": "Enchanted Forest",
    "minPlayers": 2,
    "maxPlayers": 6,
    "weight": "light",
    "timeToPlay": 60,
    "type": "children's",
    "features": [
      "adventure",
      "card game",
      "memory"
    ],
    "image": "https://i.imgur.com/UZbJtfX.jpg",
    "gameId": 13
  },
  {
    "name": "Five Tribes",
    "minPlayers": 2,
    "maxPlayers": 4,
    "weight": "medium",
    "timeToPlay": 80,
    "type": "strategy",
    "features": [
      "area control",
      "auction"
    ],
    "image": "https://i.imgur.com/LK1PBOH.jpg",
    "gameId": 14
  },
  {
    "name": "Forbidden Island",
    "minPlayers": 1,
    "maxPlayers": 4,
    "weight": "light",
    "timeToPlay": 120,
    "type": "family",
    "features": [
      "cooperative",
      "adventure",
      "modular board"
    ],
    "image": "https://i.imgur.com/tC9mVfa.jpg",
    "gameId": 15
  },
  {
    "name": "Great Western Trail",
    "minPlayers": 2,
    "maxPlayers": 4,
    "weight": "heavy",
    "timeToPlay": 150,
    "type": "strategy",
    "features": [
      "set collection",
      "deck building"
    ],
    "image": "https://i.imgur.com/2VUqHE3.jpg",
    "gameId": 16
  },
  {
    "name": "Galaxy Trucker",
    "minPlayers": 2,
    "maxPlayers": 4,
    "weight": "heavy",
    "timeToPlay": 60,
    "type": "thematic",
    "features": [
      "dice rolling",
      "tile placement"
    ],
    "image": "https://i.imgur.com/fKT57qx.jpg",
    "gameId": 17
  },
  {
    "name": "Good Dog, Bad Zombie",
    "minPlayers": 2,
    "maxPlayers": 4,
    "weight": "medium",
    "timeToPlay": 90,
    "type": "strategy",
    "features": [
      "cooperative",
      "hand management",
      "area movement"
    ],
    "image": "https://i.imgur.com/z5ZaZOb.jpg",
    "gameId": 18
  },
  {
    "name": "Hive",
    "minPlayers": 2,
    "maxPlayers": 2,
    "weight": "medium",
    "timeToPlay": 20,
    "type": "abstract",
    "features": [
      "grid movement",
      "tile placement"
    ],
    "image": "https://i.imgur.com/VaZN5l8.jpg",
    "gameId": 19
  },
  {
    "name": "Istanbul",
    "minPlayers": 2,
    "maxPlayers": 5,
    "weight": "medium",
    "timeToPlay": 60,
    "type": "strategy",
    "features": [
      "modular board",
      "grid movement",
      "pick-up and deliver"
    ],
    "image": "https://i.imgur.com/rXzdNjt.jpg",
    "gameId": 20
  },
  {
    "name": "Jaipur",
    "minPlayers": 2,
    "maxPlayers": 2,
    "weight": "light",
    "timeToPlay": 30,
    "type": "family",
    "features": [
      "card drafting",
      "set collection"
    ],
    "image": "https://i.imgur.com/Y1lMCOX.jpg",
    "gameId": 21
  },
  {
    "name": "Lanterns: The Harvest Festival",
    "minPlayers": 2,
    "maxPlayers": 4,
    "weight": "light",
    "timeToPlay": 30,
    "type": "family",
    "features": [
      "tile placement",
      "hand management"
    ],
    "image": "https://i.imgur.com/6nnQGYo.jpg",
    "gameId": 22
  },
  {
    "name": "Lords of Waterdeep",
    "minPlayers": 2,
    "maxPlayers": 5,
    "weight": "medium",
    "timeToPlay": 120,
    "type": "strategy",
    "features": [
      "set collection",
      "card drafting",
      "worker placement"
    ],
    "image": "https://i.imgur.com/dWWepJF.jpg",
    "gameId": 23
  },
  {
    "name": "Machi Koro",
    "minPlayers": 2,
    "maxPlayers": 4,
    "weight": "light",
    "timeToPlay": 30,
    "type": "family",
    "features": [
      "card drafting",
      "dice rolling"
    ],
    "image": "https://i.imgur.com/395NatC.jpg",
    "gameId": 24
  },
  {
    "name": "Mouse Trap",
    "minPlayers": 2,
    "maxPlayers": 4,
    "weight": "light",
    "timeToPlay": 30,
    "type": "children's",
    "features": [
      "roll / spin and move"
    ],
    "image": "https://i.imgur.com/f3IneLM.jpg",
    "gameId": 25
  },
  {
    "name": "New York 1901",
    "minPlayers": 2,
    "maxPlayers": 4,
    "weight": "light",
    "timeToPlay": 60,
    "type": "family",
    "features": [
      "area control",
      "tile placement",
      "card drafting"
    ],
    "image": "https://i.imgur.com/IbkG4sC.jpg",
    "gameId": 26
  },
  {
    "name": "Niagara",
    "minPlayers": 3,
    "maxPlayers": 5,
    "weight": "light",
    "timeToPlay": 45,
    "type": "family",
    "features": [
      "hand management",
      "pick-up and deliver"
    ],
    "image": "https://i.imgur.com/9rk1YRW.jpg",
    "gameId": 27
  },
  {
    "name": "Paperback",
    "minPlayers": 2,
    "maxPlayers": 5,
    "weight": "medium",
    "timeToPlay": 45,
    "type": "strategy",
    "features": [
      "cooperative",
      "card drafting"
    ],
    "image": "https://i.imgur.com/sf2mYGJ.jpg",
    "gameId": 28
  },
  {
    "name": "Patchwork",
    "minPlayers": 2,
    "maxPlayers": 2,
    "weight": "light",
    "timeToPlay": 30,
    "type": "family",
    "features": [
      "card drafting",
      "tile placement"
    ],
    "image": "https://i.imgur.com/7OtnVf1.jpg",
    "gameId": 29
  },
  {
    "name": "Pina Pirata",
    "minPlayers": 2,
    "maxPlayers": 6,
    "weight": "light",
    "timeToPlay": 30,
    "type": "family",
    "features": [
      "hand management"
    ],
    "image": "https://i.imgur.com/uhpyVRi.jpg",
    "gameId": 30
  },
  {
    "name": "Scythe",
    "minPlayers": 1,
    "maxPlayers": 5,
    "weight": "heavy",
    "timeToPlay": 115,
    "type": "strategy",
    "features": [
      "area control",
      "grid movement"
    ],
    "image": "https://i.imgur.com/GsRqPxz.jpg",
    "gameId": 31
  },
  {
    "name": "Race For the Galaxy",
    "minPlayers": 2,
    "maxPlayers": 4,
    "weight": "heavy",
    "timeToPlay": 60,
    "type": "strategy",
    "features": [
      "card game",
      "hand management"
    ],
    "image": "https://i.imgur.com/YiBIgWM.jpg",
    "gameId": 32
  },
  {
    "name": "Sagrada",
    "minPlayers": 1,
    "maxPlayers": 4,
    "weight": "medium",
    "timeToPlay": 45,
    "type": "abstract",
    "features": [
      "card drafting",
      "dice rolling"
    ],
    "image": "https://i.imgur.com/0dAj8Jy.jpg",
    "gameId": 33
  },
  {
    "name": "Sheriff of Nottingham",
    "minPlayers": 3,
    "maxPlayers": 5,
    "weight": "medium",
    "timeToPlay": 60,
    "type": "party",
    "features": [
      "card drafting",
      "bluffing"
    ],
    "image": "https://i.imgur.com/QCRzKwR.jpg",
    "gameId": 34
  },
  {
    "name": "Skull",
    "minPlayers": 3,
    "maxPlayers": 6,
    "weight": "light",
    "timeToPlay": 45,
    "type": "party",
    "features": [
      "auction",
      "hand management"
    ],
    "image": "https://i.imgur.com/j0jCA9a.jpg",
    "gameId": 35
  },
  {
    "name": "Small World",
    "minPlayers": 2,
    "maxPlayers": 5,
    "weight": "medium",
    "timeToPlay": 80,
    "type": "srategy",
    "features": [
      "dice rolling",
      "area control"
    ],
    "image": "https://i.imgur.com/LpD6ubg.jpg",
    "gameId": 36
  },
  {
    "name": "Splendor",
    "minPlayers": 2,
    "maxPlayers": 4,
    "weight": "medium",
    "timeToPlay": 30,
    "type": "family",
    "features": [
      "set collection",
      "card drafting"
    ],
    "image": "https://i.imgur.com/bLhlTCj.jpg",
    "gameId": 37
  },
  {
    "name": "Sushi Go!",
    "minPlayers": 2,
    "maxPlayers": 5,
    "weight": "light",
    "timeToPlay": 15,
    "type": "family",
    "features": [
      "card drafting",
      "hand management"
    ],
    "image": "https://i.imgur.com/Sop5ijM.jpg",
    "gameId": 38
  },
  {
    "name": "Takenoko",
    "minPlayers": 2,
    "maxPlayers": 4,
    "weight": "medium",
    "timeToPlay": 45,
    "type": "family",
    "features": [
      "grid movement",
      "modular board",
      "dice rolling"
    ],
    "image": "https://i.imgur.com/5ulz6sb.jpg",
    "gameId": 39
  },
  {
    "name": "Tokaido",
    "minPlayers": 2,
    "maxPlayers": 5,
    "weight": "light",
    "timeToPlay": 45,
    "type": "family",
    "features": [
      "set collection"
    ],
    "image": "https://i.imgur.com/IzYOwcx.jpg",
    "gameId": 40
  },
  {
    "name": "Terraforming Mars",
    "minPlayers": 1,
    "maxPlayers": 5,
    "weight": "heavy",
    "timeToPlay": 120,
    "type": "strategy",
    "features": [
      "hand management",
      "card drafting",
      "tile placement"
    ],
    "image": "https://i.imgur.com/xvN2EWY.jpg",
    "gameId": 41
  },
  {
    "name": "Viticulture",
    "minPlayers": 2,
    "maxPlayers": 6,
    "weight": "medium",
    "timeToPlay": 90,
    "type": "strategy",
    "features": [
      "hand management",
      "worker placement"
    ],
    "image": "https://i.imgur.com/qdeYX6B.jpg",
    "gameId": 42
  },
  {
    "name": "Twighlight Struggle",
    "minPlayers": 2,
    "maxPlayers": 2,
    "weight": "heavy",
    "timeToPlay": 180,
    "type": "strategy",
    "features": [
      "area control",
      "dice rolling",
      "hand management"
    ],
    "image": "https://i.imgur.com/KWKrMpG.jpg",
    "gameId": 43
  },
  {
    "name": "Colt Express",
    "minPlayers": 2,
    "maxPlayers": 6,
    "weight": "medium",
    "timeToPlay": 40,
    "type": "family",
    "features": [
      "family",
      "modular board",
      "memory"
    ],
    "image": "https://i.imgur.com/3L4cMfA.jpg",
    "gameId": 44
  },
  {
    "name": "Gloomhaven",
    "minPlayers": 1,
    "maxPlayers": 4,
    "weight": "heavy",
    "timeToPlay": 120,
    "type": "strategy",
    "features": [
      "grid movement",
      "cooperative",
      "modular board",
      "campaign"
    ],
    "image": "https://i.imgur.com/qcyc4cg.jpg",
    "gameId": 45
  },
  {
    "name": "Spirit Island",
    "minPlayers": 1,
    "maxPlayers": 4,
    "weight": "heavy",
    "timeToPlay": 120,
    "type": "strategy",
    "features": [
      "cooperative",
      "hand management",
      "area control"
    ],
    "image": "https://i.imgur.com/qVFdsJh.jpg",
    "gameId": 46
  },
  {
    "name": "Twilight Imperium",
    "minPlayers": 3,
    "maxPlayers": 6,
    "weight": "heavy",
    "timeToPlay": 300,
    "type": "strategy",
    "features": [
      "grid movement",
      "area control",
      "dice rolling"
    ],
    "image": "https://i.imgur.com/3LdaW9S.jpg",
    "gameId": 47
  },
  {
    "name": "Star Wars: Rebellion",
    "minPlayers": 2,
    "maxPlayers": 4,
    "weight": "heavy",
    "timeToPlay": 240,
    "type": "strategy",
    "features": [
      "dice rolling",
      "area control",
      "hand management"
    ],
    "image": "https://i.imgur.com/P691LRS.jpg",
    "gameId": 48
  },
  {
    "name": "Power Grid",
    "minPlayers": 2,
    "maxPlayers": 6,
    "weight": "medium",
    "timeToPlay": 120,
    "type": "strategy",
    "features": [
      "auction",
      "route building"
    ],
    "image": "https://i.imgur.com/yN5Zskw.jpg",
    "gameId": 49
  },
  {
    "name": "Photosynthesis",
    "minPlayers": 2,
    "maxPlayers": 4,
    "weight": "medium",
    "timeToPlay": 60,
    "type": "abstract",
    "features": [
      "action point allowance"
    ],
    "image": "https://i.imgur.com/bCaRe7u.jpg",
    "gameId": 50
  },
  {
    "name": "Root",
    "minPlayers": 2,
    "maxPlayers": 4,
    "weight": "heavy",
    "timeToPlay": 90,
    "type": "strategy",
    "features": [
      "dice rolling",
      "area control",
      "hand management"
    ],
    "image": "https://i.imgur.com/ZA04kW4.jpg",
    "gameId": 51
  },
  {
    "name": "Black Fleet",
    "minPlayers": 3,
    "maxPlayers": 4,
    "weight": "light",
    "timeToPlay": 60,
    "type": "family",
    "features": [
      "area movement",
      "pick-up and deliver"
    ],
    "image": "https://i.imgur.com/N2MhSxE.jpg",
    "gameId": 52
  },
  {
    "name": "Cards Against Humanity",
    "minPlayers": 4,
    "maxPlayers": 30,
    "weight": "light",
    "timeToPlay": 30,
    "type": "party",
    "features": [
      "hand management"
    ],
    "image": "https://i.imgur.com/D5sXbfY.jpg",
    "gameId": 53
  },
  {
    "name": "Sorry!",
    "minPlayers": 2,
    "maxPlayers": 4,
    "weight": "light",
    "timeToPlay": 30,
    "type": "children's",
    "features": [
      "roll / spin and move"
    ],
    "image": "https://i.imgur.com/wYbcM13.jpg",
    "gameId": 54
  },
  {
    "name": "Connect Four",
    "minPlayers": 2,
    "maxPlayers": 2,
    "weight": "light",
    "timeToPlay": 10,
    "type": "children's",
    "features": [
      "pattern building"
    ],
    "image": "https://i.imgur.com/pCz4Quv.jpg",
    "gameId": 55
  },
]

module.exports = boardGames