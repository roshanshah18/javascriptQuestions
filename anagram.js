// Bad Credit 
// Anagram
// Debit Card

function anagram(){
    const firstword="Bad Credit".toLowerCase().split('');
    console.log(firstword)

    const secondword="Debit Card".toLowerCase().split('')
    console.log(secondword)

    const sortedfirstword= firstword.sort().join('')
    console.log(sortedfirstword)
    const sortedsecondword= secondword.sort().join('')
    console.log(sortedsecondword)

   
if(sortedfirstword=== sortedsecondword){
    console.log("anagram")
}
else{
    console.log("not anagram")
}
}
anagram()





