export interface RootState {
  version: string;
}

export type StateType = {
  applicationMessage: string;
  user_info: UserData;
};

export interface UserData {
  client?: string;
  "access-token"?: string;
  uid?: string;
}

export interface SendUserData {
  title: string;
  body: string;
  reedtag_id: number;
}

export interface ReadaidImageData {
  id: number;
  caption: string;
  image_path: string;
}

export interface SendLoginData {
  email: string;
  password: string;
}

export interface GetLoginData {
  allow_password_change: boolean;
  email: string;
  id: number;
  image: null;
  name: string;
  nickname: string;
  provider: string;
  role: string;
  uid: string;
}
