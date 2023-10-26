import { ILogos } from '@/models';

export const Logos = ({ logos }: ILogos) => {
  return (
    <div className="logos__container">
      <div className="logos">
        {logos.map((logo) => (
          <img src={logo.img} alt={logo.name} className="logo" />
        ))}
      </div>
    </div>
  );
};
