import React from 'react';
import Item from './Item';
import "../css/style.css"

const Menu = () => {
    const list = [
        { link: 'https://example.com/1', content: 'Liên kết 1' },
        { link: 'https://example.com/2', content: 'Liên kết 2' },
        { link: 'https://example.com/3', content: 'Liên kết 3' },
    ];

    return (
        <div>
            <ul className="menu"> {/* Apply menu class */}
                {list.map((item, index) => (
                    <li className="menu-item" key={index}> {/* Apply menu-item class */}
                        <Item link={item.link} content={item.content} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;