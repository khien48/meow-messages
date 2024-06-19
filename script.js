let catAnimationTimeout;

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageList = document.getElementById('messageList');
    
    if (messageInput.value.trim() !== '') {
        const newMessage = document.createElement('li');
        newMessage.textContent = messageInput.value;
        
        // Add a cute cat emoji to each message
        const catEmoji = document.createElement('span');
        catEmoji.textContent = ' 🐾';
        newMessage.appendChild(catEmoji);

        messageList.appendChild(newMessage);
        messageInput.value = '';
    } else {
        alert('Please enter a message!');
    }
}

function animateCatTail() {
    const catImage = document.getElementById('catImage');
    catImage.classList.add('cat-wag');

    clearTimeout(catAnimationTimeout);
    catAnimationTimeout = setTimeout(() => {
        catImage.classList.remove('cat-wag');
    }, 500);  // Adjust the time as needed
}
