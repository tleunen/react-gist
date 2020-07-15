import { PureComponent } from "react";

export interface GistProps {
  id: string;
  file?: string;
}

declare class Gist extends PureComponent<GistProps, any> {}

export default Gist;
