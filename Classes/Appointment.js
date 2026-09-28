import {doctors} from '../Data/doctors.js';
import {patients} from '../Data/patients.js';
class Appointment {
	#patient;
	#doctor;
	#date;
	#time;
	#reason;
	constructor(patient, doctor, date, time, reason) {
		this.#patient = patients[patient];
		this.#doctor  = doctors[doctor];
		this.#date    = date;
		this.#time    = time;
		this.#reason  = reason;
	};
	getAppointmentData() {
		return {
			patient     : patients.indexOf(this.#patient),
			doctor      : doctors.indexOf(this.#doctor),
			date        : this.#date,
			time        : this.#time,
			reason      : this.#reason
		};
	};
	showAppointment(){
		return `<b>Patient:</b> ${this.#patient.showPatName()}<br><b>Doctor:</b> ${this.#doctor.showDocName()}<br><b>Date:</b> ${this.#date}<br><b>Time:</b> ${this.#time}<br><b>Reason:</b> ${this.#reason}`;
	};
};

export {Appointment};