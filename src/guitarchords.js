/*
Draw an empty grid 
*/



class GChord {

		static _open() {
			return  {
				C : {
					frets: 		[-1,3,2,0,1,0],
					fingers: 	[0,3,2,0,1,0]
				},
				C7 : {
					frets: 		[-1,3,2,3,1,0],
					fingers:	[0,3,2,4,1,0]
				},
				Cmaj7 : {
					frets:		[-1,3,2,0,0,0],
					fingers:	[0,3,2,0,0,0]
				},
				Cadd9 : {
					frets:		[-1,3,2,0,3,0]
				},
				D : {
					frets: 		[-1,-1,0,2,3,2],
					fingers:	[0,0,0,1,3,2]
				},
				Dm :  {
					frets: 		[-1,-1,0,2,3,1],
					fingers:	[0,0,0,2,3,1]
				},
				D7 :  {
					frets: 		[-1,-1,0,2,1,2],
					fingers:	[0,0,0,2,1,3]
				},
				Dm7	: {
					frets:		[-1,-1,0,2,1,1],
					fingers:	[0,0,0,2,1,1]
				},
				Dmaj7 : {
					frets:		[-1,-1,0,2,2,2],
					fingers:	[0,0,0,1,2,3]
				},
				Dsus4 :  {
					frets: 		[-1,-1,0,2,3,3],
					fingers:	[0,0,0,1,3,2]
				},
				E :  {
					frets: 		[0,2,2,1,0,0],
					fingers:	[0,2,3,1,0,0]
				},
				Em :  {
					frets: 		[0,2,2,0,0,0],
					fingers:	[0,2,3,0,0,0]
				},
				Em7: {
					frets:		[0,2,0,0,0,0],
					fingers:	[0,2,0,0,0,0]
				},
				E7 :  {
					frets: 		[0,2,0,1,0,0],
					fingers:	[0,2,0,1,0,0]
				},
				F :  {
					frets: 		[-1,-1,3,2,1,1],
					fingers:	[0,0,3,2,1,1]
				},
				Fmaj7: {
					frets:		[-1,-1,3,2,1,0],
					fingers:	[0,0,3,2,1,0]
				},
				Fm : {
					frets: 		[-1,-1,3,1,1,1],
					fingers:	[0,0,3,1,1,1]		
				},
				G :  {
					frets: 		[3,2,0,0,0,3],
					fingers:	[2,1,0,0,0,3]
				},
				G7 : {
					frets: 		 [3,2,0,0,0,1],
					fingers:	[3,2,0,0,0,1]
				},
				Gmaj7 : {
					frets:		[3,2,0,0,0,2],
					fingers:	[3,2,0,0,0,1]
				},
				A :  {
					frets: 		[-1,0,2,2,2,0],
					fingers:	[0,0,1,2,3,0]
				},
				Am :  {
					frets: 		[-1,0,2,2,1,0],
					fingers:	[0,0,2,3,1,0]
				},
				Am7 : {
					frets:		[-1,0,2,0,1,0],
					fingers:	[0,0,2,0,1,0]
				},
				A7 : {
					frets: 		 [-1,0,2,0,2,0],
					fingers:	[0,0,1,0,3,0]
				},
				Amaj7 : {
					frets:		[-1,0,2,1,2,0],
					fingers:	[0,0,2,1,3,0]
				},
				Asus4 :  {
					frets: 		[-1,0,2,2,3,0],
					fingers:	[0,0,1,2,3,0]
				},
				A7sus4: {
					frets:		[-1,0,2,0,3,0],
					fingers:	[-1,0,1,0,3,0]
				},
				Asus2 : {
					frets:		[-1,0,2,2,0,0],
					fingers:	[0,0,1,2,0,0]
				},
				Bm : {
					frets:		[-1,-1,4,4,3,2],
					fingers:	[0,0,3,4,2,1]
				},
				B7 : {
					frets: 		 [-1,2,1,2,0,2],
					fingers:	[0,2,1,3,0,4]
				}
			}
		}

