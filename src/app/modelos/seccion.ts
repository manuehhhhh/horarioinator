export class seccion{
    public nrc:number;
    public profesor:string;
    public horas:Map<string, Array<[number, number]>>;
    public materia:string;

    constructor(NRC:number, profe:string, materia:string){
        this.nrc = NRC;
        this.profesor = profe;
        this.materia = materia;
        
        this.horas = new Map<string, Array<[number, number]>>();
        this.horas.set("lunes", []);
        this.horas.set("martes", []);
        this.horas.set("miercoles", []);
        this.horas.set("jueves", []);
        this.horas.set("viernes", []);
        this.horas.set("sabado", []);
        this.horas.set("domingo", []);
    }

    public cargarHoras(dia:string, cant:number, horaInicio:number){
        this.horas.get(dia)?.push([horaInicio, cant])
    }

    public noSeSobrelapan(comparada:seccion):boolean{
        let resultado:boolean = true;
        for(let llave of this.horas.keys()){
            console.log(this.horas.get(llave));
           for (let duplaActual of this.horas.get(llave)!){
                console.log(comparada.horas.get(llave))
                for (let duplaComparada of comparada.horas.get(llave)!){
                    console.log(llave);
                    console.log(typeof(duplaActual));
                    console.log(typeof(duplaComparada));
                    // console.log("hora inicio establecida:" + (duplaActual[0].toString()));
                    // console.log("hora final establecida:" + (duplaActual[0] + duplaActual[1]).toString())
                    resultado = resultado && (((duplaComparada[0] < duplaActual[0]) || (duplaComparada[0] >= (duplaActual[0]+ duplaActual[1])))) && ((((duplaComparada[0] + duplaComparada[1]) < duplaActual[0]) || ((duplaComparada[0] + duplaComparada[1]) >( duplaActual[0]+ duplaActual[1]))));
                }
           }
        }
    return resultado
    }
}