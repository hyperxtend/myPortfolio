import React from 'react';
// Creates an array for my skills
const skills = ["Python","HTML","CSS","JavaScript","React JavaScript", "Express JavaScript","Node JavaScript", "jQuery","Microsoft Office","Fashion Design","Adobe Photoshop","First Aid - Level 2"];
// Creates an array for my hobbies 
const hobb = ["Music", "Photography", "Art", "Reading", "Drawing", "Guitar"];
// Exports & returns my class component to be rendered
export default class MyInts extends React.Component{
	render(){
		return(
			// Structure of my content
			<div id="theInts" >
			<div id="skills">
			<h3><u>Qualifications:</u></h3>
		{/*Writes all of my items from the array into a list*/}
			<ul id="quailList">
				<div className=" active  progress-bar-striped progress-bar progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: "83%"}}><li className="theSkills">Python</li></div><br/>
				<div className=" active  progress-bar-striped progress-bar progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: "76%"}}><li className="theSkills">HTML</li></div><br/>
					<div className=" active  progress-bar-striped progress-bar progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}><li className="theSkills">CSS</li></div><br/>
						<div className=" active  progress-bar-striped progress-bar progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: "73%"}}><li className="theSkills">BootStrap</li></div><br/>
				<div className=" active  progress-bar-striped progress-bar progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: "67%"}}><li className="theSkills">JavaScript</li></div><br/>
				<div className=" active  progress-bar-striped progress-bar progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: "72%"}}><li className="theSkills">React JavaScript</li></div><br/>
				<div className=" active  progress-bar-striped progress-bar progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: "88%"}}><li className="theSkills">jQuery</li></div><br/>
				<div className=" active  progress-bar-striped progress-bar progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: "64%"}}><li className="theSkills">Node JavaScript</li></div><br/>
					<div className=" active  progress-bar-striped progress-bar progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: "52%"}}><li className="theSkills">Express JavaScript</li></div><br/>
				<div className=" active  progress-bar-striped progress-bar progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}><li className="theSkills">Adobe Photoshop</li></div><br/>
				<div className=" active  progress-bar-striped progress-bar progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}><li className="theSkills">First Aid - Level 2</li></div><br/>
		</ul>
			</div>
			<div id="hobb">
			<h3><u>Interests:</u></h3>
			{/*Writes all of my items from the array into a list*/}
			<ul id="hobbList">
				<li className="eachHobb">Music 	<i className="fa fa-music fa-3x"></i></li>
				<li className="eachHobb">Photography 	<i className="fas fa-camera-retro fa-3x"></i></li>
				<li className="eachHobb">Art 	<i className="fas fa-paint-brush fa-3x"></i></li>
				<li className="eachHobb">Reading 	<i className="fas fa-book-open fa-3x"></i></li>
				<li className="eachHobb">Drawing		<i className="fas fa-pen fa-3x"></i></li>
				<li className="eachHobb">Guitar 	<i className="fas fa-guitar fa-3x"></i></li>
				<li className="eachHobb">Hiking		<i className="far fa-compass fa-3x"></i></li>
		</ul>
			</div>
			</div>
			)
	}
}