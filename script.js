import {Appointment} from './Classes/Appointment.js';
import {doctors} from './Data/doctors.js';
import {patients} from './Data/patients.js';
import {appointments} from './Data/appointments.js';
import {specialties} from './Classes/Specialty.js';
import {Doctor} from './Classes/Doctor.js';
import {Patient} from './Classes/Patient.js';

function savePatients(){
	let patientData = patients.map(patient => patient.getPatientData());
	localStorage.setItem('patients', JSON.stringify(patientData));
};

function saveDoctors() {
	let doctorData = doctors.map(doctor => doctor.getDoctorData());
	localStorage.setItem('doctors', JSON.stringify(doctorData));
};

function saveAppointments() {
	let appointmentData = appointments.map(appointment => appointment.getAppointmentData());
	localStorage.setItem('appointments', JSON.stringify(appointmentData));
};

async function patLoad() {
	let savedPatients = localStorage.getItem('patients');
	if (savedPatients) {
		let localPatient = JSON.parse(savedPatients);

		for (let newPat of localPatient) {
			let patLocal = new Patient(newPat.namePat, newPat.agePat, newPat.phoneNumberPat, newPat.addressPat);
			patients.push(patLocal);
		}
	} else {
		const responseP = await fetch('./Data/pats.json');
		let patJSON = await responseP.json();

		let patList = patJSON.map(pa => new Patient(pa.namePat, pa.agePat, pa.phoneNumberPat, pa.addressPat));
		for (let paJSON = 0; paJSON < patList.length; paJSON++) {
			let objectPat = patList[paJSON];
			patients.push(objectPat);
		};
		savePatients();
	};
};

async function docLoad() {
	let savedDoctors = localStorage.getItem('doctors');
	if (savedDoctors) {
		let localDoctor = JSON.parse(savedDoctors);

		for (let newDoc of localDoctor) {
			let docLocal = new Doctor(newDoc.nameDoc, newDoc.specialtyDoc, newDoc.phoneNumberDoc);
			doctors.push(docLocal);
		};
	} else {
		const responseD = await fetch('./Data/docs.json');
		let docJSON = await responseD.json();

		let docList = docJSON.map(dr => new Doctor(dr.nameDoc, dr.specialtyDoc, dr.phoneNumberDoc));
		for (let doJSON = 0; doJSON < docList.length; doJSON++) {
			let objectDoc = docList[doJSON];
			doctors.push(objectDoc);
		};
		saveDoctors();
	}
};

async function appoLoad() {
	let savedAppointments = localStorage.getItem('appointments');
	if (savedAppointments) {
		let localAppointment = JSON.parse(savedAppointments)

		for (let newAppo of localAppointment) {
			let appoLocal = new Appointment(newAppo.patient, newAppo.doctor, newAppo.date, newAppo.time, newAppo.reason);
			appointments.push(appoLocal);
		}
	} else {
		const responseA = await fetch('./Data/appos.json');
		let appoJSON = await responseA.json();

		let appoList = appoJSON.map(ap => new Appointment(ap.patient, ap.doctor, ap.date, ap.time, ap.reason));
		for (let apJSON = 0; apJSON < appoList.length; apJSON++) {
			let objectAppo = appoList[apJSON];
			appointments.push(objectAppo);
		};
		saveAppointments();
	}
};

await docLoad();
await patLoad();
await appoLoad();

console.log(doctors);
console.log(patients);
console.log(appointments);

let docShow   = document.querySelector('#docShow');
let patShow   = document.querySelector('#patShow');
let appoShow  = document.querySelector('#appoShow');
let btnSubmit = document.querySelector('#btnSubmit');
let btnClose  = document.querySelector('#btnClose');

let btnAppo   = document.querySelector('#appoC');
let btnDoc    = document.querySelector('#docC');
let btnPat    = document.querySelector('#patC');

let modalDoc  = document.querySelector('#docForm');
let modalPat  = document.querySelector('#patForm');
let modalAppo = document.querySelector('#appoForm');

let selPat    = document.querySelector('#pat');
let selDoc    = document.querySelector('#doc');
let inpDate   = document.querySelector('#dat');
let inpTime   = document.querySelector('#tim');
let inpReason = document.querySelector('#rea');

let inpNamD   = document.querySelector('#namD');
let selSpe    = document.querySelector('#spe');
let inpNumD   = document.querySelector('#numD');

let inpNamP   = document.querySelector('#namP');
let inpAge    = document.querySelector('#age');
let inpNumP   = document.querySelector('#numP');
let inpAdd    = document.querySelector('#add');

function pat(){
	patShow.innerHTML = '';
	for (let patient in patients) {
		let element = patients[patient];
		console.log(element);
		let patData = document.createElement('p');
		patData.style.margin = '1rem';
		patData.style.backgroundColor = 'var(--c3)';
		patData.style.padding = '1rem';
		patData.style.border = '0.188rem solid';
		patData.style.borderRadius = '1rem';
		patData.innerHTML = element.showPatientInfo();
		patShow.appendChild(patData);
	};
};

