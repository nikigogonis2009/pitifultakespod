"""Fill in `decided:` on posts that got a verdict but no decided date yet.

Runs before every site build (on save and every 15 minutes), so a take's
decided date lands within ~15 minutes of the verdict being set.
"""
import datetime
import glob
import re
from zoneinfo import ZoneInfo

now = datetime.datetime.now(ZoneInfo("America/New_York")).strftime("%Y-%m-%dT%H:%M")
changed = []

for path in sorted(glob.glob("_posts/*.md")):
    text = open(path, encoding="utf-8").read()
    m = re.match(r"---\n(.*?)\n---\n", text, re.S)
    if not m:
        continue
    front = m.group(1)
    verdict = re.search(r"^verdict:\s*['\"]?(called-it|wrong)['\"]?\s*$", front, re.M)
    if not verdict:
        continue
    decided = re.search(r"^decided:\s*(\S.*)?$", front, re.M)
    if decided and decided.group(1) and decided.group(1).strip() not in ("''", '""', "null", "~"):
        continue
    if decided:
        new_front = front[: decided.start()] + f"decided: {now}" + front[decided.end():]
    else:
        new_front = front[: verdict.end()] + f"\ndecided: {now}" + front[verdict.end():]
    open(path, "w", encoding="utf-8").write(text.replace(front, new_front, 1))
    changed.append(path)

for path in changed:
    print("decided date added:", path)
