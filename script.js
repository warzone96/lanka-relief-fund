// Configuration (මෙතන අගයන් වෙනස් කරන්න)
const GOAL_AMOUNT = 1000000; // බලාපොරොත්තු වන සම්පූර්ණ මුදල (රුපියල්)
let currentRaised = 350500; // දැනට එකතු වී ඇති මුදල (මෙය පසුව Database එකෙන් ගන්න පුළුවන්)

// Dummy Donors Data
const donors = [
    { name: "Kasun Perera", amount: 5000 },
    { name: "Anonymous", amount: 2000 },
    { name: "Sarah J.", amount: 15000 },
    { name: "Gayan & Family", amount: 1000 }
];

// 1. Progress Bar Update Function
function updateProgress() {
    // Format currency (Rs. 350,500)
    document.getElementById('current-amount').innerText = `Rs. ${currentRaised.toLocaleString()}`;
    
    // Calculate Percentage
    let percentage = (currentRaised / GOAL_AMOUNT) * 100;
    if(percentage > 100) percentage = 100; // Limit to 100%

    // Animate Bar
    document.getElementById('progress-fill').style.width = `${percentage}%`;
    document.getElementById('percent-text').innerText = `${percentage.toFixed(1)}% Funded`;
}

// 2. Load Donors List
function loadDonors() {
    const list = document.getElementById('donor-list');
    list.innerHTML = ""; // Clear loading text
    
    donors.forEach(donor => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${donor.name}</span> <span class="donor-amount">Rs. ${donor.amount.toLocaleString()}</span>`;
        list.appendChild(li);
    });
}

// 3. Modal Functions (Popup)
function openModal() {
    document.getElementById('bankModal').style.display = "flex";
}

function closeModal() {
    document.getElementById('bankModal').style.display = "none";
}

// Close modal if clicked outside
window.onclick = function(event) {
    const modal = document.getElementById('bankModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 4. Copy Account Number
function copyAccount() {
    const accNum = document.getElementById("acc-number").innerText.replace(/\s/g, ''); // Remove spaces
    navigator.clipboard.writeText(accNum).then(() => {
        alert("Account Number Copied!");
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Run on load
window.onload = () => {
    updateProgress();
    loadDonors();
};
