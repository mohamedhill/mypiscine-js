function pronoun(text) {
    let pronouns ={ i: true, you: true, he: true, she: true, it:true, they:true, we: true }
    let matches = text.match(/[A-Za-z]+/g)
    if (!matches) {
        return {}
    }
    let result= {}
    for (let i = 0; i < matches.length; i++) {
      let w = matches[i].toLowerCase()
        if (pronouns[w]) {
            if (!result[w]) {
                result[w] = {word:[],count: 0}
            }
            result[w].count+= 1
            let next =matches[i + 1]
            if (next) {
            let nextLower= next.toLowerCase()
                if (!pronouns[nextLower]) {
                result[w].word.push(nextLower)
                }
            }
        }
    }
    return result
}