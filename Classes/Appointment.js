import {Doctor} from './Doctor.js';
import {Patient} from './Patient.js';
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
		this.#doctor = doctors[doctor];
		this.#date = date;
		this.#time = time;
		this.#reason = reason;
	};
	showAppointment(){
		return `Patient: ${this.#patient.showPatName()}<br>Doctor: ${this.#doctor.showDocName()}<br>Date: ${this.#date}<br>Time: ${this.#time}<br>${this.#reason}`;
	};
};

export {Appointment};