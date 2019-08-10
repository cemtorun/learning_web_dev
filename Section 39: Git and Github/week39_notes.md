# Section 39: Git and Github

## Intro to Git

Git is a free and open source distribued open source system.

## Git Init, Add, and Commit

git init: initalize git in this directory

- only works for that folder and anything inside that folder
- git init creates a hidden folder called .git that tracks the folder
- ls -a to see all folders including hidden folders
- accidently initalized git then remove .git

git status: asks git for a status

- tells you the untracked files (files that arent commited)
- have to commit before git starts tracking them
- can complete ignore these files by putting them in .gitignore
- tells you what is staged to be commited

git add: adds files to stage to be commited

git commit: commits the files to be fully tracked

- git commit -m "message to be added with commit"

## Git Log and Checkout
