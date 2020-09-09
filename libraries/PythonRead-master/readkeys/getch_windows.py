from typing import Optional

import msvcrt


def getch_windows(NONBLOCK: bool = False, encoding: str = "utf-8", _raw: Optional[bool] = None) -> str:
    if NONBLOCK and not msvcrt.kbhit():
        return ""
    if encoding:
        return msvcrt.getch().decode(encoding)
    else:
        return msvcrt.getwch()
