export type Nullable<T> = T | null;

export type Keys<T extends Record<string, unknown>> = keyof T;
export type Values<T extends Record<string, unknown>> = T[Keys<T>];

export type AvatarProps = {
    image?: string,
    overlayText?: string,
    modalId?: string,
    onClick?: () => void,
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
    onSubmit: (...args: any) => void,
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

export type AppState = {
    user?: User | null,
    isLoadApp?: boolean,
    chats?: Array<Chat> | [],
    currentChat?: Chat | null,
    messages?: Array<Message> | [],
    isLoadedMessages?: boolean,
};

export type loginType = {
    login: string,
    password: string
}

export type passwordType = {
    oldPassword: string,
    newPassword: string,
}

export type Chat = {
    id: number,
    title?: string,
    avatar?: string,
    unread_count?: number,
    last_message?: any,
    users?: Array<User> | null,
}

export type Message = {
    author: User | null,
    text: string,
    created: string,
    you?: boolean,
    isRead?: boolean,
};

export type MessageData = {
    user: User,
    user_id?: number,
    content: string,
    time: Date,
    is_read?: boolean,
};

export type ChatData = {
    id: number,
    title: string,
    avatar: string,
    last_message: MessageData,
};

export type User = {
    id?: number,
    login?: string,
    first_name?: string,
    second_name?: string,
    display_name?: string,
    email?: string,
    avatar?: string,
    phone?: string,
    you?: boolean,
}

export type ChatToken = {
    token: string
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

export type APIError = {
    reason: string;
}

export type ModalProps = {
    id: string,
    modal: {
        isOpen: boolean,
        modalId: number | null,
    },
    type?: string,
    callback?: () => void,
}

export type ModalAvatarProps = {
    type?: string,
    callback?: () => void,
}
