import { logosUJW as logos } from '@/data';

export const LogosUJW = () => {
  return (
    <div className="logos-ujw__container">
      <div className="logos-ujw">
        {logos.map((logo, index) => (
          <img
            src={logo.img}
            alt={logo.name}
            className="logo-ujw"
            key={index}
            style={{ transform: logo.transform }}
          />
        ))}
      </div>
    </div>
  );
};
