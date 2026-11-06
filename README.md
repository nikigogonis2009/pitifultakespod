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
- Build and deployment → Source: **GitHub Actions**. The workflow in `.github/workflows/pages.yml` builds the site on every save and every 15 minutes, so scheduled posts and the Wrapped page go live on time.
- Custom domain: `pitifultakes.com`, then Save.
- Once the DNS check passes (minutes to a few hours), tick **Enforce HTTPS**.

The `CNAME` file in this repo holds the domain. Don't delete it.

## Write a new take

**Easiest:** use the editor at [app.pagescms.org](https://app.pagescms.org). Sign in with GitHub, install the Pages CMS app on this repo, and you get a normal writing screen for posts and the crew list. Step-by-step instructions are in [`WRITING.md`](WRITING.md). The editor is set up by `.pages.yml`.

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

## Scheduling

- **Posts:** give a post a future date and time in the editor. It stays hidden until then and appears within about 15 minutes of that time.
- **Wrapped:** `pitifultakes.com/wrapped/` doesn't exist until the date at the top of `_wrapped/2026.html` (Nov 30), then shows a countdown teaser. The full Wrapped is revealed at `reveal_date` in `_data/wrapped.yml` (Dec 25). Both dates can be changed.

## Hot Takes board and Receipts

- A post goes on the Hot Takes board if it's rated 4+ on the Pitiful-meter or marked **Season-long prediction**.
- Set its **Verdict** (Called it / Wrong) when it's decided. The site fills in **Decided on** automatically on its next rebuild (change it if needed).
- Decided takes stay on the board with their stamp for 7 days, then move to the Receipts (`/hot-takes/receipts/`), filed by the year they were decided. Undecided takes stay on the board, even across years.
- Wrapped counts Called it / Wrong by the year each take was decided.

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
