
from pathlib import Path
import shutil

folder = Path("static/photos")

# Find all JPG photos
photos = sorted(
    list(folder.glob("*.jpg")) +
    list(folder.glob("*.jpeg")),
    key=lambda p: p.name.lower()
)

if not photos:
    print("No JPG photos found!")
    raise SystemExit

# Copy photos to the filenames expected by the website
mapping = {
    "cover.jpg": 0,
    "theatre.jpg": 1,
    "rose-garden.jpg": 2,
    "portrait.jpg": 3,
    "photo1.jpg": 4,
    "photo2.jpg": 5,
    "photo3.jpg": 6,
    "photo4.jpg": 7,
}

for new_name, index in mapping.items():
    source = photos[index % len(photos)]
    destination = folder / new_name
    shutil.copy2(source, destination)
    print(f"Created: {new_name} from {source.name}")

print("\nAll photo filenames are ready!")
