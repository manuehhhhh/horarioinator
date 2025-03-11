import { seccion } from "./seccion";
export class horario{
    public nombre:string;
    public secciones:Array<seccion>;
    public horas:Map<string, Map<string, string>>;

    constructor(){
        this.nombre= "";
        this.secciones = [];
        this.horas = new Map<string, Map<string, string>>;
        this.horas.set("lunes", new Map<string, string>);
        this.horas.set("martes", new Map<string, string>);
        this.horas.set("miercoles", new Map<string, string>);
        this.horas.set("jueves", new Map<string, string>);
        this.horas.set("viernes", new Map<string, string>);
        this.horas.set("sabado", new Map<string, string>);
        this.horas.set("domingo", new Map<string, string>);
        this.generarHoras();
    }

    public AgregarSeccion(seccion:seccion){
        if (this.revisarConflicto(seccion)){
            this.secciones.push(seccion);
            console.log("conflicto no hay!!!");
        } else {
            alert("conflicto!!!");
        }
    }

    private revisarConflicto(nueva:seccion):boolean{
        let resultado:boolean = true;
        for (let secc of this.secciones){
            resultado = resultado && secc.noSeSobrelapan(nueva) && (secc.materia !== nueva.materia);
            console.log("--------------");
            console.log(secc.materia);
            console.log(nueva.materia);
         }
        return resultado;
    }

    public eliminarMateria(nom:string){
        this.secciones = this.secciones.filter((secc) => (secc.materia !== nom));
        console.log(nom);
        this.generarHoras();
    }

    public generarHoras(){
        for (let key of this.horas.keys()){
            for (let i = 7; i < 19; i++){
                this.horas.get(key)?.set(i.toString() + ":00", "");
            }
        }
        for (let sec of this.secciones){
            for (let key of sec.horas.keys()){
                if (sec.horas.get(key)?.length !== 0){
                    for (let bloque of sec.horas.get(key)! ){
                        for (let i = 0; i < bloque[1] ; i++){
                            this.horas.get(key)?.set((bloque[0]+i).toString() + ":00", sec.materia)
                        }
            }
        }
    }
}
}
}
