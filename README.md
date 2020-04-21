# canvasguitarchords
Vanilla Javascript function to draw guitar chords on canvas

very early version, suited for 150x150 pixel canvas
raw manipulation of the `canvas.context` to enable direct manipulation

Usage
-----
give a array of 6 strings to the drawChords function. Starting with low E string, give the fretted fret.
indicate a mutted fret with a negative value.

basic
```
var aminor = document.getElementById('aminor'); // aminor is an html canvas
let aminorctx = aminor.getContext('2d');
grid(aminorctx);
drawChord(aminorctx, [-1,0,2,2,1,0]);   // -1 or 'x' for mutted string, 0 for open string
```

for barchord quick notation use fret-. e.g. for G `['3-',5,5,4,3,3]` 3 minus on first string indicate that ther is a bar all accross the neck. bar can start on any string.

using the dictionnary 
```
var cseven = document.getElementById('cseven');
let csevenctx = cseven.getContext('2d');
grid(csevenctx);
drawChord(csevenctx, gChords.open.C7);
```

Basic support for bar chord.
Basic support for larger/smaller canvas by changing options

see example/index.html for complete code

![output sample](example/out.png)

Roadmap
-------
* enhance predefined common chords in dictionary
* propose a class definition
* propose a high level module (with chord and text)
* support for upper position on the next (e.g. A barchord start on 5 fret)
* propose mini-barchord, for powerchord for example.

* support bar chord in quick chord methods (drawChord) - done
* be able to adapt to other canvas size - done 

Versions 
--------
0.1 - simple low level function, basic dictionary, options, barchords