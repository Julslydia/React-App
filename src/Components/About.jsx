import Person from "./Person";

const About = (props) => {
  const employeesListShow = props.employeeList.map((person) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        surname={person.surname}
        department={person.department}
        about={person.about}
        src={person.src}
        alt={person.alt}
      />
    );
  });

  return (
    <section id="about">
      <div className="padding1 container">
        <h1 id="align-center" className="padding1">
          Nasi specialiści
        </h1>
        <div className="padding1">{employeesListShow}</div>
      </div>
    </section>
  );
};

export default About;
