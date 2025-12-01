// Configuration
const GOAL_AMOUNT = 1000000; 

// ==========================================
// Donation List එක මෙතන අතින් දාන්න (Update Here)
// ==========================================
const donors = [
    { name: "Amal Perera", amount: 5000 },
    { name: "Kamal Gunarathne", amount: 2000 },
    // අලුත් අයව මෙතනට යටින් එකතු කරන්න:
    // { name: "Aluth Kena", amount: 1000 },
];

// ==========================================
// පහළ කොටස් වෙනස් කරන්න එපා (Logic)
// ==========================================

let currentRaised = 0;

function calculateTotal() {
    currentRaised = 0;
    donors.forEach(donor => {
        currentRaised += donor.amount;
    });
    updateUI();
}

function updateUI() {
    // 1. Progress Bar Update
    document.getElementById('current-amount').innerText = `Rs. ${currentRaised.toLocaleString()}`;
    
    let percentage = (currentRaised / GOAL_AMOUNT) * 100;
    if(percentage > 100) percentage = 100;
    
    document.getElementById('progress-fill').style.width = `${percentage}%`;
    document.getElementById('percent-text').innerText = `${percentage.toFixed(1)}% Funded`;

    // 2. Donor List Update
    const list = document.getElementById('donor-list');
    list.innerHTML = "";
    
    if (donors.length === 0) {
        list.innerHTML = `<li style="justify-content: center; color: #aaa; font-style: italic;">No donations yet. Be the first hero! ❤️</li>`;
    } else {
        // අලුත්ම අය උඩින් පෙන්වන්න (Reverse)
        donors.slice().reverse().forEach(donor => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${donor.name}</span> <span class="donor-amount">Rs. ${donor.amount.toLocaleString()}</span>`;
            list.appendChild(li);
        });
    }
}

// Modal Functions
function openModal() { document.getElementById('bankModal').style.display = "flex"; }
function closeModal() { document.getElementById('bankModal').style.display = "none"; }
window.onclick = function(event) { if (event.target == document.getElementById('bankModal')) closeModal(); }
function copyText(id) {
    navigator.clipboard.writeText(document.getElementById(id).innerText).then(() => alert("Copied!"));
}

// Start
window.onload = () => {
    calculateTotal();
};
