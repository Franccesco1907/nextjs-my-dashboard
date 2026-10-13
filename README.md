# Next.js Dashboard

Next.js App Router practice dashboard with a Redux counter, Pokémon catalog and favorites persisted in localStorage.

Use Node.js 20.9+ and the committed npm lockfile:

```sh
npm ci
npm run dev
```

Open `http://localhost:3000` (redirects to `/dashboard/main`). Routes live in `src/app`, state in `src/store` and Pokémon UI in `src/pokemons`.

Run `npm run lint` and `npm run build` to check changes; `npm start` serves a completed production build. No test script is configured. Pokémon pages fetch from PokéAPI; builds also need Google Fonts access through `next/font/google`.
