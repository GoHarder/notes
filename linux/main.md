# Linux

## Sections

-  [Cron Jobs](#cron-jobs)
-  [Links](#links)
-  [Web Data](#web-data)
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

---

## Web Data

A command to get data from the internet si the `curl` command.

### Options

| Short Flag | Long Flag    | Description                                                         |
| ---------- | ------------ | ------------------------------------------------------------------- |
| -f,        | --fail       | Fail silently on server errors.                                     |
| -G,        | --get        | Http get request.                                                   |
| -s,        | --silent     | Silent or quiet mode.                                               |
| -S,        | --show-error | When used with -s, --silent, it shows an error message if it fails. |
| -H,        | --header     | Add a request header                                                |
|            | --compressed | Request a compressed response automatically decompress the content. |

### Examples

```bash
# curl [options / URLs]

curl -fGsS -H 'Accept-Language: en' --compressed 'wttr.in'
```

---

## To Do

Sections to add:

-  gpg
-  rsync
