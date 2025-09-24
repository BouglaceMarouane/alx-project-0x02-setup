export interface CardProps{
    title: string;
    content: string;
}

export interface CardModalProps {
  onClose: () => void;
  onSubmit: (post: CardProps) => void;
}

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  children: React.ReactNode;  // text or nested elements inside button
  onClick?: () => void;
  // optionally any other props you need, e.g. className, disabled, etc.
  className?: string;
}

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}



export interface PostsPageProps {
  posts: PostProps[];
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
}

export interface UsersPageProps {
  users: UserProps[];
}
