const firstName = prompt("Halo, Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const language = prompt("Pilih Bahasa");
 
const user = {
   name: {
       first: firstName,
       last: lastName,
   },
   language: language
};
 
if (user.language === "Inggris") {
   alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Korea") {
   alert("만나서 반갑습니다," + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Japanese") {
   alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
} else {
   alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
}