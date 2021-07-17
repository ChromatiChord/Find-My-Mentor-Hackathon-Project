BACKEND_URL = "127.0.0.1/5000"

async function loadStudentDashboard(student_id){
  // redirect to url
  // {URL}/studentdashboard/{result['student_id']}
  const response = await fetch(`${BACKEND_URL}/stu_signup`, {
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
    console.log(result);
    const first_name = response['']
    document.cookie = `auth_token=${result['auth_token']}`;
    // redirect to dashboard
    // {URL}/studentdashboard/{result['student_id']}
  }
}
