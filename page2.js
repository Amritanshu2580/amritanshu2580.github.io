// Function to open image in full screen with note
function openFullscreen(image, note) {
    const overlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const noteText = document.getElementById('note-text');
  
    fullscreenImage.src = image.src;
    noteText.textContent = note;
    overlay.style.display = 'flex';
  }
  
  // Function to close full screen
  function closeFullscreen() {
    const overlay = document.getElementById('fullscreen-overlay');
    overlay.style.display = 'none';
  }
  
  // Function to go back to the birthday message page
  function goBack() {
    window.location.href = 'index.html';
  }