import React, { useState } from "react";
import ItemField from "./ItemField";
import AddMemberField from "./AddMemberField";
import { useTranslation } from "react-i18next";

const AddItemForm = ({ onClose, onSubmit }) => {
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [items, setItems] = useState([{ name: "", date: "" }]);
  const [members, setMembers] = useState([""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      tags: tags.split(",").map((tag) => tag.trim()),
      items: items.filter((item) => item.name),
      members: members.filter((member) => member),
    });
    onClose();
  };

  const addNewItem = () => {
    setItems([...items, { name: "", date: "" }]);
  };

  const removeNewItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateNewItems = (index, key, value) => {
    const updatedItems = [...items];
    updatedItems[index][key] = value;
    setItems(updatedItems);
  };

  const addNewMember = () => {
    setMembers([...members, ""]);
  };

  const removeNewMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const updateNewMember = (index, value) => {
    const updatedMembers = [...members];
    updatedMembers[index] = value;
    setMembers(updatedMembers);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>{t("addNewList")}</h2>
        <label>
          {t("title")}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          {t("tag")}
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </label>
        <button type="submit">{t("add")}</button>
        <button type="button" onClick={onClose}>
          {t("cancel")}
        </button>
        <div>
          <h3>
            {t("addItem")}{" "}
            <button type="button" onClick={addNewItem}>
              +
            </button>
          </h3>
          {items.map((val, index) => (
            <ItemField
              key={index}
              id={index}
              remove={() => removeNewItem(index)}
              update={(key, value) => updateNewItems(index, key, value)}
            />
          ))}
          <h3>
            {t("addMember")}{" "}
            <button type="button" onClick={addNewMember}>
              +
            </button>
          </h3>
          {members.map((val, index) => (
            <AddMemberField
              key={index}
              id={index}
              remove={() => removeNewMember(index)}
              update={(value) => updateNewMember(index, value)}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;