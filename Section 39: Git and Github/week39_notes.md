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

- adds file to stage
- can go git add . for all
- can also do 1 file by writing the file name

git commit: commits the files to be fully tracked

- git commit -m "message to be added with commit"
- messages should be in present tense

git push: push to github

## Git Log and Checkout

git log: see a log of all commits

- type "q" to exit

git checkout: checking out a branch or a previous commit

- git checkout: "unique commit id"
- must commit changes before git checkout can work
- will say head detached after running git status after git checkout
  - we are no longer on master
  - if we type ls, we will go back in time and see what files we had back when that commit was made
  - essentially creates a branch
  - git checkout master to go back to master
- rare to actually go back and start working from an older commit
  - if you want to theres alot of ways to do this
  - git revert --no-commit -"commit-hash"..HEAD
  - goes back to code at that commit
  - then we get changes that have to be commited bc the difference is now a commit that needs to be made
  - git commit -m "reverted back"
  - make sure to take care of uncommited changes
  - can go back to the latest version that you changed away from by going git log and going to the commit where you had everything
