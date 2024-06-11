function expo(number, exponent, callback) {
    
    function calculatePower(num, exp) {
      if (exp === 0) return 1;       
      if (exp === 1) return num;   
      return num * calculatePower(num, exp - 1); 
    }
    
    const result = calculatePower(number, exponent);
    callback(result);
  }




const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const postsContainer = document.getElementById('posts-container');
        data.forEach(post => {
          
          const postElement = document.createElement('div');
          postElement.classList.add('post');

          
          postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
          `;

          
          postsContainer.appendChild(postElement);
        });
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });




async function deepCopy(source) {
  return new Promise((resolve, reject) => {
    try {
      const copy = structuredClone(source);
      resolve(copy);
    } catch (error) {
      reject(error);
    }
  });
}





async function deepCopyAsync(source) {
return new Promise((resolve, reject) => {
  if (typeof source !== 'object' || source === null) {
    return reject(new Error('The argument must be a non-null object.'));
  }
  try { 
    const copy = structuredClone(source);
    resolve(copy);
  } catch (error) {
    reject(error);
  }
})
}
