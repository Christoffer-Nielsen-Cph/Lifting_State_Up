const ListShow = ({list}) => {

    return (

        <div>

            {list.length > 0

                ? list.map((item) => {

                    return <li key={item}>{item}</li>;

                })

                : null}

        </div>

    );

};

export default ListShow;



