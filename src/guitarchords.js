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
		x: { width: 6 },
		fingers: {
			draw: true,
			multiplier: 1.2,
			font: "sans-serif",
			style: "bold"
		}
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
  
   /* Draw finger on a given string/fret */

	drawFinger(string, fret, finger) {
		var fingerSettings = this.options.fingers;
		if ( fingerSettings.draw ){
			let ss = this.options.grid.stringSpace;
			var radius = this.options.note.radius;
			let ctx = this.ctx;
			var s = ctx.fillStyle;
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.font = fingerSettings.style + 
						" " + 
						Math.ceil(radius * fingerSettings.multiplier) + "px " +
						fingerSettings.font;
			ctx.fillText(finger, string * ss + ss, fret * ss + ss / 2 );
			ctx.fillStyle = s;
    	}
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
	drawBarre(barreDescription) {
	/*
		barreDescription is an object of the form:
		{
		firstString: first string to barre
		lastString: last string to barre 
		fret: fret
		}
	*/
		let ss = this.options.grid.stringSpace;
		var radius = this.options.note.radius;
		let ctx = this.ctx;
		ctx.beginPath();
		ctx.arc(barreDescription.firstString * ss + ss, 
				barreDescription.fret * ss + ss / 2, 
				radius, 
				0, 
				2 * Math.PI, 
				true);
		ctx.fillRect(barreDescription.firstString * ss + ss, 
					 barreDescription.fret * ss + ss / 2 - radius, 
					 (barreDescription.lastString - barreDescription.firstString) * ss, 
					 2 * radius);
		ctx.arc(barreDescription.lastString * ss + ss, 
				barreDescription.fret * ss + ss / 2, 
				radius, 
				0,
				2 * Math.PI, 
				true);
		ctx.fill();
		ctx.closePath();
	}
	
	drawBase(fret) {
	/*
		Write out our base fret on chords which are played higher up the fretboard.
	*/
		var fingerSettings = this.options.fingers;
		let ss = this.options.grid.stringSpace;
		var radius = this.options.note.radius;
		let ctx = this.ctx;
		var s = ctx.fillStyle;
		ctx.fillStyle = "black";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.font = fingerSettings.style + 
					" " + 
					Math.ceil(radius * fingerSettings.multiplier) + "px " +
					fingerSettings.font;
		ctx.fillText(fret, ss - ss/2 , ss * 2 );
		ctx.fillStyle = s;
	}
	/* 
		Find barres in a given chord description 
	
		Return an array of objects describing every barre.
	*/
	detectBarres(chord){
		var result = [];
		for (var finger = 1; finger <= 4; finger++) {
			if ( chord.fingers.indexOf(finger) != chord.fingers.lastIndexOf(finger)) {
				// there is a barre
				result.push({
					firstString: chord.fingers.indexOf(finger),
					lastString: chord.fingers.lastIndexOf(finger),
					fret: chord.frets[chord.fingers.indexOf(finger)]
				});
			}
		}
		return result;
	}
	
	getFretExtremes(frets){
	/* 
		Given a chord played on (frets), tell us which is the highest & lowest fret played
	*/
	var result = { low: 99, high: 0 };
		for (let i = 0; i < frets.length; i++){
			if ((frets[i] > 0) &&
				(frets[i] < result.low))
				result.low = frets[i];
			if ( frets[i] > result.high )
				result.high = frets[i];
		}	
		return result;
	}
	
  /*
  Draw a whole chord
  allnotes is a JSON object comprising:
    frets:  array of integer  with -1 for mutted string, 0 for open string, fret value
    e.g. : [-1,0,2,2,1,0]
    fingers (optional) : array of integer showing which fingers are applied to which string.
    
    Alternatively, call it with just a simple array and this will be interpreted as an array of frets.
    
    Barres will be drawn automatically if fingering is provided.
  */
	drawChord(allnotes) {
		var frets = [];
		var barres = [];
		if ( typeof allnotes.frets !== 'undefined') {
			frets = allnotes.frets
		} else {
			frets = allnotes
		}
		/*
			First up, get our fret extremes.  We're going to have to renumber our chord
			if they're out of range.
		*/
		var extremes = this.getFretExtremes(frets);
		
		/* 
			Check and rebase our chord if necessary
		*/
		if ( extremes.high > 5) {
			frets = frets.map(function e(value) {
				if (value > 0)
					return value - ( extremes.low - 1)
				else
					return 0;
				});
			this.drawBase(extremes.low);
		}
		// Now draw all our notes.
		for (let i = 0; i < 6; i++) {
			if ( frets[i] >= 0 ) {
				this.drawNote(i, frets[i]);
			} else {
				this.drawX(i);
			}
		}
		if ( typeof allnotes.fingers !== 'undefined') {
			// Next, check for and overlay barres.
			var barres = this.detectBarres({frets: frets,
											fingers: allnotes.fingers});
			for ( let i = 0; i < barres.length; i++){
				this.drawBarre(barres[i])
			}
			// Finally, overlay fingering.
			for ( let i = 1; i <= 4; i++) {
				if ( allnotes.fingers.includes(i) )
					this.drawFinger(allnotes.fingers.indexOf(i), 
									frets[allnotes.fingers.indexOf(i)],
									i);
			}
		}
	}
}


