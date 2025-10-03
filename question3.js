// 3. 3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1

const postsEl = document.getElementById('posts')

async function getPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(url)
    const data = await response.json()

    data.filter((item) => item.userId === 1).forEach((item) => {
        const article = document.createElement('article')
        const heading = document.createElement('h4')
        const para = document.createElement('p')
        heading.textContent = item.title
        para.textContent = item.body
        article.append(heading, para)
        postsEl.append(article)
    })
}

getPosts()
