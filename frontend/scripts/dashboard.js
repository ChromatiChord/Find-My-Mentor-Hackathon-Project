async function loadStudentDashboard(student_id) {
    // redirect to url
    window.location.href = `${BACKEND_URL}/student_dashboard/${student_id}`;

    const response = await fetch(
        `${BACKEND_URL}/get_student_info/${student_id}`,
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ auth_token: document.cookie }),
        }
    );

    if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
    } else {
        const result = await response.json();

        const first_name = result["fname"];
        const edu_category = result["edu_category"];
        const teach_level = result["teach_level"];
        const mentor_connections = result["mentor_connections"];

        // load content onto page with above variables
        window.location("student_dashboard.html");
    }
}

async function loadMentorDashboard(mentor_id) {
    // redirect to url
    window.location.href = `${BACKEND_URL}/mentor_dashboard/${mentor_id}`;
    const response = await fetch(
        `${BACKEND_URL}/get_mentor_info/${mentor_id}`,
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ auth_token: document.cookie }),
        }
    );

    if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
    } else {
        const result = await response.json();

        const first_name = result["fname"];
        const edu_category = result["edu_category"];
        const teach_level = result["teach_level"];
        const student_connections = result["student_connections"];

        // load content onto page with above variables
        window.location("mentor_dashboard.html");
    }
}
