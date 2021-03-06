import React, { FC, useContext,} from "react";
import List from "components/list/list";
import { props, GlobalState } from "interfaces/interfaces";
import StateContext from "services/context";
const ShowList: FC<props> = ({ name , ...props }) => {

    return (
            <List {...props}  />
    );
};
export default ShowList;
