async function stuSignUp() {
    // const stu_signup_data = {
    //     stu_fname: document.getElementById("stu_signup_fname").value,
    //     stu_lname: document.getElementById("stu_signup_lname").value,
    //     stu_phone: document.getElementById("stu_signup_phone").value,
    //     stu_email: document.getElementById("stu_signup_email").value,
    //     stu_password: document.getElementById("stu_signup_password").value,
    //     stu_level: document.getElementById("stu_level").value,
    //     stu_edu_category: document.getElementById("stu_edu_category").value,
    //     stu_contact: document.getElementById("stu_contect").value,
    // };
    // const response = await fetch(`${BACKEND_URL}/stu_signup`, {
    //     method: "POST",
    //     headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(stu_signup_data),
    // });

    // if (!response.ok) {
    //     const message = `Error: ${response.status}`;
    //     throw new Error(message);
    // } else {
    //     const result = await response.json();
    //     console.log(result);
    //     document.cookie = result["auth_token"];
    //     // redirect to student dashboard
    //     loadStudentDashboard(result["student_id"]);
    // }

    location.href = "../html/student_dashboard.html";
}

async function menSignUp() {
    const men_signup_data = {
        men_fname: document.getElementById("men_fname").value,
        men_lname: document.getElementById("men_lname").value,
        men_phone: document.getElementById("men_phone").value,
        men_email: document.getElementById("men_signup_email").value,
        men_password: document.getElementById("men_signup_password").value,
        men_edu_category: document.getElementById("men_edu_category").value,
        men_level: document.getElementById("men_level").value,
        men_contect: document.getElementById("men_contact").value,
    };
    const response = await fetch(`${BACKEND_URL}/men_signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(men_signup_data),
    });

    if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
    } else {
        const result = await response.json();
        console.log(result);
        document.cookie = result["auth_token"];
        // redirect to mentor dashboard
        loadMentorDashboard(result["mentor_id"]);
    }
}

async function signIn() {
    const signin_data = {
        email: document.getElementById("signin_email").value,
        password: document.getElementById("signin_password").value,
    };
    const user_type = document.getElementById("user_type").value;
    let route = "";
    if (user_type == "u_type_stu") {
        route = "stu_sign_in";
    } else {
        route = "men_sign_in";
    }
    console.log(`${BACKEND_URL}/${route}`);
    const response = await fetch(`${BACKEND_URL}/${route}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(signin_data),
    });

    if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
    } else {
        const result = await response.json();
        console.log(result);
        document.cookie = result["auth_token"];

        // redirect to mentor dashboard or student dashboard
        if (user_type == "u_type_stu") {
            loadStudentDashboard(result["student_id"]);
        } else {
            loadMentorDashboard(result["mentor_id"]);
        }
    }
}
