import fcntl
import os
import sys
import termios
import tty
from typing import List
from typing import Union


def getch_unix(NONBLOCK: bool = False, encoding: str = None, raw: bool = True) -> str:
    fd: int = sys.stdin.fileno()

    settings: List[Union[int, List[bytes]]] = termios.tcgetattr(fd) if raw else []
    flags: Union[int, bytes] = fcntl.fcntl(fd, fcntl.F_GETFL)

    ch: str
    ch_bytes: bytes

    try:
        if raw:
            tty.setraw(fd)
        if NONBLOCK:
            fcntl.fcntl(fd, fcntl.F_SETFL, flags | os.O_NONBLOCK)
        if encoding:
            if ch_bytes := sys.stdin.buffer.read(1):
                ch = ch_bytes.decode(encoding)
            else:
                ch = ""
        else:
            ch = sys.stdin.read(1)
    finally:
        fcntl.fcntl(fd, fcntl.F_SETFL, flags)
        if raw:
            termios.tcsetattr(fd, termios.TCSADRAIN, settings)

    return ch
