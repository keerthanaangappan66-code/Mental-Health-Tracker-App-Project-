function Therapy() {
  return (
    <div className="container mt-5">

      <h1 className="text-danger text-center">
        🩺 Therapist Recommendation
      </h1>

      <div className="card shadow p-4 mt-4">

        <h4>Recommended Therapist</h4>

        <p><strong>Name:</strong> Dr. Priya Sharma</p>

        <p><strong>Specialization:</strong> Clinical Psychologist</p>

        <p><strong>Experience:</strong> 8 Years</p>

        <button className="btn btn-danger">
          Book Appointment
        </button>

      </div>

    </div>
  );
}

export default Therapy;