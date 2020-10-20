import { User } from '../models/User';

export default class SignInResponseDTO {
    token: string;
    user: User;
}
