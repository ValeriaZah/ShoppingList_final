import { t } from 'i18next';
import React from 'react';

const MemberManagement = ({ members, onAdd, onRemove }) => {
  return (
    <div className="member-management">
      <h3>{t("member")}</h3>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.name} <button onClick={() => onRemove(member.id)}>{t("remove")}</button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const email = e.target.elements.email.value.trim();
          if (email) {
            onAdd(email);
            e.target.elements.email.value = '';
          }
        }}
      >
        <input type="email" name="email" placeholder={t("addByEmail")} />
        <button type="submit">{t("Add")}</button>
      </form>
    </div>
  );
};

export default MemberManagement;
