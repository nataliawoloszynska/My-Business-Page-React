const ServiceBox = ({ text, isNew }) => {
  return (
    <div className="box">
      <h3 className="service">
        {text}
        <span
          className="service-new"
          style={
            isNew
              ? { display: "flex", flexDirection: "column" }
              : { display: "none" }
          }
        >
          (nowość)
        </span>
      </h3>
      <div className={isNew ? "dot" : ""}></div>
    </div>
  );
};

export default ServiceBox;
