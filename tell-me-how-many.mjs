import {readdir} from 'fs';



const dirPath = process.argv[2]

    
    readdir(dirPath,(err,files)=>{
        if (err) throw err

        
        console.log(files.length);

    });
  




