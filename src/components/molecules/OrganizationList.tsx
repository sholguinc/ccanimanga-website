import { Text } from '@/components/atoms';

import { IOrganization } from '@/models';
import { organizations } from '@/data';

export const OrganizationList = () => {
  return (
    <ul className="organization-list">
      {organizations.map((organization: IOrganization, index) => (
        <li className="organization" key={index}>
          <a href={organization.url} target="_blank" rel="noopener noreferrer">
            <Text color="black" family="noto-jp" className="organization__text">
              {organization.name}
            </Text>
          </a>
        </li>
      ))}
    </ul>
  );
};
