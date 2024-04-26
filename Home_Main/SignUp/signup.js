const createAccount = async () => {
    try {
        // Get input values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        // Create object 
        let user = {
            name: name,
            email: email,
            password: password
        };

        // Display object
        console.log('submit data', user);
        const response = await axios.post('http://localhost:8000/signup', user);
        console.log('response', response.data);

        // Confirm whether to proceed to the quiz or not
        if (confirm("คุณต้องการทำ quiz หรือไม่?")) {
            // Open quiz.html in a new tab
            window.open("../Main_Content/เลือกจังหวัด.html", "_blank");
        } else {
            // Alert message when the user chooses not to take the quiz
            alert("ขอบคุณที่สมัครสมาชิก!");
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
