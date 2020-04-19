# canvasguitarchords
Vanilla Javascript function to draw guitar chords on canvas

very early version, suited for 150x150 pixel canvas
raw manipulation of the `canvas.context` to enable direct manipulation

Usage
-----
basic
```
var aminor = document.getElementById('aminor'); // aminor is an html canvas
let aminorctx = aminor.getContext('2d');
grid(aminorctx);
drawChord(aminorctx, [-1,0,2,2,1,0]);   // -1 for mutted string, 0 for open string
```
using the dictionnary 
```
var cseven = document.getElementById('cseven');
let csevenctx = cseven.getContext('2d');
grid(csevenctx);
drawChord(csevenctx, gChords.open.C7);
```
see example/index.html for complete code

![output sample](example/out.png)

Roadmap
-------
* enhance predefined common chords in dictionary
* propose a class definition
* be able to adapt to other canvas size
* propose a high level module (with chord and text)

Versions 
--------
0.1 - simple low level function, basic dictionary