import { Button } from '@/components/atoms';

export const InfoCard = () => {
  return (
    <div className="info-card">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
        aspernatur itaque iure laudantium nemo nisi numquam porro quibusdam quis
        velit? Corporis deleniti deserunt et ipsam numquam porro praesentium quo
        quos! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
        architecto asperiores dolore doloremque doloribus dolorum fugit id, in
        ipsa laboriosam maxime minima molestias mollitia officia perferendis
        quis repellendus temporibus vitae.
      </p>
      <Button to="/nosotros" />
      <Button to="/nosotros" size="x-large" />
      <Button to="/nosotros" size="xx-large" />
    </div>
  );
};
