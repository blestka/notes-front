export default interface CreateNoteResponse {
  id: string;
  text: string;
  expiredAt: Date;
  password: string;
}
