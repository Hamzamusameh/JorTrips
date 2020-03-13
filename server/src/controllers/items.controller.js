import { executeProcedure, executeQuery, executeAddItemProcedure, executeDeleteItemProcedure } from "../sql/SqlManager";

const itemsController = {
    GetItems: (cb) => executeProcedure('GetItems', cb),
    GetDate: () => 'Hamza',
    AddItem: (params, cb) => executeAddItemProcedure('AddItem', params, cb),
    DeleteItem: (id, cb) => {
        console.log('At controller' + id);
        executeDeleteItemProcedure('DeleteItem', id, cb)
    },
};

export default itemsController;
