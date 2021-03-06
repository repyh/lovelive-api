# Contribution Guide

Please read the instructions below carefully, if you don't know how to code, please read the `Non Programming Section`, otherwise, head on over to `Programming Section`.

## Non Programming Section

So you don't know how to code (or don't know javascript) and want to contribute to this project because your favorite waifu is in this franchise. Worry not, you can easily contribute by uploading song lyrics.

1. Head on over to [https://love-live.fandom.com/wiki/Main_Page](https://love-live.fandom.com/wiki/Main_Page) and search for the song that you would like to submit.
2. Make sure the song you chose isn't included in `songs.txt`, use `ctrl+f` or `command+f` to check if the song isn't there.
3. After making sure the song hasn't been submitted, head on over to the lyrics section, there you have 3 languages. Do the below steps for all 3 languages.
4. Make sure you've forked the repository before doing the next few steps. Go to your forked repository and head on to `storage/songs`.
5. Create a new file in that folder named `<song title (replace all special characters with '-')>-<eng | kan| rom>.txt`.
6. Paste the lyric in to the file. Don't forget to do step 4-8 for all 3 languages.
7. Create a pull request, if you don't know how, read [this](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request).
8. Done! You just need to wait for me to accept your pull request.

## Programming Section

Please pay attentions to all the points below before dong a pull request.

- Pay attention to the json format, I will of course check the format before accepting your pull request.
- If you're submitting/editing a song file, please scroll down to `Song File Notes` section first.
- Make sure to use [https://love-live.fandom.com/wiki/Main_Page](https://love-live.fandom.com/wiki/Main_Page) as your data resource, if the song/information you're looking is not in there, please wait until the information has been updated or added.
- If you're submitting/editing episodes file, don't forget to link the wiki page of the episode.

### Notes

Song Files

- In `credits.singers`, make sure the format is array. What you'd wanna put in there is the list of groups that have sang the song before, e.g: Tokimeki Runners (Muse, Aqours, Nijigasaki).
- Add and set featured section if song is featured on the anime. (also applies to ending and opening songs)
- Add and set mv if song has its mv, you can also add LL!SIF and LL!SIFAS clips, please refrain from using clips not uploaded by the official Love Live! youtube channel.
