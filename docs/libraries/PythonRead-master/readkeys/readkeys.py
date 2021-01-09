import sys
from typing import Callable
from typing import Optional

if sys.platform.startswith("linux"):
    from .getch_unix import getch_unix as getch
elif sys.platform == "darwin":
    from .getch_unix import getch_unix as getch
elif sys.platform in ("win32", "cygwin"):
    from .getch_windows import getch_windows as getch
else:
    raise NotImplemented(f'Platform "{sys.platform}" not implemented')


def getkey(getch_fn: Optional[Callable[[], str]] = None, encoding: str = None, raw: bool = True) -> str:
    if getch_fn is not None:
        # if an external function is given then assume NONBLOCK flag is not set
        #  keep reading and check for escape sequences
        if ord(c1 := getch_fn()) != 0x1b:
            return c1
        if ord(c2 := getch_fn()) != 0x5b:
            return c1 + c2
        if ord(c3 := getch_fn()) != 0x33:
            return c1 + c2 + c3
        c4 = getch_fn()
        return c1 + c2 + c3 + c4
    else:
        # read first character from stdin
        c = getch(NONBLOCK=False, encoding=encoding, raw=raw)
        # keep reading from stdin with NONBLOCK flag until it returns empty
        #  meaning stdin has no more characters stored
        while (ct := getch(NONBLOCK=True, encoding=encoding, raw=raw)) != "":
            c += ct
        if not raw:
            c = c[0:-1]
        return c


def getline(getch_fn: Optional[Callable[[], str]] = None, encoding: str = None, raw: bool = True) -> str:
    line: str = ""
    if getch_fn is not None:
        # keep reading until a return or newline entered
        while (lt := getch_fn()) not in ("\r", "\n"):
            line += lt
    else:
        # keep reading until a return or newline entered
        while (lt := getch(NONBLOCK=False, encoding=encoding, raw=raw)) not in ("\r", "\n"):
            line += lt
    return line


def flush() -> str:
    r: str = ""
    while (c := getch(NONBLOCK=True, raw=False)) != "":
        r += c
    return r
