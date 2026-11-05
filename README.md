# Pitiful Takes — the blog

The website for the Pitiful Takes Sports Podcast. It's a [Jekyll](https://jekyllrb.com) site, so GitHub Pages builds and hosts it for free.

## Put it online (one time)

1. On GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, pick **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
3. After a minute or two the site is live at `https://nikigogonis2009.github.io/pitifultakespod/`.

If you later buy a custom domain, set `baseurl: ""` and `url:` in `_config.yml`.

## Write a new take

Add a file to `_posts/` named `YEAR-MONTH-DAY-short-title.md`, for example `_posts/2026-11-10-jets-win-it-all.md`:

```markdown
---
title: "The Jets Are Winning the Super Bowl"
author: host1        # an id from _data/crew.yml
sport: nfl           # nfl, nba, ufc, nhl, soccer, golf, college, other
pitiful: 5           # Pitiful-meter, 1 (reasonable) to 5 (career-ending)
take: "The Jets win it all. Book it."   # the one-line take shown in the red box
---

Write the post here in normal Markdown. **Bold**, *italics*, lists,
> quotes (these show up as big pull-quotes)
and ## headings all work.
```

Commit it (you can do it right on github.com with **Add file → Create new file**) and the site updates by itself.

The five posts already in `_posts/` are samples. Delete them whenever you're ready.

## Edit the hosts, sports and links

- **Hosts:** `_data/crew.yml` holds names, nicknames, jersey numbers and bios. To add a photo, put it in `assets/img/crew/` and set `photo: crew/yourname.jpg`.
- **Sports:** `_data/sports.yml` holds the categories and their colors.
- **Spotify / Apple / YouTube / Instagram / TikTok links:** `links:` in `_config.yml`. They appear in the footer once filled in.

## Preview on your computer (optional)

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000/pitifultakespod/.
