function Services() {

  const services = [
    "Frontend",
    "Backend",
    "Database"
  ];

  return (

    <div className="panel">

      <h2>Running Services</h2>

      {services.map((service) => (

        <div className="service" key={service}>

          <span>{service}</span>

          <span className="healthy">
            Running
          </span>

        </div>

      ))}

    </div>

  );
}

export default Services;
