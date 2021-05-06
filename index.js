var mongoose = require("mongoose");
var schema = require('./schema');

//Nombre del modelo, nombre del esquema , nombre de la coleccion
mongoose.connect("mongodb://localhost:27017/Ejercicio07");

var Book = mongoose.model("Book", schema, "book");

var book = new Book({
    title: "Ninguna soledad como la mia",
    author: "Gerardo Martinez",
    body: "Nos narra la historia de Isabel Arango, una joven nacida en México pero con padres asturianos, es la quinta hija de este matrimonio. Aprendió lo básico en la escuela en la que estuvo en la cual recibió un certificado por sus estudios. Por azares del destino, Isabel conoció a una bailarina rusa la cual la instruyo en el baile y la ayudo a colocarse ante la sociedad para que reconocieran su talento como bailarina. Le llevo mucho tiempo convencer a sus padres de que la dejaran ir a la ciudad de México a seguir creciendo como bailarina hasta poder así llegar a ser una bailarina profesional",
    comments: [
        {
            body: "Excelente historia sobre como la chica se siente atrapada en la presion de sus padres",
            date: new Date(),
        },
    ],
    meta: [
        {
            votes: 1500,
            favs: 850,
        },
    ],
});



book.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Se agrego el libro correctamente");
    process.exit(0);
});

Book.find({}, function (error, docs) {
    if (error) {
      console.log(console.error());
      process.exit(1);
    }
    console.log("---- Libros documenados ----");
    console.log(docs);
});