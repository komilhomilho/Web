import fs from "fs"
const log = console.log

// const abrirArquivo = (dir) =>{
//     const exibirConteudo = (err, cont) =>{
//         if(err){
//             log(`Aconteceu erro: ${err}`)
//         }else{
//             log(cont.toString())
//         }
//     }
//     fs.readFile(dir, exibirConteudo)
// }
// abrirArquivo("./documents/arquivo.txt")

const openFile = (path) => {
    const showFile = (err, content) => {
        if (err){
            log(`Error: ${err}`)
        } else {
            log(content.toString())
            
            const double = content.toString() * 2
            
            const saveFile = (err) => {
                if(err){
                    log(`Error saving...: ${err}`)
                } else {
                    log("File saved successfully \\o/")
                }
            }
            fs.writeFile("./documents/dobro.txt", double.toString(), saveFile)
        }
    } 
    fs.readFile(path, showFile)
}
openFile("./documents/arquivo.txt")
/**
 * const oeffneDatei = (pfad) => {
    const zeigeDatei = (fehler, inhalt) => {
        if (fehler){
            log(`Fehler: ${fehler}`)
        } else {
            log(inhalt.toString())
            
            const doppelt = inhalt.toString() * 2
            
            const speichereDatei = (fehler) => {
                if(fehler){
                    log(`Fehler beim Speichern...: ${fehler}`)
                } else {
                    log("Datei erfolgreich gespeichert.")
                }
            }
            
            fs.writeFile("./dokumente/doppelt.txt", doppelt.toString(), speichereDatei)
        }
    }
    
    fs.readFile(pfad, zeigeDatei)
}

oeffneDatei("./dokumente/datei.txt")
 */
