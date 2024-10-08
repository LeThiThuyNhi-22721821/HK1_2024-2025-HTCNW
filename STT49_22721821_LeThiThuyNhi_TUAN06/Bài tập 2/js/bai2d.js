document.getElementById('f1s').addEventListener('button', function(event) {
    event.preventDefault(); // Prevent form submission
    var formData = new FormData(this);
    var backgroundColor = formData.get('bg');
    var textColor = formData.get('font');
    
    document.body.style.backgroundColor = backgroundColor; // Change background color
    document.body.style.color = textColor; // Change text color
  });