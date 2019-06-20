//Action creators

export const addingItem = (item) => {
    
    return {
        type: 'ADD_ITEM',
        payload: {
            item: item
        }
    }
}

export const deletingItem = (item) => {
    return {
        type: 'DELETE_ITEM',
        payload: {
            item: item
        }
    }
}

