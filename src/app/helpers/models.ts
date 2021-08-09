export class Assessment {
  constructor(
    public id: number,
    public name: string,
    public users_resolved: number,
    public active: boolean,
    public image_url: string
  ) {}
}

export class User {
  constructor(
    public first_name: string,
    public last_name: string,
    public role: string,
    public token: string
  ) {}
}
