const url = new URL(window.location.href);
const username = url.searchParams.get('username');

const doctorData = {
  name: "Gregory House",
  specialty: "Medicina Moderna",
  email: "house@example.com",
  phone: "123-456-7890"
};



document.getElementById("doctorName").textContent = doctorData.name;
document.getElementById("doctorSpecialty").textContent = doctorData.specialty;
document.getElementById("doctorEmail").textContent = doctorData.email;
document.getElementById("doctorPhone").textContent = doctorData.phone;

