import os, subprocess
import shutil

os.system('npm install && tsc')

shutil.rmtree('src')

os.system('ren dist src')
os.remove('package-lock.json')