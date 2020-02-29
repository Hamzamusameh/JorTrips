import { executeProcedure } from "../sql/QueryManager";

const itemsController = {
    GetItems: () =>
        executeProcedure("uspGetItems")
};

export default itemsController;
