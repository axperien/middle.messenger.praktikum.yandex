export const isError = (response: any) => response?.reason;

export const isPing = (response: any) => response?.type === 'pong';

export const isUserConnected = (response: any) => response?.type === 'user connected';

export const isMessage = (response: any) => response?.type === 'message';

export const isFile = (response: any) => response?.type === 'file';
