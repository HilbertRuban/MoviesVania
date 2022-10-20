export interface IToggleColorMode {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
  toggleColorMode: () => void;
}

export interface IToggleColorModeChildrenProps {
  children: React.ReactNode;
}
