# readkeys

[![pypi version](https://img.shields.io/pypi/v/readkeys)](https://pypi.org/project/readkeys/)
[![supported Python version](https://img.shields.io/pypi/pyversions/readkeys)](https://pypi.org/project/readkeys/)
[![license](https://img.shields.io/pypi/l/readkeys)](https://pypi.org/project/readkeys/)

Python library to read from stdin a single char, keypress (with escape sequences) or line.

Originally a fork of [magmax/python-readchar](https://github.com/magmax/python-readchar), it was rewritten to fix some bugs and better support UNIX and Windows systems.

## Usage

```python
import readkeys

ch = readkeys.getch()  # get a single character
key = readkeys.getkey()  # get a single keypress
line = readkeys.getline()  # get a line of text
line2 = readkeys.getline(raw=False)  # Get a line of text and print out characters as they are typed, similar to built-in input.
flush = readkeys.flush()  # flush stdin
```

## Functions

### `getch`

The `getch` function reads a single character byte from stdin. The buffer is not flushed after read.

The function has the following type signature:
`getch(NONBLOCK: bool = False, encoding: str = None, raw: bool = True) -> str`

* `NONBLOCK: bool` use non-blocking mode when reading from stdin, defaults to False. The library may encounter unforeseen errors if set to `True`.
* `encoding: str` specify an encoding (e.g. utf-8) to be used to decode bytes from the stdin buffer. If unspecified it assumes characters can be directly extracted from stdin.
* `raw: bool` put tty terminal in raw mode before reading, see [tty.setraw](https://docs.python.org/3/library/tty.html#tty.setraw). If set to `False` the characters will still appear in the terminal as they are typed. Settings before changing to raw mode are saved and restored when the read operation is complete.<br>
The option is ignored on Windows systems as they use a completely different terminal environment and a different library is necessary to read character from stdin: [`msvcrt`](https://docs.python.org/3.8/library/msvcrt.html).

### `getkey`

The `getkey` function reads a single keypress from stdin, including escape sequences of function keys. For example arrow keys are returned with their full escape sequence, without leaving anything in the buffer (`0x1b5b41`, `0x1b5b42`, `0x1b5b43` or `0x1b5b44`).

The function has the following type signature:
`getch(getch_fn: Callable[[], str] = None, encoding: str = "", raw: bool = True) -> str`

* `getch_fn: Callable[[], str]` if passed, use the this function instead of the built-in [`getch`](#getch) to read the single bytes from stdin. The library may encounter unforeseen errors if this option is used.
* `encoding: str` specify an encoding (e.g. utf-8) to be used to decode bytes from the stdin buffer. See [`getch`](#getch).
* `raw: bool` put tty terminal in raw mode before reading. See [`getch`](#getch).

### `getline`

The `getline` function reads a full line of characters from stdin, including non-standard keys (e.g. arrow keys). It defaults to raw mode, leaving characters unprinted on screen.

The function has the following type signature:
`(getch_fn: Optional[Callable[[], str]] = None, encoding: str = None, raw: bool = True) -> str`

* `getch_fn: Callable[[], str]` if passed, use the this function instead of the built-in [`getch`](#getch) to read the single bytes from stdin. The library may encounter unforeseen errors if this option is used.
* `encoding: str` specify an encoding (e.g. utf-8) to be used to decode bytes from the stdin buffer. See [`getch`](#getch).
* `raw: bool` put tty terminal in raw mode before reading. See [`getch`](#getch).

### `flush`

The `flush` function removes any leftover byte from stdin and returns them as a string. It is useful to clear the buffer from any remaining bytes after doing a single read with `getch`.

The function has the following type signature:
`flush() -> str`