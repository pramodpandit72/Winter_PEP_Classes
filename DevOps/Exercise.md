Student Exercise — Rebase vs Merge
PART 1: Setup
cd %USERPROFILE%\Desktop
mkdir git-practice
cd git-practice
git init
git config user.name "YourName"
git config user.email "you@example.com"

PART 2: Create history on main
echo first file > file1.txt
git add .
git commit -m "first commit"

echo second file > file2.txt
git add .
git commit -m "second commit"

PART 3: Create a feature branch
git checkout -b feature/my-feature
echo my feature > feature.txt
git add .
git commit -m "my feature commit"

PART 4: Simulate teammate commit on main
git checkout main
echo teammate work > team.txt
git add .
git commit -m "teammate commit"

PART 5: Try rebase
git checkout feature/my-feature
git rebase main
git log --oneline --graph --all

Question: Is the history a straight line or a fork?



---------------------------------------------------------------------------------------



Student Exercise — Create and Resolve a Conflict
STEP 1: Setup
cd %USERPROFILE%\Desktop
mkdir my-conflict
cd my-conflict
git init
git config user.name "YourName"
git config user.email "you@example.com"

STEP 2: Create starting file
echo My name is Vikas > bio.txt
git add .
git commit -m "add bio"

STEP 3: Make a feature branch and edit bio.txt
git checkout -b feature/bio-update
→ Open bio.txt in Notepad
→ Change it to: My name is Vikas Kumar
→ Save and close
git add .
git commit -m "feature: add last name"

STEP 4: Go back to main and edit bio.txt differently
git checkout main
→ Open bio.txt in Notepad
→ Change it to: My name is Vikas, IT Trainer
→ Save and close
git add .
git commit -m "main: add job title"

STEP 5: Merge and see the conflict
git merge feature/bio-update
→ Open bio.txt in Notepad. Read the conflict markers.
→ Resolve it to: My name is Vikas Kumar, IT Trainer
→ Delete all <<< === >>> lines
→ Save the file
git add bio.txt
git commit -m "resolve: combine name and title"
git log --oneline --graph