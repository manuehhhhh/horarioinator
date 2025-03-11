export class materia{
    public nombre:string;
    public familia:string;
    public UC:number;
    public semestre:number;

    public constructor(nom: string, fam:string, uc:number, sem:number){
        this.nombre = nom;
        this.familia = fam;
        this.UC = uc;
        this.semestre = sem;
    }
}