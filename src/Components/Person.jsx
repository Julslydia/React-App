const Person = ({ id, name, surname, department, about, src, alt }) => {
  return (
    <div className="person">
      <img className="photo-w photo-m photo-m1 photo-w1" src={src} alt={alt} />
      <div className="person_description container">
        <p id="align-right" className="bold-text ">
          {id}
          {name} {surname} {department}
        </p>
        <br />
        <p>{about}</p>
      </div>
    </div>
  );
};

export default Person;
