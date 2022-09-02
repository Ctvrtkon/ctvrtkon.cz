import os
from glob import glob



for file in glob("./post/*.*md"):
    with open(file, "r") as fh:
        content = fh.read()
    print(content)
    if not "time: " in content:
        lines = content.splitlines()
        for no, line in enumerate(lines):
            if line.startswith("date:"):
                lines = lines[:no] + [line.replace("date:", "time:")] + lines[no:]
                break
        with open(file, "w") as fh:
            fh.write("\n".join(lines))