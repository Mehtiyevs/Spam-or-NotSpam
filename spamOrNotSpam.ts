const subjects = ["free prize worth millions", "ten tips for a carefree lifestyle"];
const spamWords = ["Free", "money", "Win", "millions"];

const getSpamEmails = (subjects: any, spamWords: any) => {
    
    const spamSet = new Set(spamWords.map(( word: string )=> word.toLowerCase()))

    const results  = subjects.map(( subject: string ) => {
        const words = subject.toLowerCase().split(' ')
        let spamCount = 0

        for(const word of words) {
            if (spamSet.has(word)) {
                spamCount++
            }
        }

        return spamCount >= 2 ? 'spam' : 'not_spam'
    })


    return results
    
}   

console.log(getSpamEmails(subjects, spamWords))