		static _barre() {
			return {
		/*
		Declare barre chords here by type.  The data structure takes the form:
	
		<root string> : {
			base: <lowest chord that can be drawn at this root>
					This can be shown as <NOTE#> or <NOTEb>; doesn't matter.
			_<type> : {
				frets:   [array of frets for <base> chord],
				fingers: [fingering description for <base> chord]
			}
		}
	
		*/
			E : {
				base: 'F',
				_major :   {
					frets: 		[1,3,3,2,1,1],
					fingers:	[1,3,4,2,1,1]
				},
				_m: 	{
					frets:		[1,3,3,1,1,1],
					fingers:	[1,3,4,1,1,1]
				},
				_7: {
					frets:		[1,3,1,2,1,1],
					fingers:	[1,3,1,2,1,1]
				},
				_m7: {
					frets:		[1,3,1,1,1,1],
					fingers:	[1,3,1,1,1,1]
				},
				_maj7: {
					frets:		[1,3,2,2,1,1],
					fingers:	[1,4,2,3,1,1]
				},
				_sus4: {
					frets:		[1,3,3,3,1,1],
					fingers:	[1,2,3,4,1,1]
				},
				_7sus4: {
					frets:		[1,3,1,3,1,1],
					fingers:	[1,2,1,4,1,1]
				}
			},
			A : {
				base:	'A#',
				_major:	{
					frets:   [-1,1,3,3,3,1],
					fingers: [0,1,3,3,3,1]
					},
				_m: {
					frets:	[-1,1,3,3,2,1],
					fingers:[0,1,3,4,2,1],
				},
				_7: {
					frets: 	[-1,1,3,1,3,1],
					fingers:[-1,1,3,1,4,1]
				},
				_m7: {
					frets:	[-1,1,3,1,2,1],
					fingers:[0,1,3,1,2,1]
				},
				_maj7: {
					frets:  [-1,1,3,2,3,1],
					fingers:[-1,1,3,2,4,1] 
				},
				_sus4: {
					frets:  [-1,1,3,3,4,1],
					fingers:[0,1,2,3,4,1]
				},
				_sus2: {
					frets:  [-1,1,3,3,1,1],
					fingers:[-1,1,3,4,1,1]
				},
				_7sus4: {
					frets:	[-1,1,3,1,4,1],
					fingers:[-1,1,3,1,4,1]
				}
			}
		}
	}

 
  static defaultOptions() {
  	return {
  		fillContainer : false, // if true, draw the canvas to fill the parent container.
  		containerSizing : {
  		/* For container sizing.  Divide canvas width by the number here to get the
  		   relevant sizing */
  			stringSpace: 7,
  			note: 20,
  			x: 23,
  			fingers: 24,
  			fingersMinimum: 4 // Minimum font size for showing fingering.  
  		},
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
  
  get headingElement() {
  	return this._headingElement;
  }
  
  set headingElement(value) {
    this._headingElement = value;
  }
  
  get canvasElement() {
  	return this._canvasElement;
  }
  
  set canvasElement(value) {
  	this._canvasElement = value;
  }
  
  constructor(elementId, name, options) {
    this.elementId = elementId;
    this.name=name;
    this.options = options;
  }
  
  registerResizeHandler(f, a){
	window.onresize = this.onResize.bind(this,f,a);
  }

  onResize(f,a){
	this[f](a);
  }
	
  prepareCanvas() {
    let chordiv = document.getElementById(this.elementId);  
  	if (this.canvasElement !== undefined ) {
  		// we are redrawing
  		this.canvasElement.parentNode.removeChild(this.canvasElement);
  	} else {
		// we are drawing for the first time.
		chordiv.setAttribute("class", "chorddiv");
		this.headingElement = document.createElement("h3");
		if (this.name !== undefined) this.headingElement.innerHTML = this.name;
		 // put every element in dom div > text + canvas
		chordiv.appendChild(this.headingElement);
	}
  	if ( this.options.fillContainer ){
  		// we should fill the container element dynamically rather than using a fixed size.
  		let headerStyles = window.getComputedStyle(this.headingElement);
  		let margin = parseFloat(headerStyles['marginTop']) +
  					 parseFloat(headerStyles['marginBottom']);
  		let headerHeight = Math.ceil(this.headingElement.offsetHeight + margin);
  		let size = (chordiv.clientWidth > (chordiv.clientHeight - headerHeight)) ? 	
  					(chordiv.clientHeight - headerHeight) :
  					 chordiv.clientWidth;
  		if ( size < 0 ) size = 0;
  		this.options.canvas.width = this.options.canvas.height = size;
  		this.options.grid.stringSpace = size / this.options.containerSizing.stringSpace;
  		this.options.note.radius = size / this.options.containerSizing.note;
  		this.options.x.width = size / this.options.containerSizing.x;
  	}
    this.canvasElement = document.createElement("canvas");
    this.canvasElement.setAttribute("width", this.options.canvas.width);
    this.canvasElement.setAttribute("height", this.options.canvas.height);
    chordiv.appendChild(this.canvasElement);
    //parent.appendChild(chordiv);
    // draw on canvas
    this.ctx = this.canvasElement.getContext('2d');
    this.grid();
  }

  draw(chordAsArray) {
	if (( this.options.fillContainer ) && 
		( this.canvasElement === undefined)) {
		// only set this up first time around.
		this.registerResizeHandler("draw", chordAsArray);
	}
  	this.prepareCanvas();
    if (chordAsArray !== undefined) {
    	this.drawChord(chordAsArray);
  	}
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
		
		// Set up dynamic redraw event listener if necessary
		if (( this.options.fillContainer ) && 
			( this.canvasElement === undefined)) {
			// only set this up first time around.
			this.registerResizeHandler("drawChord", allnotes);
		}
			
		// Prepare our canvas
		this.prepareCanvas();

		/* 
			Check and rebase our chord if necessary
		*/
		if ( extremes.high > 5) {
			frets = frets.map(function e(value) {
				if (value > 0)
					return value - ( extremes.low - 1)
				else
					return value;
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
	
	getChord(description) {
	 /* 
	 Gets a chord based on the description given.
	 
	 "description" is a JSON object, defined as:
	 description : {
	 	root      	: Root note of the chord.
	 	type      	: "type" of chord: eg. major, minor, 7, m7, maj7, sus4, 7sus4, sus2.  
	 	rootString  : String on which the root note sits, given as a letter.  Optional; if this
	 				  isn't provided, the code will just give the first thing it can find.
	 				  This is ignored if you specify an "open" fingering.
	 	fingering	: "open" or "barre".  Purposely done as a string so we can add 
	 				  extra options at a later date.  Optional: if this isn't provided, 
	 				  the code will try open and if that doesn't work, barre.
	 }
	 
	 Returns false if a chord cannot be generated based on the requirements given, or an object
	 suitable for feeding into drawChord.
	 
	 */
	 		
	    /* 
	     	Variable/constant declaration
	    */
		 const _NOTESEQUENCE = [['A'],
					['A#', 'Bb'],
					['B'],
					['C'],
					['C#','Db'],
					['D'],
					['D#','Eb'],
					['E'],
					['F'],
					['F#', 'Gb'], 
					['G'], 
					['G#','Ab']];	
		Object.freeze(_NOTESEQUENCE);	
		
		var result = false;	
		/* First thing's first: make sure our inputs are sane */
		description.fingering += "";
		description.root = description.root.charAt(0).toUpperCase() + description.root.slice(1);
		description.type = (typeof description.type === 'string' ? description.type.toLowerCase() : 'major');
		
	
		/* 
		  Logic
		*/
		
		switch ( description.fingering.toUpperCase() ) {
			case "OPEN": 
				result = _openGenerator(description.root, description.type);
				break;
			case "BARRE":
			case "MOVEABLE": 
				result = _barreGenerator(description.root, description.type, description.rootString);
				break;
			default:
				result = _openGenerator(description.root, description.type) || 
						 _barreGenerator(description.root, description.type, description.rootString);
		}
		
		return result;
	
		/* 
			Internal functions
		*/
		
		function _openGenerator(root, type){
			var result = false;
			var chord = root + ((type != 'major') ? type : '');
			if ( ( typeof GChord._open()[chord] == 'object')) {
				result = GChord._open()[chord];
			}
			return result;
		}
		
		/* 
		 I am damned if I'm going to draw out every barre chord structure for major, minor, 7th 
		 and so on!  This logic will generate it for me.
		*/

		function _barreGenerator(root, type, rootString){
			/*
			Return the barre chord fingering for the <root><type> chord based at string <rootString>
			Returns false if a chord can't be generated.
			
			rootString is optional; if it's not provided, return the first chord that can be returned.
			*/
			function _sanityCheck(type, rootString){
				var result = false;
				if (( typeof GChord._barre()[rootString] == 'object' ) &&
					( typeof GChord._barre()[rootString][type] == 'object' ) &&
					( Array.isArray(GChord._barre()[rootString][type].fingers) ) &&
					( Array.isArray(GChord._barre()[rootString][type].frets) ) )
					result = true;
				return result;
			}
			
			function _getNoteLocation(note){
			/*
				Given a note, return where in the note sequence it lives 
			*/
				function _isNote(e){
					return e.includes(note);
				}

				return _NOTESEQUENCE.findIndex(_isNote);
			}
			function _getRootOffset(root, rootString){
			/*
				Given the root note for a chord, get its offset for the required barre shape
			*/
				var _rootLocation = _getNoteLocation(root);
				var _shapeLocation = _getNoteLocation(GChord._barre()[rootString].base);
				if ( _rootLocation >= _shapeLocation )
					return _rootLocation - _shapeLocation;
				else 
					return _NOTESEQUENCE.length - _shapeLocation + _rootLocation;
			}
			function _calculateFrets(offset, frets) {
				return frets.map(function e(f) {
					if ( f > 0 )
						return f + offset;
					else
						return f;
					})
			}
			
			var result = false;
				
			if ( typeof rootString === 'string') {
				rootString = rootString.toUpperCase();
				if ( _sanityCheck('_' + type, rootString)) {
					result = {};
					result.fingers = GChord._barre()[rootString]['_'+type].fingers;
					result.frets = _calculateFrets(_getRootOffset(root, rootString), GChord._barre()[rootString]['_'+type].frets);
				}
			} else {
				var roots = Object.keys(GChord._barre());
				for (var i = 0; i < roots.length; i++) {
					result = _barreGenerator(root, type, roots[i]);
					if ( result ) { break; }
				}
			}
			return result;
		}
		
	}
}


