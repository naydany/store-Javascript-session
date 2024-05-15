// Create an empty note list
var noteList = [];

// Add notes to the list
noteList.push({ title: "Note 1", content: "This is the content of Note 1" });
noteList.push({ title: "Note 2", content: "This is the content of Note 2" });
noteList.push({ title: "Note 3", content: "This is the content of Note 3" });

// Access and manipulate notes in the list
console.log(noteList[0]); // Access the first note
console.log(noteList.length); // Get the number of notes in the list

noteList[1].content = "Updated "; // Update the content of the second note

// Iterate over the note list
for (var i = 0; i < noteList.length; i++) {
  console.log(noteList[i].title);
  console.log(noteList[i].content);
}