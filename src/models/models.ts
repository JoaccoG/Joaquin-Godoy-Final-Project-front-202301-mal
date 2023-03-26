export type Status = 'idle' | 'loading' | 'failed';

export type RequestStatus = 'idle' | 'loading' | 'success' | 'error';

export interface RequestResponse {
  msg: string;
  accessToken: string;
  user: string;
}
