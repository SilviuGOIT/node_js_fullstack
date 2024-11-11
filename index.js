var fs = require("fs");

// Exercițiu 1: Citirea unui fișier
// Cerință: Creați un program Node.js care să citească conținutul unui fișier specificat și să îl afișeze în consolă.

// fs.readFile("./new.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// Exercițiu 2: Scrierea într-un fișier
// Cerință: Scrieți un program care să creeze un fișier nou sau să suprascrie un fișier existent cu un text specificat.

// const newText = "Acesta este un text adaugat din index.js";
// fs.writeFile("fisier-nou.txt", newText, "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Fisierul a fost creat cu success");
// });

// Exercițiu 3: Adăugarea într-un fișier
// Cerință: Creați un program care să adauge o linie de text la sfârșitul unui fișier fără a șterge conținutul anterior.
// const newText = `\nAcesta este un text adaugat din index.js2`;

// fs.appendFile("fisier-nou.txt", newText, "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Fisierul a fost creat cu success");
// });

// Exercițiu 4: Redenumirea fișierului
// Cerință: Scrieți un program care să redenumească un fișier specificat, schimbându-i numele din "vechiul-nume.txt" în "noul-nume.txt".
// fs.rename("fisier-nou.txt", "noul-nume.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Numele fisierului a fost schimbat!");
// });

// Exercițiu 5: Ștergerea unui fișier
// Cerință: Creați un program care să șteargă un fișier specificat.
// fs.unlink("./new.txt", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Fisierul a fost sters cu success");
// });

// Exercițiu 6: Copierea conținutului dintr-un fișier în altul
// Cerință: Scrieți un program care să citească conținutul dintr-un fișier sursă și să îl scrie într-un fișier țintă.

// fs.readFile("noul-nume.txt", "utf-8", (err, dataFisierNou) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   //   console.log(dataFisierNou);
//   fs.writeFile("fisier-tinta.txt", dataFisierNou, "utf-8", (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log("Actiunea a fost indeplinita cu success");
//   });
// });

// Exercițiu 7: Listarea fișierelor dintr-un director
// Cerință: Creați un program care să listeze toate fișierele dintr-un director specificat.
// fs.readdir(".", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
//   //   data.forEach((file) => console.log(file));
//   console.log("Actiunea a fost indeplinita cu success!");
// });

// Exercițiu 8: Manipularea fișierelor JSON
// Cerință: Scrieți un program care să permită citirea și modificarea unui fișier JSON. De exemplu, să puteți adăuga, actualiza sau șterge elemente într-un fișier JSON.

fs.readFile("data.json", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const obiectJavascript = JSON.parse(data);

  obiectJavascript.descriere = "Este Descriere3 noua";
  console.log(obiectJavascript);

  const noulObiectJSON = JSON.stringify(obiectJavascript);
  fs.writeFile("data.json", noulObiectJSON, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Operatiunea este finalizata");
  });
});
