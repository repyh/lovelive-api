# Love Live API

So yeah, maybe I was bored and decided to make this...

## Contribution Guide

If you're interested to contribute to this project, feel free to head on over to `CGuide.md`. Please follow the instructions carefully before creating a pull request. Quick note, if you don't have any experience with programming or modifying json file, you can also contribute, to know how, head on over to the instruction file.

## Endpoints

### Episode Information `GET /anime/<group>/episodes/<season>-<episode>`

Note: Use group's name instead of anime name (For Nijigasaki, use Nijigasaki).

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

### Song Information `GET /song/<title>`

Will return list of songs information such as lyrics, titles, etc.

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

## Notes

Yes, I know not much has been done. This project will surely develop overtime. If you're interested to contribute to this project, scroll up to `Contribution Guide` section,
