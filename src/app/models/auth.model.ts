/* Modelo de dados para autenticação */

export class Auth {
    
    //atributos
    idUsuario: string = '';
    nome: string = '';
    email: string = '';
    accessToken: string = '';
    createdAt: Date | null = null;
    expiration: Date | null = null;
}