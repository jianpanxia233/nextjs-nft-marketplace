const fs = require('fs');
const ghpages = require('gh-pages');
const path  = require('path');
fs.writeFile(path.join(__dirname,'out/.nojekyll'), 'recognize static source', (error) => {
  
    // 创建失败
    if(error){
        console.log(`创建失败：${error}`)
    }

    // 创建成功
    console.log(`创建成功！`)
    ghpages.publish('out', { add: true }, function(err, success) {
        console.log('err', err);
        console.log('success', success);
    })
    
})