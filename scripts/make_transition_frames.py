from pathlib import Path
from PIL import Image, ImageEnhance

root = Path('/home/ubuntu/projects/cat-scroll-1ea9cfbd')
assets = root / 'client/public/assets'
out = root / 'generated'
out.mkdir(exist_ok=True)
pairs = [
    ('01-hero-desktop.jpg','02-about-desktop.jpg','transition-01-02-desktop.jpg'),
    ('02-about-desktop.jpg','03-skills-desktop.jpg','transition-02-03-desktop.jpg'),
    ('03-skills-desktop.jpg','04-projects-desktop.jpg','transition-03-04-desktop.jpg'),
    ('04-projects-desktop.jpg','05-experience-desktop.jpg','transition-04-05-desktop.jpg'),
    ('05-experience-desktop.jpg','06-contact-desktop.jpg','transition-05-06-desktop.jpg'),
]
W,H = 1920,1080

def cover(im, scale, shift_x, shift_y):
    im = im.convert('RGB')
    ratio = max(W/im.width, H/im.height) * scale
    im = im.resize((round(im.width*ratio), round(im.height*ratio)), Image.Resampling.LANCZOS)
    x = max(0, min(im.width-W, round((im.width-W)/2 + shift_x*(im.width-W))))
    y = max(0, min(im.height-H, round((im.height-H)/2 + shift_y*(im.height-H))))
    return im.crop((x,y,x+W,y+H))

for first, second, name in pairs:
    a = Image.open(assets/first)
    b = Image.open(assets/second)
    # A single halfway frame: slight push out of the first, pull into the second,
    # directional parallax and a softened optical dissolve to bridge the styles.
    left = cover(a, 1.09, -0.10, 0.02)
    right = cover(b, 1.04, 0.10, -0.03)
    frame = Image.blend(left, right, 0.5)
    frame = ImageEnhance.Contrast(frame).enhance(1.03)
    frame = ImageEnhance.Color(frame).enhance(0.9)
    frame.save(out/name, quality=88, optimize=True)
    print(out/name)
