const createPoster = (n) => {
   for (let i = 0; i < n; i++) {
      // TODO: Create poster here
      let poster = document.createElement('div');
      poster.classList.add('poster');

      let posterimg = document.createElement('div');
      posterimg.classList.add('poster-img');

      let img = document.createElement('img');
      img.src = 'images/poster.jpg';

      let postertext = document.createElement('div');
      postertext.classList.add('poster-text');

      let h1 = document.createElement('h1');
      h1.textContent = "កង្រីជាតិថ្មី";

      let p = document.createElement('p');
      p.textContent = "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម និង សៀវភៅរូបភាពសំរាប់កុមារជាដើម។ ";


      container.appendChild(poster)
      poster.appendChild(posterimg)
      posterimg.appendChild(img)
      poster.appendChild(postertext)
      postertext.appendChild(h1)
      postertext.appendChild(p)

      console.log(container)

   }
}
   // Main code 

const container = document.querySelector('.container');
   // TODO:  Call function to create 10 poster here

createPoster(10);
