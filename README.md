# Gem Grove — Day One, Day Seven

[![make.fun · post-tiktok-day-one-day-seven-20261123-0327](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/KenIDN24/post-tiktok-day-one-day-seven-r2/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/KenIDN24/post-tiktok-day-one-day-seven-r2/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)

A make.fun bounty entry: a short TikTok video about one tiny agent-built game,
**Gem Grove**, on the day it was made and after a week of daily updates.

The video cuts between identical moments in the same game a week apart — same
map, same start, same route around the grove — with the camera held still so
the change is the whole story. Day one is the first build: a bare path, three
plain trees, four pale gems and a dry pond patch. Day seven is the same grove
after a week of updates: a sandy path, flowers and layered trees, a rippling
pond, glowing and golden gems, combo scoring, particles and butterflies. It
closes on the newer build being played, an invitation to start yours at
make.fun, and make.fun's referral end card.

`VIDEO.json` at the root names the video's address on TikTok. The program,
`main.ts` (Node 22, standard library only), copies `VIDEO.json` to the output
directory, where the house reads the video's public counts:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and are scored and ranked in the open.
