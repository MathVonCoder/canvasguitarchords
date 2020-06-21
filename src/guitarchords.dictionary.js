/*
A chord definition takes the form:
<chord name> : {
		frets : An array describing six strings, starting at low E.  
			Values for individual strings are:
			<positive int> 		: Fret
			<negative int> 		: Mute
			0			    	: Open
		fingers : An array describing where to place the fingers.  Values are:
			<positive int>		: Which finger to use.  For barres, recommend you only 
								  include this for the first string of the barre.
		}
		
		Barres are drawn automatically when suitable fingering is provided.
*/

var gChords = {
    open  : {
        C : {
        	frets: 		[-1,3,2,0,1,0],
        	fingers: 	[0,3,2,0,1,0]
        },
        C7 : {
        	frets: 		[-1,3,2,3,1,0],
        	fingers:	[0,3,2,4,1,0]
        },
        Cadd9 : {
        	frets:		[-1,3,2,0,3,0]
        },
        D : {
        	frets: 		[-1,-1,0,2,3,2]
        },
        Dm :  {
        	frets: 		[-1,-1,0,2,3,1]
        },
        D7 :  {
        	frets: 		[-1,-1,0,2,1,2]
        },
        Dsus4 :  {
        	frets: 		[-1,-1,0,2,3,3]
        },
        E :  {
        	frets: 		[0,2,2,1,0,0]
        },
        Em :  {
        	frets: 		[0,2,2,0,0,0]
        },
        E7 :  {
        	frets: 		[0,2,0,1,0,0]
        },
        F :  {
        	frets: 		[1,3,3,2,1,1],
        	fingers:	[1,3,4,2,1,1]
        },
        Fm : {
        	frets: 		 [1,3,3,1,1,1],
        	fingers:	[1,3,4,1,1,1]
        	
        },
        G :  {
        	frets: 		[3,2,0,0,0,3]
        },
        G7 : {
        	frets: 		 [3,2,0,0,0,1]
        },
        A :  {
        	frets: 		[-1,0,2,2,2,0]
        },
        Am :  {
        	frets: 		[-1,0,2,2,1,0]
        },
        A7 : {
        	frets: 		 [-1,0,2,0,2,0]
        },
        Asus4 :  {
        	frets: 		[-1,0,2,2,3,0]
        },
        B : {
        	frets: 		[-1,2,4,4,4,2],
        	fingers:	[0,1,3,3,3,1]
        },
        B7 : {
        	frets: 		 [-1,2,1,2,0,2]
        },
        ABarre :{
        	frets:		[5,7,7,6,5,5],
        	fingers:	[1,3,4,2,1,1]
        }
    },
    barre : {
        F :   {
        	frets: 		[1,3,3,2,1,1],
        	fingers:	[1,3,4,2,1,1]
        },
        G :   {
        	frets: 		[3,5,5,4,3,3],
        	fingers:	[1,3,4,2,1,1]
        },
        B :   {
        	frets: 		[-1,2,4,4,4,2],
        	fingers:	[0,1,3,3,3,1]
        }
    }
    
    
}