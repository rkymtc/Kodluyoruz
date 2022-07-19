import React from "react";

function Groups({ data, groupName }) {


    const groups = data.filter((member) => member.group === groupName);

    return <ul className=""> {groupName.toUpperCase() + ` GRUBU`}
        {groups.map((item) => (
            <>
                <li key={item.id}>
                    <span>{item.name.toUpperCase()}</span>  - <span>{item.group.toUpperCase()}</span>
                </li>
            </>
        ))}
    </ul>;
}

export default Groups;
