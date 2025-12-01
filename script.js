// Configuration
const GOAL_AMOUNT = 1000000; 
let currentRaised = 350500; 

// Dummy Donors
const donors = [
    { name: "Kasun Perera", amount: 5000 },
    { name: "Anonymous", amount: 2000 },
    { name: "Sarah J.", amount: 15000 },
    { name: "Gayan & Family", amount: 1000 }
];

// 1. Progress Bar Update
function updateProgress() {
    document.getElementById('current-amount').innerText = `Rs. ${currentRaised.toLocaleString()}`;
    let percentage = (currentRaised / GOAL_AMOUNT) * 100;
    if(percentage > 100) percentage = 100;
    document.getElementById('progress-fill').style.width = `${percentage}%`;
    document.getElementById('percent-text').innerText = `${percentage.toFixed(1)}% Funded`;
}

// 2. Load Donors
function loadDonors() {
    const list = document.getElementById('donor-list');
    list.innerHTML = "";
    donors.forEach(donor => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${donor.name}</span> <span class="donor-amount">Rs. ${donor.amount.toLocaleString()}</span>`;
        list.appendChild(li);
    });
}

// 3. Modal Functions
function openModal() {
    document.getElementById('bankModal').style.display = "flex";
}

function closeModal() {
    document.getElementById('bankModal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('bankModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 4. Universal Copy Function
function copyText(elementId) {
    const textToCopy = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Copied: " + textToCopy);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Init
window.onload = () => {
    updateProgress();
    loadDonors();
};
