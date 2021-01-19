import { Attributes } from './Attributes';
import { Sync } from './Sync';
import { Eventing } from './Eventing';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  /** Composition common classes */
  /** Atributes (UserProps) */
  public attributes: Attributes<UserProps>;
  /** Event model */
  public events: Eventing = new Eventing();
  /** Fetching, saving and udating of data */
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  /** Receive attributes */
  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}
