function Profile() {

  const name = localStorage.getItem("userName");
  const email = localStorage.getItem("userEmail");
  const dob = localStorage.getItem("userDOB");

  return (
    <div className="container mt-5">

      <h1 className="text-primary text-center">
        👤 My Profile
      </h1>

      <div className="card shadow p-4 mt-4">

        <p><strong>Name:</strong> {name}</p>

        <p><strong>Email:</strong> {email}</p>

        <p><strong>Date of Birth:</strong> {dob}</p>

      </div>

    </div>
  );
}

export default Profile;