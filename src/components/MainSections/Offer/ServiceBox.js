const ServiceBox = ({ text, isNew }) => {
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
      {isNew && <div className="dot"></div>}
    </div>
  );
};

export default ServiceBox;
