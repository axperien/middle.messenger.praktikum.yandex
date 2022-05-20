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
    onClick: () => void
}

export type ChatFormProps = {
    name: string,
    avatar: { image: string, image_x2: string },
    events: any
}

export type ChatInfoProps = {
    name: string,
    avatar: { image: string, image_x2: string }
}

export type ChatUser = {
    name: string,
    avatar: { image: string, image_x2: string }
}

export type Chat = {
    id: number,
    user: ChatUser,
    lastMessage: Record<'time' | 'text' | 'from', string>
}

export type ChatListProps = {
    chats: Array<Chat>,
    onClick: () => void,
    events: any
}

export type ChatMessageProps = {
    from: string,
    text: string,
    image: string,
    time: string
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
    fields?: [],
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
    data: any;
    timeout: number;
    method: string;
    headers: any;
};
