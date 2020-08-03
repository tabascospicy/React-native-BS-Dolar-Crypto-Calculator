import React, { FC, memo } from "react";
import styles from "./style";
import ContentLoader, { Rect} from "react-content-loader/native";
import Colors from "./../../themes/colors"
const LoadingCard: FC = ({children}) => {
    return (
        <ContentLoader foregroundColor={Colors?.secondary} backgroundColor={Colors?.strong} style={styles.container} viewBox="0 0 400 70">
          {children}
            <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
            <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
        </ContentLoader>
    );
};
export default memo(LoadingCard);
