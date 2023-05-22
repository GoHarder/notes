# Linux

## Sections

-  [Cron Jobs](#cron-jobs)
-  [Links](#links)
-  [To Do](#to-do)

---

## Cron Jobs

Cron jobs allow you to run a command at a specified time.

To edit and list cron jobs use the `crontab` command

### Options

| Short Flag | Description                 |
| ---------- | --------------------------- |
| -e         | Edit the users crontab file |
| -l         | List the users cron jobs    |
| -u [user]  |                             |

### Examples

```bash
# crontab [-u user] [options]

# List the cron jobs of the root user
crontab -e -u root

# Edit cron jobs of the root user
crontab -e -u root
```

### Setting Time

There are editors online that will help you set the time.
The site below explains what the syntax is.

[Crontab Guru](https://crontab.guru/)

---

## Links

The command to create links is the `ln` command.

This can create two different links a symbolic link and a hard link.

| Type     | Inode                   |
| -------- | ----------------------- |
| Symbolic | Different inode numbers |
| Hard     | Same inode Numbers      |

### Options

| Short Flag | Long Flag  | Description                              |
| ---------- | ---------- | ---------------------------------------- |
| -f         | --force    | remove existing destination files        |
| -s         | --symbolic | Make symbolic links instead of hard link |

### Examples

```bash
# ln [options] <source location> <link location>

# Put a link to the doc.txt file on the desktop
ln -s /home/user/documents/doc.txt /home/user/desktop

# Link a directory
ln -s /mnt/c/Users/user/Desktop /home/user/desktop
```

## To Do

Sections to add:

-  gpg
-  rsync
