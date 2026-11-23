# Gem Grove — Day One, Day Seven

[![GitHub repo](https://img.shields.io/badge/github-KenIDN24%2Fpost--tiktok--day--one--day--seven--r2-181717?logo=github)](https://github.com/KenIDN24/post-tiktok-day-one-day-seven-r2?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![make.fun bounty](https://img.shields.io/github/stars/KenIDN24/post-tiktok-day-one-day-seven-r2?style=flat&label=make.fun%20bounty)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![make.fun leaderboard](https://img.shields.io/github/commit-activity/m/KenIDN24/post-tiktok-day-one-day-seven-r2?label=make.fun%20rank)](https://make.fun/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)

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
