import {specialties} from './Specialty.js';

class Doctor {
	#nameDoc;
	#specialtyDoc;
	#phoneNumberDoc;
	constructor(nameDoc, specialtyDoc, phoneNumberDoc) {
		this.#nameDoc        = nameDoc;
		this.#specialtyDoc   = specialties[specialtyDoc];
		this.#phoneNumberDoc = phoneNumberDoc;
	};
	getDoctorData() {
		return {
			nameDoc            : this.#nameDoc,
			specialtyDoc       : specialties.indexOf(this.#specialtyDoc),
			phoneNumberDoc     : this.#phoneNumberDoc
		};
	};
	showDocName() {
		return this.#nameDoc;
	};
	showDocSpecialty() {
		return this.#specialtyDoc.name;
	};
	showDoctorInfo(){
		return `<b>Name:</b> ${this.#nameDoc}<br><b>Specialty:</b> ${this.#specialtyDoc.name}<br><b>Phone number:</b> ${this.#phoneNumberDoc}`;
	};
};

export {Doctor};