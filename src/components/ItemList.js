import React from 'react'

class ItemList extends React.Component {

    state = {
        items: [
            {id: 1, title: 'test'},
            {id: 2, title: 'test2'}
        ]
    }


    render(){
        
        const items = this.state.items.map(item => {
            return <li className="ItemListMain" key={item.id}>{item.title}</li>
        })

        return(
            <>
                <input type='text'></input>
                <button>Dodaj do listy!</button>
                {items}
                
            </>
        )
    }
}

export default ItemList