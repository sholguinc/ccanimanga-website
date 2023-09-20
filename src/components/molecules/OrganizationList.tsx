import { Text } from '@/components/atoms';

import { IOrganization } from '@/models';

const organizations: IOrganization[] = [
  {
    name: 'CCAM',
    url: 'https://www.facebook.com/ccam.uni.pe',
  },
  {
    name: 'Centro Cultural UNI',
    url: 'https://www.facebook.com/ceculturaluni/',
  },
  {
    name: 'Universidad Nacional de Ingeniería',
    url: 'https://www.uni.edu.pe/',
  },
];

export const OrganizationList = () => {
  return (
    <ul className="organization-list">
      {organizations.map((organization: IOrganization) => (
        <li className="organization">
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