function doc(){
	docShow.innerHTML = '';
	for (let doctor in doctors) {
		let element = doctors[doctor];
		console.log(element);
		let docData = document.createElement('p');
		docData.style.margin = '1rem';
		docData.style.backgroundColor = 'var(--c3)';
		docData.style.padding = '1rem';
		docData.style.border = '0.188rem solid';
		docData.style.borderRadius = '1rem';
		docData.innerHTML = element.showDoctorInfo();
		docShow.appendChild(docData);
	};
};

function appo(){
	appoShow.innerHTML = '';
	for (let appointment in appointments) {
		let element = appointments[appointment];
		console.log(element);
		let appoData = document.createElement('p');
		appoData.style.margin = '1rem';
		appoData.style.backgroundColor = 'var(--c3)';
		appoData.style.padding = '1rem';
		appoData.style.border = '0.188rem solid';
		appoData.style.borderRadius = '1rem';
		appoData.innerHTML = element.showAppointment();
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

if(btnDoc){
	btnClose = document.querySelector('#btnClose');
	btnSubmit = document.querySelector('#btnSubmit');
	btnDoc.addEventListener('click', () => {
		modalDoc.showModal();
		let valSpe = '';
		for (let specialty in specialties) {
			let optSpe = document.createElement('option');
			optSpe.value = specialty;
			optSpe.innerHTML = specialties[specialty].getSpec();
			selSpe.appendChild(optSpe);
			btnClose.addEventListener('click', () => {
				optSpe.remove();
			});
		};
		selSpe.addEventListener('change', () => {
			valSpe = selSpe.value;
			console.log(valSpe);
		});
		btnClose.addEventListener('click', () => {
			modalDoc.close();
		});
		btnSubmit.addEventListener('click', (ev) => {
			if(inpNamD == '' || valSpe == '' || inpNumD == ''){
				ev.preventDefault();
				alert('ALERT: There is one or more empty elements.');
			} else {
				ev.preventDefault();
				let valDoc = new Doctor(inpNamD.value, valSpe, inpNumD.value);
				console.log(valDoc);
				doctors.push(valDoc);
				saveDoctors();
				doc();
				modalDoc.close();
			};
		});
	});
};

if(btnPat){
	btnClose = document.querySelector('#btnClose');
	btnSubmit = document.querySelector('#btnSubmit');
	btnPat.addEventListener('click', () => {
		modalPat.showModal();
		btnClose.addEventListener('click', () => {
			modalPat.close();
		});
		btnSubmit.addEventListener('click', (ev) => {
			if (inpNamP == '' || inpAge == '' || inpNumP == '' || inpAdd == ''){
				alert('ALERT: There is one or more empty elements.');
				ev.preventDefault();
			} else {
				ev.preventDefault();
				let valPat = new Patient(inpNamP.value, inpAge.value, inpNumP.value, inpAdd.value);
				console.log(valPat);
				patients.push(valPat);
				savePatients();
				pat();
				modalPat.close();
			};
		});
	});
};

if(btnAppo){
	btnClose = document.querySelector('#btnClose');
	btnSubmit = document.querySelector('#btnSubmit');
	btnAppo.addEventListener('click', () => {
		modalAppo.showModal();
		let valPat = '';
		let valDoc = '';
		for (let patient in patients) {
			let optPat = document.createElement('option');
			optPat.value = patient;
			optPat.innerHTML = patients[patient].showPatName();
			selPat.appendChild(optPat);
			btnClose.addEventListener('click', () => {
				optPat.remove();
			});
		};
		for (let doctor in doctors) {
			let optDoc = document.createElement('option');
			optDoc.value = doctor;
			optDoc.innerHTML = `${doctors[doctor].showDocName()} — ${doctors[doctor].showDocSpecialty()}`;
			selDoc.appendChild(optDoc);
			btnClose.addEventListener('click', () => {
				optDoc.remove();
			});
		};
		selPat.addEventListener('change', () => {
			valPat = selPat.value;
			console.log(valPat);
		});
		selDoc.addEventListener('change', () => {
			valDoc = selDoc.value;
			console.log(valDoc);
		});
		btnClose.addEventListener('click', () => {
			modalAppo.close();
		});
		btnSubmit.addEventListener('click', (ev)=> {
			if (valPat == '' || valDoc == '' || dateAppo == '' || timeAppo == '' || inpReason == '') {
				alert('ALERT: There is one or more empty elements.');
				ev.preventDefault();
			} else {
				ev.preventDefault();
				let dateAppo = inpDate.value;
				let timeAppo = inpTime.value;
				let valAppo = new Appointment(valPat, valDoc, dateAppo, timeAppo, inpReason.value);
				console.log(valAppo);
				appointments.push(valAppo);
				saveAppointments();
				appo();
				modalAppo.close();
			};
		});
	});
};
