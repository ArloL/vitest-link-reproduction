import { Avatar } from '@base-ui-components/react/avatar';

export function MyAvatar({ children }) {
  return (
    <Avatar.Root>
      {children}
    </Avatar.Root>
  );
}
