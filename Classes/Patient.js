class Patient {
	#namePat;
	#agePat;
	#phoneNumberPat;
	#addressPat;
	constructor(namePat, agePat, phoneNumberPat, addressPat) {
		this.#namePat        = namePat;
		this.#agePat         = agePat;
		this.#phoneNumberPat = phoneNumberPat;
		this.#addressPat     = addressPat;
	};
	getPatientData() {
		return {
			namePat            : this.#namePat,
			agePat             : this.#agePat,
			phoneNumberPat     : this.#phoneNumberPat,
			addressPat         : this.#addressPat
		};
	};
	showPatName() {
		return this.#namePat;
	};
	showPatientInfo(){
		return `<b>Name:</b> ${this.#namePat}<br><b>Age:</b> ${this.#agePat}<br><b>Phone number:</b> ${this.#phoneNumberPat}<br><b>Addess:</b> ${this.#addressPat}`;
	};
};

export {Patient}