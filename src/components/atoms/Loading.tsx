import { Text } from '@/components/atoms';
import { ILoading } from '@/models';

export const Loading = ({ backgroundColor, text }: ILoading) => {
  return (
    <div className="loading" style={{ backgroundColor }}>
      <p className="loading__content" />
      {text && (
        <Text color="white" size="x-large" family="quicksand">
          {text}
        </Text>
      )}
    </div>
  );
};
