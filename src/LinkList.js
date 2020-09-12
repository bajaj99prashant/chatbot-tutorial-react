import React from 'react';
import './linkList.css';

function LinkList(props) {
    return (
        <ul className="link_list">
            {props.options.map((link) => (
                <li key={link.id} className="link_list_item">
                    <a href={link.url} target="_blank" rel='noopener noreferrer' className="link_list_item_url">
                        {link.text}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default LinkList;
