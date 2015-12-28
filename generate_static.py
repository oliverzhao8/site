import re
import os
import copy

file_names = ["home", "about", "portfolio"]
base_file = "base_file.html"
static_dir = './static'
if not os.path.exists(static_dir):
    os.makedirs(static_dir)
with open(base_file, 'r') as myfile:
    base_file_info = myfile.read()
    prefix = "loadRoute\(\'"
    suffix = "\'\)\;"
    clean_prefix = prefix.replace("\\", "")
    clean_suffix = suffix.replace("\\", "")
    regex = re.compile(r"loadRoute\((.*?)\)\;")
    for file_name in file_names:
        new_file_info = re.sub(regex, clean_prefix + "/" + file_name + clean_suffix, base_file_info)
        with open(static_dir+"/"+file_name+".html", 'w+') as f:
            f.write(new_file_info)
