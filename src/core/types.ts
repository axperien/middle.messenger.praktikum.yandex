export type Nullable<T> = T | null;

export type Keys<T extends Record<string, unknown>> = keyof T;
export type Values<T extends Record<string, unknown>> = T[Keys<T>];

export type AvatarProps = {
    image: string,
    imageX2: string,
    overlayText: string
}

export type BackUrlProps = {
    url: string
}

export type ButtonProps = {
    cls: string,
    text: string;
    type: string,
    url?: string,
    onClick: () => void
}

export type ErrorProps = {
    code: string,
    text: string
}

export type FieldProps = {
    type: string,
    name: string,
    text: string,
    errorText?: string,
    value?: string,
}

export type FormProps = {
    title: string,
    fields?: Array<Record<string, any>>,
    button?: {
        cls: string,
        text: string
    },
    link?: {
        url: string,
        cls: string,
        text: string
    },
    onSubmit: () => void,
    events: any
}

export type LinkProps = {
    cls: string,
    text: string;
    url: string,
    onClick: () => void,
    events: any
}

export type UserFieldProps ={
    type: string,
    name: string,
    text: string,
    placeholder: string,
    errorText?: string,
    value?: string,
    readonly?: boolean,
    events: any
  }

export type HTTPTransportOptions = {
    data?: any;
    timeout?: number;
    method?: string;
    headers?: any;
};

export type Indexed<T = unknown> = {
    [key in string]: T;
};

export type AppState<T = unknown> = {
    [key in string]: T;
};

export type loginType = {
    login: string,
    password: string
}

export type userType = {
    first_name?: string,
    second_name?: string,
    login?: string,
    email?: string,
    password?: string,
    phone?: string,
    display_name?: string,
    avatar?: string | null,
    id?: number,
}

export type passwordType = {
    oldPassword: string,
    newPassword: string,
}

export type Chat = {
    id?: number,
    title?: string,
    avatar?: string,
    unread_count?: number,
    last_message?: any,
}

export type User = {
    id?: number,
    login?: string,
    firstName?: string,
    lastName?: string,
    displayName?: string,
    email?: string,
    avatar?: string,
    phone?: string,
    you?: boolean,
}

export type ChatListProps = {
    chats? : []
    currentChat: Chat | null,
    onSelectChat?: () => void,
    events: any
}

export type ChatFormProps = {
    events: any
}

export type ChatMessageProps = {
    image?: string,
    text?: string,
    you?: string,
    created?: string
}

export type ChatInfoProps = {
    name: string,
    avatar: { image: string }
}
