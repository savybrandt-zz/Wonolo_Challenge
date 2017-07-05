export default function parseDescription(str) {
	console.log(str)
	  var sections = str.split(":");
	  var description = {};
	  	description.tasks = sections[1].split('').splice(0, sections[1].length - 'REQUIREMENTS'.length).join('');
	  	description.requirements = sections[2].split('').splice(0, sections[2].length - 'COMPANY DESCRIPTION'.length).join('');
	  	description.company = sections[3].split('').splice(0, sections[3].length - 'TRAVEL TIPS'.length).join('');
	  	description.travel = sections[4].split('').splice(0, sections[4].length - 'ARRIVAL INSTRUCTIONS'.length).join('');
	  	description.arrival = sections[5];
	  return description;
	}
