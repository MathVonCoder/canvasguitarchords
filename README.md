# canvasguitarchords
Vanilla Javascript function to draw guitar chords on canvas

very early version, suited for 150x150 pixel canvas
raw manipulation of the `canvas.context` to enable direct manipulation
* usage *
```
var aminor = document.getElementById('aminor'); // aminor is an html canvas
let aminorctx = aminor.getContext('2d');
grid(aminorctx);
drawChord(aminorctx, [-1,0,2,2,1,0]);   // -1 for mutted string, 0 for open string
```

see example/index.html for complete code