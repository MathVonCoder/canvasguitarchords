/*
Draw an empty grid 
*/



class GChord {

 
  static defaultOptions() {
  	return {
		canvas: {
		  width: 140, height: 140
		},
		grid: {
		  visible: true,
		  stringSpace: 20
		},
		note: { radius: 7 },
		x: { width: 6 }
	}
  }

  get elementId() {
  	return this._elementId;
  }
  set elementId(value) {
  	this._elementId = value;
  }
  
  get name(){
  	return this._name;
  }
  
  set name(value) {
  	this._name = value;
  }
  
  get options(){
  	return this._options;
  }
  set options(value) {
  	if ( value === undefined ) {
  		this._options = GChord.defaultOptions();
  	} else {
  		this._options = {...GChord.defaultOptions(),...value}
  	}
  }
  
  get ctx() {
  	return this._ctx;
  }
  set ctx(value) {
  	this._ctx = value;
  }
  
  constructor(elementId, name, options) {
    this.elementId = elementId;
    this.name=name;
    this.options = options;
  }

  draw(chordAsArray) {
    let chordiv = document.getElementById(this.elementId);    
    chordiv.setAttribute("class", "chorddiv");
    let chordtext = document.createElement("h3");
    if (this.name !== undefined) chordtext.innerHTML = this.name;
    let canvaschild = document.createElement("canvas");
    canvaschild.setAttribute("width", this.options.canvas.width);
    canvaschild.setAttribute("height", this.options.canvas.height);
    // put every element in dom div > text + canvas
    chordiv.appendChild(chordtext);
    chordiv.appendChild(canvaschild);
    //parent.appendChild(chordiv);
    // draw on canvas
    this.ctx = canvaschild.getContext('2d');
    this.grid();
    if (chordAsArray !== undefined)    this.drawChord(chordAsArray);
  }

  grid() {

    let ctx = this.ctx;

    let ss = this.options.grid.stringSpace;
  
    ctx.beginPath();
  
    // silet
    ctx.moveTo(ss, ss - 1);
    ctx.lineTo(6 * ss, ss - 1);
    ctx.moveTo(ss, ss);
    ctx.lineTo(6 * ss, ss);
    // vertical
    for (let i = 0; i < 6; i++) {
      ctx.moveTo(i * ss + ss, ss);
      ctx.lineTo(i * ss + ss, 6 * ss);
    }
    // horizontal
    for (let i = 0; i < 6; i++) {
      ctx.moveTo(ss, i * ss + ss);
      ctx.lineTo(6 * ss, i * ss + ss);
    }
  
    ctx.closePath();
    ctx.stroke();
  }
  
  /*
  Draw a rounded shape on given string and fret
  */
  drawNote(string, fret) {
    let ss = this.options.grid.stringSpace;
    var radius = this.options.note.radius;
    let ctx = this.ctx;

    ctx.beginPath();
    ctx.arc(string * ss + ss, fret * ss + ss / 2, radius, 0, 2 * Math.PI, true);
    if (fret === 0) {  // unfretted string
      ctx.stroke();
    }
    else ctx.fill();
    ctx.closePath();
  }
  
  /*
  Draw an X for mutted string
  */
  drawX(string) {

    let ss = this.options.grid.stringSpace;
    let xw = this.options.x.width;
    let ctx = this.ctx;

    ctx.beginPath();
    ctx.moveTo(string * ss + ss - xw, ss / 2 - xw);
    ctx.lineTo(string * ss + ss + xw, ss / 2 + xw);
    ctx.moveTo(string * ss + ss + xw, ss / 2 - xw);
    ctx.lineTo(string * ss + ss - xw, ss / 2 + xw);
    ctx.stroke();
    ctx.closePath();
  }
  
  /*
  Draw a rounded shape on given string and fret
  */
  drawBar(string, fret) {
    let ss = this.options.grid.stringSpace;
    var radius = this.options.note.radius;
    let ctx = this.ctx;

    ctx.beginPath();
    ctx.arc(string * ss + ss, fret * ss + ss / 2, radius, 0, 2 * Math.PI, true);
    ctx.fillRect(string * ss + ss, fret * ss + ss / 2 - radius, (5 - string) * ss, 2 * radius);
    ctx.arc(5 * ss + ss, fret * ss + ss / 2, radius, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.closePath();
  }
  
  /*
  Draw a whole chord
  allnotes is an array of integer
  with -1 for mutted string, 0 for open string, fret value
  e.g. : [-1,0,2,2,1,0]
  */
  drawChord(allnotes) {

    for (let i = 0; i < 6; i++) {
      let fret = allnotes[i];
      // check if there is a notation like '2-' meaning bar on 2nd fret
      if (typeof (fret) === 'string' && fret.includes("-")) {
        let fretbar = fret.replace('-', '');      
        this.drawBar(i, fretbar);
      }
      else if (fret >= 0) this.drawNote(i, fret);
      else this.drawX(i);
    }
  }

}


