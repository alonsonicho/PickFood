import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./states/orders";
import tablesReducer from "./states/tables";
import authReducer from "./states/auth";
import kitchenReducer from "./states/kitchen";
import ordersTablesReducer from "./states/ordersTable";

export const store = configureStore({
    reducer: {
        orders: ordersReducer,
        tables: tablesReducer,
        auth: authReducer,
        kitchen: kitchenReducer,
        ordersTables: ordersTablesReducer,
    }
});

