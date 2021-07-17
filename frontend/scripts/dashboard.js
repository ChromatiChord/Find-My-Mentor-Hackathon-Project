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
        // Create divs
        var parentDiv = document.createElement("div");
        var firstNameDiv = document.createElement("div");
        var eduCategoryDiv = document.createElement("div");
        var teachLevelDiv = document.createElement("div");
        var mentorConnectionsDiv = document.createElement("div");

        parentDiv.appendChild(firstNameDiv);
        parentDiv.appendChild(eduCategoryDiv);
        parentDiv.appendChild(teachLevelDiv);
        parentDiv.appendChild(mentorConnectionsDiv);

        // Change inner HTML corresponding to values
        firstNameDiv.innerHTML = first_name;
        eduCategoryDiv.innerHTML = edu_category;
        teachLevelDiv.innerHTML = teach_level;
        mentorConnectionsDiv.innerHTML = mentor_connections;
    }
}

async function loadMentorDashboard(mentor_id) {
    // redirect to url
<<<<<<< HEAD
    window.location.href = `${BACKEND_URL}/mentor_dashboard/${mentor_id}`
  const `response = await fetch(`${BACKEND_URL}/get_mentor_info/${mentor_id}`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({'auth_token': document.cookie}),
  })

  if (!response.ok) {
    const message = `Error: ${response.status}`;
    throw new Error(message);
  } else {
    const result = await response.json();

    const first_name = response['fname'];
    const edu_category = response['edu_category'];
    const teach_level = response['teach_level'];
    const student_connections = response['student_connections'];
    
    // load content onto page with above variables
  }
}
=======
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
>>>>>>> 72da63a4f961f25283e8883fd66be897a3e8d8d9

        // load content onto page with above variables
        window.location("mentor_dashboard.html");
        // Create divs
        var parentDiv = document.createElement("div");
        var firstNameDiv = document.createElement("div");
        var eduCategoryDiv = document.createElement("div");
        var teachLevelDiv = document.createElement("div");
        var studentConnectionsDiv = document.createElement("div");

        parentDiv.appendChild(firstNameDiv);
        parentDiv.appendChild(eduCategoryDiv);
        parentDiv.appendChild(teachLevelDiv);
        parentDiv.appendChild(studentConnectionsDiv);

        // Change inner HTML corresponding to values
        firstNameDiv.innerHTML = first_name;
        eduCategoryDiv.innerHTML = edu_category;
        teachLevelDiv.innerHTML = teach_level;
        studentConnectionsDiv.innerHTML = student_connections;
    }
}
