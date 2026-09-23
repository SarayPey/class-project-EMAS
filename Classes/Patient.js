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
	showPatName() {
		return this.#namePat;
	};
	showPatientInfo(){
		return `Name: ${this.#namePat}<br>Age: ${this.#agePat}<br>Phone number: ${this.#phoneNumberPat}<br>Addess: ${this.#addressPat}`;
	};
};

export {Patient}