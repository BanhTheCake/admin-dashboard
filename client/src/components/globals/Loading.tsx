import React from "react";

type Props = {
    loading: JSX.Element,
    isLoading: boolean,
    children: React.ReactNode
};

const Loading = ({ loading, isLoading, children }: Props) => {
    return <>
        {isLoading ? loading : children}
    </>;
};

export default Loading;
