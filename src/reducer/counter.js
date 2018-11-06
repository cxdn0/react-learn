import {INCREMENT} from '../constants'

export default (count = 0, action) => {
    const {type} = action
    // console.log('count', count);
    switch (type) {
        case INCREMENT: return count + 1
    }

    return count
}