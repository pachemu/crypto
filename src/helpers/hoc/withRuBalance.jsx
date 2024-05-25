export const withRuBalance = Component => {
    return (props) => {
        const { balance } = props;
        const ruBalance = balance * 89;
        return <Component {...props} ruBalance={ruBalance} />;
    };
};
