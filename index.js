const fs = require('fs');
const path = require('path');
console.log(process.argv);
console.log(__dirname);
const dirpath =path.join(__dirname,'files_path');
const input = process.argv;
const filename = input[3];
if(input[2]=='add'){
fs.writeFileSync(`${dirpath}/${filename}.txt`,'this test file created');
}else if(input[2]=='remove'){
    fs.unlinkSync(`${dirpath}/${filename}.txt`);
}
else if(input[2]=='read'){
    fs.readdir(dirpath,(err,filedata)=>{
        console.log(filedata);
        filedata.forEach((item)=>{
            console.log("file name is ",item);

        })
        // fs.readFileSync(dirpath);
    })
}
else{
    console.log('invalid inputs')
}
