const feed = document.getElementById('blog-feed');
const popularList = document.getElementById('popular-posts');

fetch('posts/posts.json')
  .then(res => res.json())
  .then(posts => {
    posts.forEach(post => {
      fetch(post.file)
        .then(res => res.text())
        .then(html => {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = html;
          
          const firstParagraph = tempDiv.querySelector('article p');
          const snippet = firstParagraph ? firstParagraph.innerText : 'No preview available';

          const card = document.createElement('div');
          card.className = 'blog-card';
          card.innerHTML = `
            <h3>${post.title}</h3>
            <p>${snippet}</p>
            <a class="read-more" href="${post.file}">Read More →</a>
          `;
          feed.appendChild(card);
          
          if (post.popular) {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${post.file}">${post.title}</a>`;
            popularList.appendChild(li);
          }
        })
        .catch(err => console.error('Error loading post:', err));
    });
  })
  .catch(err => console.error('Error loading JSON:', err));
