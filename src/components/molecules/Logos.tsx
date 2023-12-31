import { logosUNI as logos } from '@/data';

export const Logos = () => {
  return (
    <div className="logos__container">
      <div className="logos">
        {logos.map((logo, index) => (
          <img
            src={logo.img}
            alt={logo.name}
            className="logo"
            key={index}
            style={{ transform: logo.transform }}
          />
        ))}
      </div>
    </div>
  );
};
