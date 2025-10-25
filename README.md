# my-portfolio

## Deployment

To deploy to GitHub Pages on Windows, the `gh-pages` library can produce an ENAMETOOLONG error when it passes a very long list of files to git.

This project uses the "add" mode to avoid that: the `deploy` script in `package.json` is now:

```
gh-pages -d dist -a
```

The `-a` / `--add` flag prevents gh-pages from enumerating every file to remove (which caused the long command line), and instead adds the built files to the branch. Alternatively, you can use a CI workflow that pushes the `dist` folder directly to the `gh-pages` branch if you prefer.

