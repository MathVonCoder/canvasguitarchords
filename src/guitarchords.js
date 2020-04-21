/*
Draw an empty grid 
*/



class GChord {

  static defaultOptions = {
    canvas : {
    width : 140 ,height:140},
    grid : {
        visible : true,
        stringSpace : 20
    },
    note : { radius : 7},
    x : { width : 6}
}

  constructor(elementId,options)
  {
    this.elementId= elementId;
    this.options = options;

    if (options === undefined) options = defaultOptiont;
  }
}

var options = {
  canvas : {
  width : 140 ,height:140},
  grid : {
      visible : true,
      stringSpace : 20
  },
  note : { radius : 7},
  x : { width : 6}
}


function grid(ctx) {
    
    let ss = options.grid.stringSpace;

    ctx.beginPath();
    
    // silet
    ctx.moveTo(ss,ss-1);
    ctx.lineTo(6*ss,ss-1);
    ctx.moveTo(ss,ss);
    ctx.lineTo(6*ss,ss);
    // vertical
    for (i=0;i<6;i++) {
     ctx.moveTo(i*ss+ss,ss);
     ctx.lineTo(i*ss+ss,6*ss);
    }
    // horizontal
    for (i=0;i<6;i++) {
     ctx.moveTo(ss,i*ss+ss);
     ctx.lineTo(6*ss,i*ss+ss);
    }        

    ctx.closePath();
    ctx.stroke();
  }

  /*
  Draw a rounded shape on given string and fret
  */
  function drawNote(ctx,string,fret)
  {
    let ss = options.grid.stringSpace; 
   var radius = options.note.radius;

    ctx.beginPath();
    ctx.arc(string*ss+ss, fret*ss+ss/2, radius, 0,2*Math.PI, true);
    if (fret === 0)  {  // unfretted string
        ctx.stroke();            
    }
    else ctx.fill();
    ctx.closePath();
  }

  /*
  Draw an X for mutted string
  */
  function drawX(ctx, string) {
    let ss = options.grid.stringSpace; 
    let xw = options.x.width;
      ctx.beginPath();
      ctx.moveTo(string*ss+ss-xw,ss/2-xw);
      ctx.lineTo(string*ss+ss+xw,ss/2+xw);
      ctx.moveTo(string*ss+ss+xw,ss/2-xw);
      ctx.lineTo(string*ss+ss-xw,ss/2+xw);
      ctx.stroke();  
      ctx.closePath();
  }

   /*
  Draw a rounded shape on given string and fret
  */
 function drawBar(ctx,string,fret)
 {
    let ss = options.grid.stringSpace; 
   var radius = options.note.radius;          
   ctx.beginPath();
   ctx.arc(string*ss+ss, fret*ss+ss/2, radius, 0,2*Math.PI, true);
   ctx.fillRect(string*ss+ss,fret*ss+ss/2-radius,(5-string)*ss,2*radius);
   ctx.arc(5*ss+ss, fret*ss+ss/2, radius, 0,2*Math.PI, true);
   ctx.fill();
   ctx.closePath();
 }

   /*
  Draw a whole chord
  allnotes is an array of integer
  with -1 for mutted string, 0 for open string, fret value
  e.g. : [-1,0,2,2,1,0]
  */
  function drawChord(ctx,allnotes) {
      for (i=0;i<6;i++)
      {
          let fret = allnotes[i];
          // check if there is a notation like '2-' meaning bar on 2nd fret
          if (typeof(fret)==='string' && fret.includes("-")) {
            let fretbar = fret.replace('-','');
            console.log('fret:'+fret);
            drawBar(ctx,i,fretbar);
          }
          else if (fret>=0) drawNote(ctx,i,fret);
          else drawX(ctx,i);
      }
  }
  