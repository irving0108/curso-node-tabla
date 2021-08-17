const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra tabla en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Muestra tabla hasta el valor X'
                })
                .check((argv, options) =>{
                    if(isNaN(argv.b)){
                        throw 'La base debe ser un número';
                    }
                    return true;
                })
                .argv;

module.exports = argv;