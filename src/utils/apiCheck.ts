export const isError = (response: any) => response && response.reason;

export const isPing = (response: any) => response && response.type === 'pong';

export const isUserConnected = (response: any) => response && response.type === 'user connected';

export const isMessage = (response: any) => response && response.type === 'message';

export const isFile = (response: any) => response && response.type === 'file';
