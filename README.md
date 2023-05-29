# bugdotpng.github.io
Documenting the process of making changes with git. Just trying to get used to the process!

## Creating a new branch
1. `git checkout main`
2. `git pull`
3. `git checkout -b newBranch`

## Committing and pushing changes to github
1. `git status` (shows changes)
2. `git add .` (stages all files + changes)
3. `git commit -m "commit message goes here"` (commits changes + adds a commit message)
4. `git push --set-upstream origin newBranch` (pushes the changes to origin [github] and tells it where to push)
5. in github, merge changes into main (base branch is main; compare branch is the new branch w/ changes)
