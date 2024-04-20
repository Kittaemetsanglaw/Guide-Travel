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
    } catch (error) {
        console.error('Error:', error);
    }
}