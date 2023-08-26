   // Configurações do Firebase

   const firebaseConfig = {
    apiKey: "AIzaSyDrRGdd3rIh4N7UMgJIL_SVVIu1lNRjQg8",
    authDomain: "d-boaweb.firebaseapp.com",
    databaseURL: "https://d-boaweb-default-rtdb.firebaseio.com",
    projectId: "d-boaweb",
    storageBucket: "d-boaweb.appspot.com",
    messagingSenderId: "1069382858381",
    appId: "1:1069382858381:web:02fe4cdc209c20eba6d4c4",
    measurementId: "G-K46W09Q8EE"


};


//  const app = initializeApp(firebaseConfig);


// Inicialização do Firebase
firebase.initializeApp(firebaseConfig);

// Função de upload de imagem para o Firebase
const idUsuario = 10;
const storage = firebase.storage();
var linkImagem;
var linkAudio;

document.getElementById('imagem').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const nome = "ID" + idUsuario + "_" + Date.now() + "." + file.name.split('.').pop();
    const path = "image/" + nome;
    linkImagem = path;
    const ref = storage.ref(path);
    const uploadTask = ref.put(file);

    uploadTask.on('state_changed', 
        function(snapshot) {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }, 
        function(error) {
            console.error(error);
        },
        function() {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('File available at', downloadURL);
            });
        }
    );
});
// Função de upload de áudio para o Firebase
    document.getElementById('audio').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const nome = "ID" + idUsuario + "_" + Date.now() + "." + file.name.split('.').pop();
    const path = "audio/" + nome;
    linkAudio = path;
    const ref = storage.ref(path);
    const uploadTask = ref.put(file);

    uploadTask.on('state_changed', 
        function(snapshot) {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }, 
        function(error) {
            console.error(error);
        },
        function() {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('Audio available at', downloadURL);
            });
        }
    );
});

var cardRef =  firebase.database().ref('cards');


document.getElementById('cardForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    //get values
    var titulo = getInputVal('titulo');
    var texto = getInputVal('texto');
    var narracao = getInputVal('narracao');
    var imagem = linkImagem
    var audio = linkAudio
    saveCard(titulo, texto, narracao, imagem, audio);

    document.getElementById('cardForm').reset();
    document.getElementById('imagem').reset();
    document.getElementById('audio').reset();
}

//pegar volores dos imputs


function getInputVal(id){
    return document.getElementById(id).value;
}

//salvar card no firebase
function saveCard(titulo, texto, narracao, imagem, audio){
    var newCardRef = cardRef.push();
    newCardRef.set({
        titulo: titulo,
        texto: texto,
        narracao: narracao,
        imagem : imagem,
        audio: audio,
    });
}



