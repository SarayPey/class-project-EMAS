import {Appointment} from './Classes/Appointment.js';
import {doctors} from './Data/doctors.js';
import {patients} from './Data/patients.js';
import {appointments} from './Data/appointments.js';

async function appoLoad() {
	var response = await fetch('./Data/appos.json');
	var appoJSON = await response.json();

	var appoList = appoJSON.map(ap => new Appointment(ap.patient, ap.doctor, ap.date, ap.time, ap.reason));
	for (let apJSON = 0; apJSON < appoList.length; apJSON++) {
		let objectAppo = appoList[apJSON];
		appointments.push(objectAppo);
	};
};

let docShow   = document.querySelector('#docShow');
let patShow   = document.querySelector('#patShow');
let appoShow  = document.querySelector('#appoShow');
let btnSubmit = document.querySelector('#btnSubmit');
let btnAppo   = document.querySelector('#appoC');
let modalAppo = document.querySelector('#appoForm');
let selPat    = document.querySelector('#pat');
let selDoc    = document.querySelector('#doc');
let inpDate   = document.querySelector('#dat');
let inpTime   = document.querySelector('#tim');
let inpReason = document.querySelector('#rea');

appoLoad();

console.log(doctors);
console.log(patients);
console.log(appointments);

function pat(){
	for (let patient in patients) {
		let element = patients[patient];
		console.log(element);
		let patData = document.createElement('p');
		patData.style.margin = '1rem';
		patData.style.backgroundColor = 'var(--c3)';
		patData.style.padding = '1rem';
		patData.style.border = '0.188rem solid';
		patData.style.borderRadius = '1rem';
		patData.style.color = 'var(--c1)';
		patData.innerHTML = element.showPatientInfo();
		if(!element){
			patData.innerHTML = 'There are no registerd patients, make one and try again!';
		}
		patShow.appendChild(patData);
	};
};

function doc(){
	for (let doctor in doctors) {
		let element = doctors[doctor];
		console.log(element);
		let docData = document.createElement('p');
		docData.style.margin = '1rem';
		docData.style.backgroundColor = 'var(--c3)';
		docData.style.padding = '1rem';
		docData.style.border = '0.188rem solid';
		docData.style.borderRadius = '1rem';
		docData.style.color = 'var(--c1)';
		docData.innerHTML = element.showDoctorInfo();
		if(!element){
			docData.innerHTML = 'There are no registered doctors, make one and try again!';
		}
		docShow.appendChild(docData);
	};
};

function appo(){
	for (let appointment in appointments) {
		let element = appointments[appointment];
		console.log(element);
		let appoData = document.createElement('p');
		appoData.style.margin = '1rem';
		appoData.style.backgroundColor = 'var(--c3)';
		appoData.style.padding = '1rem';
		appoData.style.border = '0.188rem solid';
		appoData.style.borderRadius = '1rem';
		appoData.style.color = 'var(--c1)';
		appoData.innerHTML = element.showAppointment();
		if(!element){
			appoData.innerHTML = 'There are no registered appoinments, make one and try again!';
		}
		appoShow.appendChild(appoData);
	};
};

if(patShow){
	pat();
};

if(docShow){
	doc();
};

if(appoShow){
	appo();
};

if(btnAppo){
	btnAppo.addEventListener('click', () => {
		modalAppo.showModal()
		let valPat = '';
		let optPat = undefined;
		let optDoc = undefined;
		let valDoc = '';
		for (let patient in patients) {
			optPat = document.createElement('option');
			optPat.value = patient;
			optPat.innerHTML = patients[patient].showPatName();
			selPat.appendChild(optPat);
		};
		for (let doctor in doctors) {
			optDoc = document.createElement('option');
			optDoc.value = doctor;
			optDoc.innerHTML = `${doctors[doctor].showDocName()} — ${doctors[doctor].showDocSpecialty()}`;
			selDoc.appendChild(optDoc);
		};
		selPat.addEventListener('change', () => {
			valPat = selPat.value;
			console.log(valPat);
		});
		selDoc.addEventListener('change', () => {
			valDoc = selDoc.value;
			console.log(valDoc);
		});
		btnSubmit.addEventListener('click', ()=> {
			let dateAppo = inpDate.value;
			let timeAppo = inpTime.value;
			let valAppo = new Appointment(valPat, valDoc, dateAppo, timeAppo, inpReason.value);
			console.log(valAppo);
			appointments.push(valAppo);
			for (let appointment in appointments) {
				let element = appointments[appointment];
				console.log(element);
				let appoData = document.createElement('p');
				appoData.style.margin = '1rem';
				appoData.style.backgroundColor = 'var(--c3)';
				appoData.style.padding = '1rem';
				appoData.style.border = '0.188rem solid';
				appoData.style.borderRadius = '1rem';
				appoData.style.color = 'var(--c1)';
				appoData.innerHTML = element.showAppointment();
				if (!element) {
					appoData.innerHTML = 'There are no registered appoinments, make one and try again!';
				}
				appoShow.appendChild(appoData);
			};
			modalAppo.close()
		});
	});
};

