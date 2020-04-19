/*
Draw an empty grid 
*/
function grid(ctx) {
    ctx.beginPath();
    // silet
    ctx.moveTo(20,19);
    ctx.lineTo(120,19);
    ctx.moveTo(20,20);
    ctx.lineTo(120,20);
    // vertical
    for (i=0;i<6;i++) {
     ctx.moveTo(i*20+20,20);
     ctx.lineTo(i*20+20,120);
    }
    // horizontal
    for (i=0;i<6;i++) {
     ctx.moveTo(20,i*20+20);
     ctx.lineTo(120,i*20+20);
    }        

    ctx.closePath();
    ctx.stroke();
  }

  /*
  Draw a rounded shape on given string and fret
  */
  function drawNote(ctx,string,fret)
  {
    var rayon = 7;          
    ctx.beginPath();
    ctx.arc(string*20+20, fret*20+10, rayon, 0,2*Math.PI, true);
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
      ctx.beginPath();
      ctx.moveTo(string*20+14,4);
      ctx.lineTo(string*20+26,16);
      ctx.moveTo(string*20+26,4);
      ctx.lineTo(string*20+14,16);
      ctx.stroke();  
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
          if (fret>=0) drawNote(ctx,i,fret);
          else drawX(ctx,i);
      }
  }