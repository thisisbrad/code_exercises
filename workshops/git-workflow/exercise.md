Absolutely! Let’s update the guide to include a clear comparison of **merge** and **rebase**, so your students can see the differences in action.

---

## Git Branching, Merging, Rebasing, and Remote Workflows

### 🏁 Create a Directory

```bash
pwd
mkdir git-demo
cd git-demo
touch README.md
```

### 1️⃣ Create a Repository and Set Up Branches

```bash
git init
echo "Line 1" > file.txt
git add file.txt
git commit -m "Initial commit"
git checkout -b feature-branch
echo "Line 2 from feature branch" >> file.txt
git commit -am "Add line 2 in feature branch"
git checkout main
echo "Line 2 from main branch" >> file.txt
git commit -am "Add line 2 in main branch"
```

### 2️⃣ Diagram of Branches

```
* (main)      Line 2 from main branch
* (feature)   Line 2 from feature branch
*             Initial commit

main
 |\
 | feature-branch
```

### 3️⃣ Merging vs Rebasing

#### Merge Example:

```bash
git checkout main
git merge feature-branch
```

This creates a **merge commit** that keeps both histories:

```
*   Merge branch 'feature-branch'
|\
| * Add line 2 in feature branch
* | Add line 2 in main branch
|/
* Initial commit
```

#### Rebase Example:

Reset `main` and recreate the scenario:

```bash
git reset --hard HEAD~2
echo "Line 2 from main branch" >> file.txt
git commit -am "Add line 2 in main branch"
git checkout feature-branch
git rebase main
```

This rewrites the feature-branch history to be linear:

```
* Add line 2 in feature branch
* Add line 2 in main branch
* Initial commit
```

#### Key Differences:

- **Merge**: Keeps the full branching history with a merge commit.
- **Rebase**: Rewrites history to make it linear, like your changes were applied directly on top of the base.

### 4️⃣ Handling Merge Conflicts

When conflicts happen (e.g., during merge or rebase), Git marks them in the file like this:

```text
Line 1
<<<<<<< HEAD
Line 2 from main branch
=======
Line 2 from feature branch
>>>>>>> feature-branch
```

Resolve the conflict by editing the file, then:

```bash
git add file.txt
git commit -m "Resolve conflict"
```

Or if rebasing:

```bash
git rebase --continue
```

### 5️⃣ Interactive Exercises for Students

✅ Create branches, make changes, and try both `git merge` and `git rebase`.
✅ Observe the difference using:

```bash
git log --oneline --graph
```

✅ Resolve conflicts manually.
✅ Bonus: Try `git mergetool`.

### 6️⃣ Next Step: Working with Remote Repositories

Introduce **remote repositories**:

```bash
git remote add origin <URL>
git push -u origin main
git push -u origin feature-branch
```

Demo pushing, pulling, and resolving conflicts with remote changes:

```bash
git pull
```

Explain:

- Local vs. remote branches
- `git fetch`, `git pull`, and `git push`

### 7️⃣ Visual Diagrams and Tools

Consider using interactive tools for demos:

- [Learn Git Branching](https://learngitbranching.js.org/)
- [Visual Git Guide](https://marklodato.github.io/visual-git-guide/index-en.html)

Let me know if you’d like a custom diagram showing the differences between merge and rebase!
