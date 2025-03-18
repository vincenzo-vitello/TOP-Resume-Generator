export const Resume = ({ data }) => {
  return (
    <div className="resume">
      {data.fullname && <h1 className="fullname">Name: {data.fullname}</h1>}
      {data.jobtitle && <p className="jobtitle">Job title: {data.jobtitle}</p>}
      {data.email && <p className="email">Email: {data.email}</p>}
      {data.phone && <p className="phone">Phone number: {data.phone}</p>}
      {data.address && <p className="address">Address: {data.address}</p>}

      <p>Work Experience</p>
      {data.companyName && (
        <h2 className="company-name">Company name: {data.companyName}</h2>
      )}
      {data.companyAddress && (
        <p className="company-address">Address: {data.companyAddress}</p>
      )}
      {data.role && <p className="role">Role: {data.role}</p>}

      <p>Education</p>
      {data.university && (
        <h2 className="university">University: {data.university}</h2>
      )}
      {data.universityAddress && (
        <p className="university-address">Address: {data.universityAddress}</p>
      )}
      {data.degree && <p className="degree">Degree: {data.degree}</p>}
      {data.degreeSummary && (
        <p className="degree-summary">
          Career at university: {data.degreeSummary}
        </p>
      )}
      {data.graduationDate && (
        <p className="graduation-date">
          Graduation date: {data.graduationDate}
        </p>
      )}

      {data.summary && <p className="summary">Aboout me: {data.summary}</p>}
    </div>
  );
};
