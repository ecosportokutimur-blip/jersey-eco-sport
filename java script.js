// Buka database yang sama
var db = await openDB();
var record = await dbGet(dbId); // dbId dari metadata yang di-copy
if (record && record.file) {
  var url = URL.createObjectURL(record.file);
  // Gunakan url untuk img src atau video src
}