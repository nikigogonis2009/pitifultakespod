# Pitiful Takes — the blog

The website for the Pitiful Takes Sports Podcast. It's a [Jekyll](https://jekyllrb.com) site, so GitHub Pages builds and hosts it for free.

## Put it online (one time)

The site lives at **https://pitifultakes.com**, hosted free on GitHub Pages. The domain is registered at Namecheap. (Preview at http://localhost:4000/ when running locally.)

**1. Namecheap** (Domain List → Manage next to pitifultakes.com → Advanced DNS). Delete the default parking records, then add:

| Type | Host | Value |
|---|---|---|
| A Record | `@` | `185.199.108.153` |
| A Record | `@` | `185.199.109.153` |
| A Record | `@` | `185.199.110.153` |
| A Record | `@` | `185.199.111.153` |
| CNAME Record | `www` | `nikigogonis2009.github.io.` |

**2. GitHub** (this repo → Settings → Pages):
- Build and deployment: **Deploy from a branch**, branch `main`, folder `/ (root)`.
- Custom domain: `pitifultakes.com`, then Save.
- Once the DNS check passes (minutes to a few hours), tick **Enforce HTTPS**.

The `CNAME` file in this repo holds the domain. Don't delete it.

## Write a new take

**Easiest:** use the editor at [app.pagescms.org](https://app.pagescms.org). Sign in with GitHub, install the Pages CMS app on this repo, and you get a normal writing screen for posts and the crew list. Step-by-step instructions are on the site's `/write/` page (linked as "Write a take" in the footer). The editor is set up by `.pages.yml`.

**By hand:** 
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

Then open http://localhost:4000/.
