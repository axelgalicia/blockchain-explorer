const be = require('blockexplorer');

const getBlock = (index) => {
    be.blockIndex(index).then(result => {
        const { blockHash } = JSON.parse(result);
        be.block(blockHash).then(block => {
            console.log(block);
        }).catch(e => {
            console.log(e);
        });

    }).catch(e => {
        console.log(e);
    });
}

(function theLoop (i) {
    setTimeout(function () {
        getBlock(i);
        i++;
        if (i < 3) theLoop(i);
    }, 0);
  })(0);
