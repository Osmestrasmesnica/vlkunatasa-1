// Add this to HTML file and remove <input type="hidden" name="redirect" value="success.html"></input>
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    const currentLanguage = document.querySelector('.lang-btn.active')?.getAttribute('data-lang') || 'de';
    
    // Show loading state
    submitBtn.textContent = currentLanguage === 'de' ? 'Wird gesendet...' : 'Sending...';
    submitBtn.disabled = true;
    
    const formData = new FormData(this);
    
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
            // Success message
            alert(currentLanguage === 'de' ? 
                'Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen.' : 
                'Message sent successfully! I will get back to you soon.');
            
            // Reset the form
            this.reset();
        } else {
            // Error from server
            alert(currentLanguage === 'de' ? 
                'Fehler beim Senden: ' + (result.message || 'Unbekannter Fehler') + '\nBitte versuchen Sie es erneut.' : 
                'Error sending message: ' + (result.message || 'Unknown error') + '\nPlease try again.');
        }
    } catch (error) {
        // Network or other error
        console.error('Form submission error:', error);
        alert(currentLanguage === 'de' ? 
            'Verbindungsfehler. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.' : 
            'Connection error. Please check your internet connection and try again.');
    } finally {
        // Restore button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});