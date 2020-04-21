# canvasguitarchords
Vanilla Javascript function to draw guitar chords on canvas

very early version, suited for 150x150 pixel canvas
raw manipulation of the `canvas.context` to enable direct manipulation

Usage
-----
give a array of 6 strings to the drawChords function. Starting with low E string, give the fretted fret.
indicate a mutted fret with a negative value.

### basic 
with a `<div id="gmajor"></div>` in your html, just add this two lines of code
```
 var gmajor = new GChord('gmajor');
 gmajor.draw([3,2,0,0,0,3]);
```

for barchord quick notation use fret-. e.g. for G `['3-',5,5,4,3,3]` 3 minus on first string indicate that ther is a bar all accross the neck. bar can start on any string.

###  using the dictionnary 
```
var cseven = new GChord('cseven','C7');
cseven.draw(gChords.open.C7)
```
### css
generated html is very simple and allow easy css manipulation 
```
<div id="gmajor" class="chorddiv"><h3></h3><canvas width="140" height="140"></canvas></div>
```

### going further
Basic support for bar chord.
Basic support for larger/smaller canvas by changing options
see example/index.html for complete code


![output sample](example/out.png)

Roadmap
-------
* enhance predefined common chords in dictionary
* propose a high level module (with chord and text)
* support for upper position on the neck (e.g. A barchord start on 5 fret)
* propose mini-barchord, for powerchord for example.
* enable full auto-sizing based on canvas width 

* propose a class definition - done
* support bar chord in quick chord methods (drawChord) - done
* be able to adapt to other canvas size - done 

Versions 
--------
0.1 - simple low level function, basic dictionary, options, barchords
0.2 - class oriented code