import { t } from 'i18next';
import React from 'react';

const ShoppingItem = ({ item, onToggle, onDelete}) => {
  return (
    <li className="shopping-item">
      <span
        style={{
          textDecoration: item.resolved ? 'line-through' : 'none',
        }}
      >
        {item.name}
      </span>
      <button onClick={() => onToggle(item._id)}>
        {item.resolved ? t("'unresolve'") : ("'resolve'")}
      </button>
      <button onClick={() => onDelete(item._id)}>{t("delete")}</button>
    </li>
  );
};

export default ShoppingItem;
