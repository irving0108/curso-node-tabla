const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(base, listar, hasta)=>{
    try{
        if(listar){
            console.log("=================".rainbow);
            console.log(`  Tabla del: ${colors.blue(base)}`);
            console.log("=================".rainbow);
        }
        let salida = '';
        let consola = '';
        for(let i=1;i<=hasta;i++){
            consola += `${base} ${'x'.green} ${i} = ${base*i}\n`;
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        if(listar)console.log(consola);
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `Tabla-${base}.txt`;
    }catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivo
};