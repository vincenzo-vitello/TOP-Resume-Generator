export const Resume = ({ data }) => {
  return (
    <>
      {data.fullname && <h1 className="fullname">{data.fullname}</h1>}
      {data.jobtitle && <p className="jobtitle">{data.jobtitle}</p>}
      {data.email && <p className="email">{data.email}</p>}
      {data.phone && <p className="phone">{data.phone}</p>}
      {data.address && <p className="address">{data.address}</p>}

      {data.companyName && <h2 className="company-name">{data.companyName}</h2>}
      {data.companyAddress && (
        <p className="company-address">{data.companyAddress}</p>
      )}
      {data.role && <p className="role">{data.role}</p>}

      {data.university && <h2 className="university">{data.university}</h2>}
      {data.universityAddress && (
        <p className="university-address">{data.universityAddress}</p>
      )}
      {data.degree && <p className="degree">{data.degree}</p>}
      {data.degreeSummary && (
        <p className="degree-summary">{data.degreeSummary}</p>
      )}
      {data.graduationDate && (
        <p className="graduation-date">{data.graduationDate}</p>
      )}

      {data.summary && <p className="summary">{data.summary}</p>}
    </>
  );
};
