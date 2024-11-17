function showServices() {
    const serviceType = document.getElementById('serviceType').value;
    const specificService = document.getElementById('specificService');
    specificService.innerHTML = ''; // Clear current options

    let options = [];

    if (serviceType === 'facial') {
        options = [
            'Glow Facial',
            'Anti-Aging Facial',
            'Brightening Facial',
            'Deep Cleansing Facial'
        ];
    } else if (serviceType === 'hair') {
        options = [
            'Hair Cut',
            'Hair Color',
            'Hair Styling',
            'Hair Treatment'
        ];
    }

    // Add a default "Select..." option
    specificService.innerHTML = '<option value="">Select...</option>';

    // Add options based on selected service type
    options.forEach(function(option) {
        const opt = document.createElement('option');
        opt.value = option.toLowerCase().replace(/\s+/g, '-');
        opt.innerHTML = option;
        specificService.appendChild(opt);
    });
}

function submitForm(event) {
    event.preventDefault(); // Prevents the page from refreshing
    // You can add your form validation or other actions here
    showSuccessModal();
}

function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'block'; // Display the success modal
}

function closeModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'none'; // Hide the modal
}