#!/usr/bin/env python3
import os
import subprocess

INPUT_DIR = "input_path"   # folder with APNGs
OUTPUT_DIR = "output_path" # folder for WebMs
FFMPEG_PATH = "/opt/homebrew/bin/ffmpeg"

# Set modes and their scaling
MODE_SCALE = {
    "3d": None,      # keep original size
    "gif": 10         # scale 2x for GIF mode
}

# Set the mode for this conversion (change to "gif" or "3d" as needed)
MODE = "gif"  # or "3d"

def convert_apng_to_webm(input_path, output_path, scale_factor=None):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    vf_scale = f"scale=iw*{scale_factor}:ih*{scale_factor}:flags=neighbor" if scale_factor else "scale=iw:ih:flags=neighbor"

    cmd = [
        FFMPEG_PATH,
        "-y",
        "-i", input_path,
        "-c:v", "libvpx-vp9",
        "-pix_fmt", "yuva420p",
        "-lossless", "1",
        "-auto-alt-ref", "0",
        "-arnr-maxframes", "0",
        "-row-mt", "1",
        "-tile-columns", "6",
        "-vf", vf_scale,
        output_path
    ]

    try:
        subprocess.run(cmd, check=True)
        print(f"Converted: {input_path} → {output_path}")
    except subprocess.CalledProcessError as e:
        print(f"Failed to convert {input_path}: {e}")

def main():
    scale_factor = MODE_SCALE.get(MODE)
    
    for root, _, files in os.walk(INPUT_DIR):
        for file in files:
            if file.lower().endswith(".png"):
                input_path = os.path.join(root, file)
                rel_path = os.path.relpath(input_path, INPUT_DIR)
                output_path = os.path.join(OUTPUT_DIR, os.path.splitext(rel_path)[0] + ".webm")
                convert_apng_to_webm(input_path, output_path, scale_factor)

    print("All done!")
    input("Press Enter to close...")

if __name__ == "__main__":
    main()
