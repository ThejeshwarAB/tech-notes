# Linux & macOS Basic Commands

This file is a practical command reference for daily terminal usage on Linux and macOS.
No theory. Only commands you will actually use.

## Navigation

- pwd        → show current directory
- ls         → list files
- ls -la     → list files with details
- cd folder  → move into folder
- cd ..      → move up one level
- cd ~       → go to home directory

## File and Folder Management

- touch file.txt        → create empty file
- mkdir folder          → create folder
- mkdir -p a/b/c        → create nested folders
- rm file.txt           → delete file
- rm -r folder          → delete folder recursively
- cp file1 file2        → copy file
- cp -r dir1 dir2       → copy folder
- mv old new            → rename or move file/folder

## Viewing Files

- cat file.txt          → print file content
- less file.txt         → view file with scroll
- head file.txt         → first lines of file
- tail file.txt         → last lines of file
- tail -f file.txt      → follow file updates

## Searching

- find . -name file.txt → find file by name
- grep "text" file.txt  → search text in file
- grep -r "text" .      → search text recursively

## Permissions (basic)

- ls -l                 → view permissions
- chmod +x file.sh      → make file executable
- chmod 644 file.txt    → set read/write permissions

## Processes

- ps                    → list running processes
- ps aux                → detailed process list
- top                   → live process monitor
- kill PID              → stop process by id

## Disk and System

- df -h                 → disk usage
- du -sh folder         → folder size
- free -h               → memory usage (Linux)
- uname -a              → system info
- whoami                → current user

## Networking

- curl url              → fetch URL content
- ping google.com       → check connectivity
- ifconfig              → network info (macOS)
- ip a                  → network info (Linux)

## Package Management

Linux (Debian/Ubuntu):
- sudo apt update
- sudo apt install pkg

macOS (Homebrew):
- brew install pkg
- brew list

## Useful Shortcuts

- clear                 → clear terminal
- history               → command history
- !!                    → repeat last command
- ctrl + c              → stop running command
- ctrl + l              → clear screen
