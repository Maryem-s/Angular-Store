export class client {
    id?: string;
    nom?: string;
    email?: string; 
    avatar?: string;
    constructor(args: client = {}) {
    this.id = args.id;
    this.nom = args.nom;
    this.email = args.email; 
    this.avatar = args.avatar;
    
    }
   
}