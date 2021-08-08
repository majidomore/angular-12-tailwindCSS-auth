export class Assessment {
  constructor(
    public id: number,
    public name: string,
    public users_resolved: number,
    public active: boolean,
    public image_url: string
  ) {}
}
