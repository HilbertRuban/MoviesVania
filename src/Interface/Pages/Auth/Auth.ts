export interface IAuthInitialState {
  user?: Partial<IAuthPayloadProps>;
  isAuthenticated?: boolean;
  sessionId?: string | null;
}
export interface IAuthPayloadProps {
  avatar: {
    gravatar: {
      hash: string;
    };
    tmdb: {
      avatar_path: string | null;
    };
  };
  id: number;
  include_adult: boolean;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  username: string;
}
