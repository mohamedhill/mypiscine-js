function blockChain(data,prev){
    prev=prev||{ index: 0, hash: '0' }
    let index=prev.index+1
    let hash=hashCode(index+prev.hash+JSON.stringify(data))
    let block={
        index,hash,prev,data,chain(nextdata){
            return blockChain(nextdata,block)
        }
    }
    return block
}