// async function handleFileUpload(file) {
//     const formData = new FormData();
//     formData.append('file', file);
//     try {
//       const response = await fetch('../files', {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

function doupload() {
    let data = document.getElementById("file").files[0];
    let entry = document.getElementById("file").files[0];
    console.log('doupload',entry,data)
    fetch('http://localhost:3000/files/' + encodeURIComponent(entry.name), {method:'POST',body:data});
    alert('http://localhost:3000/files/' + encodeURIComponent(entry.name));
    location.reload();
};

export function Form(){
    return (
        <div class="mt-16">
            <form action="https://docs.google.com/forms/d/e/1FAIpQLSfrcnxpqzLT6V4L1yZS8HAI6029ZtxG-ofEw52ILlhTMNuNew/formResponse">
                <label for="entry.1266267840">Enter name:</label><br/>
                <input type="text" required name="entry.1266267840"/><br/>
                <label for="entry.909121915">Enter email:</label><br/>
                <input type="text" required name="entry.909121915"/><br/>
                <label for="entry.991778217">Enter phone:</label><br/>
                <input type="text" required name="entry.991778217"/><br/>
                <label>Enter file:</label><br/>
                <input type="file" required id="file" name="file"/><br/>
                <button onClick={doupload} type="submit">Submit Form</button>
            </form>
        </div>
    )
}

// // https://docs.google.com/forms/d/e/1FAIpQLSfrcnxpqzLT6V4L1yZS8HAI6029ZtxG-ofEw52ILlhTMNuNew/formResponse

// entry.1266267840=Pedro

// entry.909121915=exemplo@mail.com

// entry.991778217=4444
