# Love Live API

So yeah, maybe I was bored and decided to make this...

**https://loveliveapi.herokuapp.com/**

## Contribution Guide

If you're interested to contribute to this project, feel free to head on over to `CGuide.md`. Please follow the instructions carefully before creating a pull request. Quick note, if you don't have any experience with programming or modifying json file, you can also contribute, to know how, head on over to the instruction file.

## Endpoints

### Episode Information `GET /api/anime/<anime>/episode/<season>-<episode>`

Example

`https://loveliveapi.herokuapp.com/anime/love-live-superstar/episode/1-1`

```js
{
  "titles": {
    "eng": "This Yet Unknown Feeling",
    "kan": "まだ名もないキモチ",
    "rom": "Mada Na mo nai Kimochi"
  },
  "cast": {
    "Sayuri Date": "Kanon Shibuya",
    "Liyuu": "Keke Tang",
    "Nako Misaki": "Chisato Arashi",
    "Naomi Payton": "Sumire Heanna",
    "Nagisa Aoyama": "Ren Hazuki",
    "Akane Matsunaga": "Aria Shibuya",
    "Mamiko Noto": "Kanon's Mother",
    "Romi Park": "Hana Hazuki",
    "Azumi Waki": "Nanami",
    "Miyu Tomita": "Yae",
    "Haruka Shiraishi": "Kokono",
    "Anna Mugiho": "Manmaru"
  },
  "premiere": "11-6-2021",
  "songs": {
    "insert": ["Mirai Yohou Hallelujah!", "Primary"]
  },
  "source": "https://love-live.fandom.com/wiki/This_Yet_Unknown_Feeling"
}
```

### Song Information `GET /api/song/<title>`

Example

`https://loveliveapi.herokuapp.com/song/mirai-yohou-hallelujah`

Note: Remove all special characters.

```js
{
  "title": {
    "eng": "Future Forecast Hallelujah!",
    "kan": "未来予報ハレルヤ!",
    "rom": "Mirai Yohou Hallelujah!"
  },
  "featured": true,
  "mv": "https://www.youtube.com/watch?v=BHzYNQ-irmU",
  "credits": {
    "writer": "Junko Miyajima",
    "composer": "EFFY",
    "arranger": "Yosuke Yamashita",
    "singer": ["Liella"]
  },
  "lyrics": {
    "eng": "/storage/songs/TWlyYWlZb2hvdUhhbGxlbHVqYWgh-eng.txt",
    "kan": "/storage/songs/TWlyYWlZb2hvdUhhbGxlbHVqYWgh-kan.txt",
    "rom": "/storage/songs/TWlyYWlZb2hvdUhhbGxlbHVqYWgh-rom.txt"
  }
}
```

### Unit Information `GET /api/unit/<unit name>`

Example

`https://loveliveapi.herokuapp.com/unit/liella`

Note: You can also search for sub-unit's info here.

```js
{
  "name": {
    "eng": "Liella",
    "kanji": "リエラ",
    "rom": "Riera"
  },
  "school": "Yuigaoka Girls' High School",
  "description": "Liella! is the school idol group of Yuigaoka Girls' High School. The group consists of five members. The leader is currently unknown.",
  "members": [
    "Shibuya Kanon",
    "Tang Keke",
    "Arashi Chisato",
    "Heanna Sumire",
    "Hazuki Ren"
  ],
  "animeography": [
    "Love Live! Superstar!!"
  ],
  "songs": ["Mirai Yohou Hallelujah!", "START!! True dreams", "Hajimari wa Kimi no Sora", "Watashi no Symphony", "Dancing Heart La-Pa-Pa-Pa!", "Dakara Bokura wa Narasunda!", "Dreaming Energy", "Memories", "Mirai wa Kaze no You ni", "Primary", "Kono Machi de Ima Kimi to"]
}
```

## Notes

Yes, I know not much has been done. This project will surely develop overtime. If you're interested to contribute to this project, scroll up to `Contribution Guide` section.
Extra: You can't access `storage/songs` yet, I'm too lazy.
