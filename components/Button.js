import React from "react";

export const Button = props => {
    return <button {...props} className="bg-indigo-600 text-white p-2 rounded-lg hover:opacity-90">{props.children}</button>;
};
