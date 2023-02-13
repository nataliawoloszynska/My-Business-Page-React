const ServiceBox = ({ text, isNew }) => {
  let div;
  {
    if (isNew) {
      div = <div className="dot"></div>;
    }
  }
  return (
    <div className="box">
      <h3 className="service">
        {text}
        <span
          className={
            isNew
              ? "service-new service-new-display"
              : "service-new service-new-not-display"
          }
        >
          (nowość)
        </span>
      </h3>
      {div}
    </div>
  );
};

export default ServiceBox;
