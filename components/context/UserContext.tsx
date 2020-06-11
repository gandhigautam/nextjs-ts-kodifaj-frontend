import React, { ReactElement, useContext } from 'react';
import { User } from '../../lib/models/user/User';

export const UserContext = React.createContext<User | undefined>(undefined);

export default function UserProvider({
  children,
  user = { githubId: '', login: '', photo: '' },
}: UserProviderProps): JSX.Element {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser(): User {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw Error('useAppState must be used within a AppStateProvider');
  }
  return context;
}

interface UserProviderProps {
  children: ReactElement;
  user: User;
}
