/** 
 * Fungsi untuk menampilkan Hasil Download
 * @param {string} result - Nama File yang di download
*/
function showDownload(result) {
    console.log("Download Selesai");
    console.log("Hasil Download: " + result);
}

/** 
 * Fungsi ini untuk download File
 * @param {function} callback - Function callback show
*/
function download(callShowDownload){
    setTimeout(function() {
        const result = "windows-10.exe";
        callShowDownload(result);
    }, 3000);
}

download(showDownload);