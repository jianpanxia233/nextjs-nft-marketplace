const fs = require('fs');

const path  = require('path');
fs.writeFileSync(path.join(__dirname,'../out/.nojekyll'), '', (error) => {
  
    // 创建失败
    if(error){
        console.log(`创建失败：${error}`)
    }

    // 创建成功
    console.log(`创建成功！`)
    
})