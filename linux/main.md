# Linux <!-- omit in toc -->

## Sections <!-- omit in toc -->

- [Cron Jobs](#cron-jobs)
  - [Options](#options)
  - [Examples](#examples)
  - [Setting Time](#setting-time)
- [Links](#links)
  - [Options](#options-1)
  - [Examples](#examples-1)
- [Web Data](#web-data)
  - [Options](#options-2)
  - [Examples](#examples-2)
- [XDG base directory specification](#xdg-base-directory-specification)
  - [Scripts](#scripts)
  - [Directories](#directories)
- [To Do](#to-do)

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
crontab -l -u root

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

| Short Flag | Long Flag        | Description                                                         |
| ---------- | ---------------- | ------------------------------------------------------------------- |
| -f,        | --fail           | Fail silently on server errors.                                     |
| -G,        | --get            | Http get request.                                                   |
| -s,        | --silent         | Silent or quiet mode.                                               |
| -S,        | --show-error     | When used with -s, --silent, it shows an error message if it fails. |
| -H,        | --header         | Add a request header                                                |
|            | --compressed     | Request a compressed response automatically decompress the content. |
|            | --data-urlencode | Post data encoded for urls                                          |

### Examples

```bash
# curl [options / URLs]

curl -fGsS -H 'Accept-Language: en' --compressed 'wttr.in'
```

---

## XDG base directory specification

> Various specifications specify files and file formats.
> This specification defines where these files should be looked for by defining one or more base directories relative to which files should be located.

### Scripts

> User-specific executable files may be stored in `$HOME/.local/bin`.
> Distributions should ensure this directory shows up in the UNIX $PATH environment variable, at an appropriate place.

### Directories

> `$XDG_DATA_HOME` defines the base directory relative to which user-specific data files should be stored.

```bash
data_home="${XDG_DATA_HOME:-$HOME/.local/share}"
```

> `$XDG_CONFIG_HOME` defines the base directory relative to which user-specific configuration files should be stored.

```bash
config_home="${XDG_CONFIG_HOME:-$HOME/.config}"
```

> `$XDG_STATE_HOME` defines the base directory relative to which user-specific state files should be stored.
> The `$XDG_STATE_HOME` contains state data that should persist between (application) restarts, but that is not important or portable enough to the user that it should be stored in `$XDG_DATA_HOME`. It may contain:
>
> -  actions history (logs, history, recently used files, …)
> -  current state of the application that can be reused on a restart (view, layout, open files, undo history, …)

```bash
state_home="${XDG_STATE_HOME:-$HOME/.local/state}"
```

> `$XDG_CACHE_HOME` defines the base directory relative to which user-specific non-essential data files should be stored.

```bash
cache_home="${XDG_CACHE_HOME:-$HOME/.cache}"
```

[Source - https://specifications.freedesktop.org](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html)

---

## To Do

Sections to add:

-  gpg
-  rsync
