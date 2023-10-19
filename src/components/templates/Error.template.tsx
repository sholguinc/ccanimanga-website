import { Text, Button } from '@/components/atoms';
import { IErrorTemplate } from '@/models';

export const ErrorTemplate = ({ text, subtext }: IErrorTemplate) => {
  return (
    <div className="error-template">
      <Text className="main-text" family="figtree" weight="bold">
        {text}
      </Text>
      {subtext && (
        <Text className="sub-text" family="figtree" weight="bold">
          {subtext}
        </Text>
      )}
      <Button text="Ir a Inicio" size="xx-large" invert={true} to="/" />
      <div className="overlay-border top-left horizontal"></div>
      <div className="overlay-border top-left vertical"></div>
      <div className="overlay-border bottom-right horizontal"></div>
      <div className="overlay-border bottom-right vertical"></div>
    </div>
  );
};
