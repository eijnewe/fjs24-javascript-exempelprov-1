// 2.1 Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// userId: 1

const undone = 'text-decoration: none'
const done = 'text-decoration: line-through'

function createTodoItem(item) {
    const listItem = document.createElement('li')
    const btn = document.createElement('button')
    btn.type = 'button'

    const undone = 'text-decoration: none'
    const done = 'text-decoration: line-through'

    function setStyle() {
        btn.textContent = item.completed ? 'Undo' : 'Done'
        listItem.style = item.completed ? done : undone
    }

    setStyle()

    btn.addEventListener('click', () => {
        item.completed = !item.completed
        setStyle()
    })

    listItem.textContent = item.title
    listItem.append(btn)
    return listItem
}

async function getTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos/'
    const response = await fetch(url)
    const data = await response.json()

    const list = document.createElement('ul')
    document.body.append(list)

    data.filter((item) => item.userId === 1).forEach((item) => {
        /*  console.log(item)
        const listItem = document.createElement('li')
        listItem.textContent = item.title
        list.append(listItem)
        const btn = document.createElement('button')
        btn.type = 'button'

        function setStyle() {
            btn.textContent = item.completed ? 'Undo' : 'Done'

            listItem.style = item.completed ? done : undone
        }
        setStyle()

        btn.addEventListener('click', (e) => {
            item.completed = !item.completed
            setStyle()
        })
        listItem.append(btn) */
        const listItem = createTodoItem(item)
        list.append(listItem)
    })
}

getTodos()

// 2.2 Lägg till en done-knapp under varje titel. Om todo-objektet är genomfört,
// alltså completed: true, så ska det stå "Undo" på knappen annars "Done"

// 2.3 Knappen ska kunna växla mellan "Undo" och "Done" när man trycker på den.
// Om det står "Undo" på knappen ska titeln vara genomstruken, alltså i css:
// text-decoration: line-through;
// Annars ska den inte vara det.
