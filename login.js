function login() {
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    alert("Signed in");
                    console.log(userCredential.user);
                    closeModal();
                })
                .catch((Error) => {
                    alert(Error.message);
                });
        }

        function register() {
            const email = document.getElementById("registerEmail").value;
            const password = document.getElementById("registerPassword").value;

            createUserWithEmailAndPassword(auth, email, password
                .then((userCredential) => {
                    alert("Account created");
                    console.log(userCredential.user);
                    closeModal()
                })
                .catch((Error) => {
                    alert(error.message);
                })
            )
        }

         function openModal(type) {
            document.getElementById("modal").style.display = "block";

            if (type === "login") {
                document.getElementById("loginForm").style.display = "block";
                document.getElementById("registerForm").style.display = "none";
            } else {
                document.getElementById("loginForm").style.display = "none";
                document.getElementById("registerForm").style.display = "block";
            }
        }
        function closeModal() {
            document.getElementById("modal").style.display = "none";
        }
        function login() {
            alert("Signed in");
        }
        function register() {
            alert("Register");
        }