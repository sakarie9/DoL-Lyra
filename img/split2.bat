@rem Argument: GIF file (with extension). 
@rem 1. Prints animation information for CanvasModel
@rem 2. Creates a spritesheet PNG with same name in same folder. Keeps original file
@rem Requires ImageMagick
@set name=%1
@magick identify -verbose -format "{frame: %%s, duration: %%T0},\n" %name%
@magick montage %name% -tile x1 -geometry "1x1+0+0<" -alpha On -background "rgba(0, 0, 0, 0.0)" -quality 100 %name:~0,-4%.png
