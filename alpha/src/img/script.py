# tomar un svg y adaptarlo para que pueda ser usado nativamente en JSX

import os
import sys
import re
import json
import xml.etree.ElementTree as ET

# path del archivo svg
path = sys.argv[1]

# nombre del archivo svg
name = os.path.basename(path)

# abrir el archivo svg

with open(path, 'r') as f:
    svg = f.read()

# englobar todos los elementos text en un elemento a
svg = re.sub(r'<text([^>]*)>([^<]*)<\/text>', r'<a href="www.google.com" target="_blank" rel="noreferrer"><text\1>\2<\/text></a>', svg)

print(svg)