# Git & GitHub Workshop

Start with Linux commands
Go over working in a terminal enviroment

Basic Linus commands:
ls: List all files, but sorted by size and print the size.
cd: Move into the previous directory
pwd: Print the current working directory
echo: print out text
mkdir: Make a deeply nested directory and all it’s parent directories
touch: Create a new file
rm: removes files and directories
cp: copies and makes new file
mv: moves and deletes old file

after init show .git folder with ls -a
git add .
show U to A
git status
git commit -m "Initial commit"
git log --oneline --graph

touch secret.json

- paste: {"key":"fullsail"}
  echo "secret.json" > .gitignore
- show tracked vs untracked files
  git add .

add them to staging

<!-- expample the HEAD of the branch
`git commit -a -m "fix:typo"` -->
<!-- VS Code dropdown options -->

Show how to set up a repo on Github.
git remote
explain origin and branch
git push origin master -u

- explain upstream
- edit README on GitHub and commit changes
- fetch the changes
  git fetch
  git status
- show you need to pull
  git pull origin master

delete repo and clone it back down

git clone

- git branches
  git checkout -b newBranch
  git branch -M fakeBranch
  - go back to main and delete branch
    git checkout main
    git branch -d fakeBranch
- make new branch
  git checkout -b test
  echo "Line 1" > file.txt
  git add file.txt
  git commit -m "added file.txt"
  git push origin test
- Look at GitHub
- PR the two feature branches
  git pull origin feature
  git merge origin/feature
- make changes and save file
  git commit -am "fixed conflict"
- approve PR
- show feature branches are the same now
  git checkout main
  git merge test
  git push origin main
  -Show Github
  git push -d <remote_name> <branchname> # Delete remote
  git branch -d <branchname> # Delete local
  - git status --short

### Merge vs Rebase

<!-- make a branch and delete it.
make commit and show the changes
git diff
show that differeent branches are a new timeline
add files to new branch and go back to main and show the file isnt there

git checkout - -> last branch

add changes to remote repo
git fetch origin
git merge origin/main
add antoher change and do git pull -->

<!-- pre commit makes a temporerty file out of the config
uses that then deletes it -->
