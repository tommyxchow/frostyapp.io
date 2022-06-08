# [frostyapp.io](https://frostyapp.io)

The homepage and marketing website for [Frosty](https://github.com/tommyxchow/frosty), a mobile Twitch.tv client for iOS and Android.

Built with [Next.js](https://nextjs.org), styled with [Tailwind CSS](https://tailwindcss.com), and deployed with [Vercel](https://vercel.com).

## Why Next.js?

1. I wanted to learn more about React hands-on and get familiar with Next.js since it appears to be the popular standard for many React projects these days.
2. I didn't want to deal with the intricacies of setting up a React project with CRA since I needed to have the website deployed ASAP.
3. The majority of optimizations are automatic and require minimal setup, resulting in exceptional performance (97 for mobile and 99 for desktop on Lighthouse performance).
4. Deployment is free and effortless with Vercel.

**TL;DR**: The fastest way to get a performant React project configured and deployed. I wanted to start developing ASAP without worrying too much about properly setting up packages, linting, scripts, CI, deployment, etc.

## Why Tailwind CSS?

1. I had trialed Tailwind CSS before and overall was an enjoyable experience. Felt much faster when developing and experimenting with styles since it's done right in the HTML.
2. Some minor but common annoyances with vanilla CSS like switching between CSS files, naming classes, deciding which units and values to use, and forgetting specific CSS were pretty much gone.
3. Coming from a Flutter background, having the styles alongside the components themselves was very familiar and nice to have.
4. I became eager to learn more about Tailwind CSS, which drove me to work on the website even more (the documentation is great too).
5. Hovering the Tailwind CSS in VSCode lets me view the actual CSS used, allowing me to learn and understand best practices at the same time should I ever return to vanilla CSS.

One common annoyance is that the class names can get freakishly long (especially once you get the breakpoints in), resulting in quite a bit of side-scrolling. It's also sometimes a little less readable to me since the Tailwind classes are read on one line left-to-right instead of top-down in your typical vanilla CSS.

**TL;DR**: Very easy and fast to pick up and learn. Playing around and experimenting with styles feels quick and enjoyable. "Never leave your HTML" is a real solution. Overall, a better developer experience for me. One caveat is cluttered class names, which may result in less readability for some people.

## License

frostyapp.io is licensed under [MIT](LICENSE).
