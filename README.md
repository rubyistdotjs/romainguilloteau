# Personal Website (2023-...)

The new version of my humble personal website, which you can visit here: https://romainguilloteau.dev/. For now there is not a lot to see. I might start a blog, build a mini-game, add my pilot logbook, but most likely it will stay as-is.

I started to feel ashamed of my [former website](https://github.com/rubyistdotjs/romainguilloteau-2018-2022) and this was a perfect excuse to try Svelte (with SvelteKit).

## Setup

The only thing required is Node 16 or higher.

First clone the repository and `cd` into it:

```sh
git clone git@github.com:rubyistdotjs/romainguilloteau.git
cd romainguilloteau
```

Then install the dependencies:

```sh
npm install
```

create the .env using the example:

```sh
cp .env.example .env
```

_The only required variable is `GOODREADS_API_KEY`. If you don't have one, Goodreads no longer issues them so..._

Finally, you can launch the website with:

```sh
npm run dev -- --open
```
