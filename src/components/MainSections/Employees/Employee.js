const Employee = ({ name, position, description, isPhoto }) => {
  return (
    <div className="person-container">
      <div className={isPhoto ? `photo ${isPhoto}` : "photo"}></div>
      <div className="person">
        <h3 className="person-name">
          {name} {position}
        </h3>
        <p className="person-about">{description}</p>
      </div>
    </div>
  );
};

export default Employee;
