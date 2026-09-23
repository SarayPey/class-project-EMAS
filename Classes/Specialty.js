class Specialty {
	constructor(name) {
		this.name = name;
	}
	getSpec(){
		return `${this.name}`;
	}
}

let psychologist  = new Specialty('Psycologist');
let genSurgeon    = new Specialty('General Surgeon');
let dermatologist = new Specialty('Dermatologist');
let dentist       = new Specialty('Dentist');

let specialties = [psychologist, genSurgeon, dermatologist, dentist];

export{specialties};