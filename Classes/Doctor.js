import { specialties } from './Specialty.js';

class Doctor {
	#nameDoc;
	#specialtyDoc;
	#phoneNumberDoc;
	constructor(nameDoc, specialtyDoc, phoneNumberDoc) {
		this.#nameDoc = nameDoc;
		this.#specialtyDoc = specialties[specialtyDoc];
		this.#phoneNumberDoc = phoneNumberDoc;
	};
	showDocName() {
		return this.#nameDoc;
	};
	showDocSpecialty() {
		return this.#specialtyDoc.name;
	};
	showDoctorInfo(){
		return `Name: ${this.#nameDoc}<br>Specialty: ${this.#specialtyDoc.name}<br>Phone number: ${this.#phoneNumberDoc}`;
	};
};

export {Doctor};