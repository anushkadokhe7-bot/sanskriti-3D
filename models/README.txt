========================================================================
Sanskriti 3D - 3D Models Directory Instructions
========================================================================

Place your 3D assets in binary GLTF format (.glb) into this folder using
the exact filenames configured in js/script.js:

  - ajanta.glb
  - ellora.glb
  - konark.glb
  - redfort.glb
  - tajmahal.glb

RECOMMENDED FREE SOURCES FOR FREE / CC-LICENSED 3D MODELS:
  1. Sketchfab (https://sketchfab.com) - Search "Taj Mahal GLB" or "Ajanta Cave"
  2. Wikimedia Commons (https://commons.wikimedia.org)
  3. NASA / Smithsonian Open Access Collections

NOTE ON FALLBACK MECHANISM:
If no .glb model file is placed in this folder, Sanskriti 3D automatically detects 
the missing file and generates a clean, procedural 3D architectural 
placeholder (Base + Shaft + Dome) with standard PBR shading inside Three.js.