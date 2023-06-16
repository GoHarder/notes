# Stubs <!-- omit in toc -->

Uncategorized notes

## Sections <!-- omit in toc -->

- [Shell Tricks](#shell-tricks)
- [Cool Shell Things](#cool-shell-things)
- [Common Git Commands](#common-git-commands)
  - [Create a new repository on the command line](#create-a-new-repository-on-the-command-line)
  - [Push An Existing Repository From The Command Line](#push-an-existing-repository-from-the-command-line)

---

## Shell Tricks

```bash
# Shut down your computer on a timer in seconds
shutdown -s -t 1800
```
---

## Cool Shell Things

```bash
string1='[⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿]'
string2='✔ 831f51541d38 Pull complete'
string3='[+] Running 11/11'
```

---

## Common Git Commands

### Create a new repository on the command line

```bash
echo "# [repo name]" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/GoHarder/[repo name].git
git push -u origin main
```

### Push An Existing Repository From The Command Line

```bash
git remote add origin https://github.com/GoHarder/[repo name].git
git branch -M main
git push -u origin main
```