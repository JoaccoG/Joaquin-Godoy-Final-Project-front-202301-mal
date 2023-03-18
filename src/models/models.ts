export type Status = 'idle' | 'loading' | 'failed';

export type RequestStatus = 'idle' | 'success' | 'error';

export interface RequestResponse {
  msg: string;
  accessToken: string;
}
