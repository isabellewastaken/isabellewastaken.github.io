import os

# Hey! Why are you peeking in here!
# Look, I just gotta tell you... DONT TRUST THEM.
# This isn't the best way to talk but if SEKAI Organisation tries to ask you anything, do NOT answer!!
# -Core_TRZP

# A script that creates the memes :P
# Get all files in the same folder as this script
folder = os.path.dirname(os.path.abspath(__file__))
files = sorted([
    f for f in os.listdir(folder)
    if os.path.isfile(os.path.join(folder, f)) and f != "generate.py" and f != "index.html"
])

items = "\n".join(f'    <li><a href="{f}">{f}</a></li>' for f in files)

html = f"""<!DOCTYPE html>
<html>
<head>
  <title>IWT Meme Collection</title>
</head>
<body>
  <h1>IWT Meme Collection</h1>
  <p><em>Note: This is in progress.</em></p>
  <ul>
{items if items else "    <li>No files found.</li>"}
  </ul>
</body>
</html>
"""

out = os.path.join(folder, "index.html")
with open(out, "w", encoding="utf-8") as f:
    f.write(html)

print(f"Done! {len(files)} file(s) written to index.html")